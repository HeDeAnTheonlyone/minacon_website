import { Sections } from "$lib/data/sections";

let last_index: number;
let locked: boolean = false;
let container: HTMLElement;

let index: number = 0;
function setIndex(i: number) {
    index = i;
    sessionStorage.setItem("index", index.toString());
}

function initSmoothSnapScrolling() {
    last_index = document.querySelectorAll(".smooth-scroll-snap > section").length - 1;
    container = document.querySelector('.smooth-scroll-snap') as HTMLElement;
    
    const i: string | null = sessionStorage.getItem("index");
    if (i === null) {
        sessionStorage.setItem("index", index.toString());
    }
    else index = parseInt(i);

    gotoSection(index);

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

function onScroll(e: WheelEvent) {
    if (!allowScroll(e)) return;

    index += Math.sign(e.deltaY);
    setIndex(Math.max(0, Math.min(index, last_index)));
    gotoSection(index);    
}

function onKeyDown(e: KeyboardEvent) {
    if (!allowScroll(e)) return;

    switch(e.code) {
        case 'ArrowUp':
            index -= 1;
            break;
        case 'ArrowDown':
            index += 1;
            break;
    }

    setIndex(Math.max(0, Math.min(index, last_index)));
    gotoSection(index);
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

    if (index != i) setIndex(i);

    container.style.setProperty('--section-index', index.toString());
}

function correctSectionIndex(node: HTMLElement, index: number) {
    const handler = () => gotoSection(index);
    node.addEventListener("focusin", handler, { passive: true });

    return {
        destroy() {
            node.removeEventListener("focusin", handler);
        }
    };
}

export { initSmoothSnapScrolling, gotoSection, correctSectionIndex}