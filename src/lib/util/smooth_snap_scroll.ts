import { Sections } from "$lib/data/sections";
import { get, writable, type Writable } from "svelte/store";

let last_index: number;
let locked: boolean = false;
let container: HTMLElement;

export const index: Writable<number> = writable(0);
function setIndex(i: number) {
    index.set(i);
    sessionStorage.setItem("index", get(index).toString());
}

function initSmoothSnapScrolling() {
    last_index = document.querySelectorAll(".smooth-scroll-snap > section").length - 1;
    container = document.querySelector('.smooth-scroll-snap') as HTMLElement;
    
    const i: string | null = sessionStorage.getItem("index");
    if (i === null) {
        sessionStorage.setItem("index", index.toString());
    }
    else index.set(parseInt(i));

    gotoSection(get(index));

    addEventListener("wheel", onScroll, { passive: true });
    addEventListener("keydown", onKeyDown, { passive: true });

    return {
        destroy() {
            removeEventListener("wheel", onScroll);
            removeEventListener("keydown", onKeyDown);
        }
    }
};

function allowScroll(e: WheelEvent | KeyboardEvent): boolean {
    if (
        locked ||
        e.ctrlKey ||
        e.shiftKey ||
        e.metaKey ||
        e.altKey
    ) return false
    else return true
}

/**
 * Scroll wheel navigation
 */
function onScroll(e: WheelEvent) {
    if (!allowScroll(e)) return;

    gotoSection(
        Math.max(
            0,
            Math.min(
                get(index) + Math.sign(e.deltaY),
                last_index
            )
        )
    );
}

/**
 * Arrow key navigation
 */
function onKeyDown(e: KeyboardEvent) {
    if (!allowScroll(e)) return;

    switch(e.code) {
        case 'ArrowUp':
            index.update(i => i - 1);
            break;
        case 'ArrowDown':
            index.update(i => i + 1);
            break;
    }

    gotoSection(
        Math.max(
            0,
            Math.min(
                get(index),
                last_index
            )
        )
    );
}

/**
 * Use section index or name
 */ 
function gotoSection(section: number | string) {
    locked = true;
    setTimeout(() => locked = false, 300);

    let i: number;

    switch (typeof section) {
        case 'number':
            i = Math.max(0, Math.min(section, Sections.length - 1));
            break;
        case 'string': {
            i = Math.max(0, Sections.indexOf(section));
            break;
        }
    }

    if (get(index) != i) setIndex(i);

    container.style.setProperty('--section-index', i.toString());
}

/**
 * Correction function to move the screen to the position of the focused element to prevent out of view focus.
 */
function correctSectionIndex(node: HTMLElement, i: number) {
    const handler = () => gotoSection(i);
    node.addEventListener("focusin", handler, { passive: true });

    return {
        destroy() {
            node.removeEventListener("focusin", handler);
        }
    };
}

export { initSmoothSnapScrolling, gotoSection, correctSectionIndex}