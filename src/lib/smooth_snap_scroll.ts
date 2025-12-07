
let index: number = 0;
let last_index: number;
let locked: boolean = false;
let container: HTMLElement;

export const Sections = [
    'Welcome',
    'Countdown',
    'About MinaCon',
    'About Cerber',
    'Testimonies',
    'Gallery',
    'Contact'
];

export function initSmoothSnapScrolling() {
    last_index = document.querySelectorAll(".smooth-scroll-snap > section").length - 1;
    container = document.querySelector('.smooth-scroll-snap') as HTMLElement;

    addEventListener("wheel", onScroll, { passive: false });
    addEventListener("keydown", onKeyDown, { passive: false });
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
    index = Math.max(0, Math.min(index, last_index));
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

    index = Math.max(0, Math.min(index, last_index));
    gotoSection(index);
}

export function gotoSection(index: number | string) {
    locked = true;
    setTimeout(() => locked = false, 300);

    switch (typeof index) {
        case 'number':
            container.style.setProperty('--section-index', index.toString());
            break;
        case 'string': {
            const i: number = Math.max(0, Sections.indexOf(index));
            container.style.setProperty('--section-index', i.toString());
            break;
        }
    }
}