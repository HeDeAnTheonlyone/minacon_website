<script lang="ts">
    import { testimonies } from "$lib/data/testimonies";
	import { onMount } from "svelte";
	import SpeechBubble from "./SpeechBubble.svelte";

    const default_offsets: string[] = ['-150vw', '-30vw', '0%', '30vw', '150vw'];
    let offsets: string[] = $state(default_offsets);
    let indices: number[] = $state([testimonies.length - 1, 0, 1, 2, 3]);
    let locked: boolean = false;
    let animate: boolean = $state(true);
    let active_index: number = $state(2);

    function rotate(direction: -1 | 1) {
        for (let i = 0; i < indices.length; i++) {
            let index: number = indices[i];
            const m = testimonies.length;
            index = (((index + direction) % m) + m) % m;
            indices[i] = index;
        } 
    }

    function moveOffset(directions: -1 | 0 | 1) {
        let a: string;
        switch (directions) {
            case -1:
                offsets.pop()!;
                a = offsets[0];
                offsets.unshift(a);
                active_index = 3;
                break;
            case 1:
                offsets.shift()!;
                a = offsets[offsets.length - 1];
                offsets.push(a);
                active_index = 1;
                break;
            case 0:
                offsets = default_offsets;
                active_index = 2;
                break;
        }
    }

    function startRotateSequence(direction: -1 | 1) {
        if (locked) return;
        locked = true;

        moveOffset(direction);
        setTimeout(() => {
            rotate(direction * -1 as -1 | 1);
            moveOffset(0);
            animate = false;
                setTimeout(() => {
                    animate = true;
                    locked = false;
                }, 10);
        }, 400);
    }

    function onkeypress(e: KeyboardEvent) {

    }

    onMount(() => {
        
    });
</script>

<style>
    @reference '../../styles/app.css';

    .carousel {
        @apply
            flex
            size-full
            justify-center
        ;
    }

    .carousel-elem {
        @apply
            absolute
            size-[25vh]
            bg-contain
            bg-no-repeat
            bottom-5
            origin-bottom
            flex
            justify-center
            -z-2
        ;
    }

    .arrow-bubble-grid {
        grid-template-columns: 20% 60% 20%;
        @apply
            w-full
            h-1/4
            grid
        ;
    }

    @keyframes horizontal-hover {
        0% {transform: translateX(calc(5px * var(--direction)))}
        50% {transform: translateX(calc(-5px * var(--direction)))}
        100% {transform: translateX(calc(5px * var(--direction)))}
    }

    .selection-arrow {      
        @apply
            place-self-center
            duration-200
            hover:scale-120
        ;
        animation: 2s ease-in-out infinite horizontal-hover;
    }
</style>

<div class="carousel">
    {#each indices as index, i}
        {#if i == 2}
            <div class="arrow-bubble-grid">
                <button
                    aria-label="button left"
                    onclick={() => {startRotateSequence(-1)}}
                >
                    <svg
                        width="50"
                        height="100"
                        class="selection-arrow"
                        style="--direction: -1;"
                    >
                        <polygon
                            points="50,0 0,50 50,100"
                            stroke="black"
                            stroke-width="3"
                            fill="white"
                        />
                    </svg>
                </button>
                <SpeechBubble elem={testimonies[index]}/>
                <button
                    aria-label="button left"
                    onclick={() => {startRotateSequence(1)}}
                >
                    <svg
                        width="50"
                        height="100"
                        class="selection-arrow"
                        style="--direction: 1;"
                    >
                        <polygon
                            points="0,0 50,50 0,100"
                            stroke="black"
                            stroke-width="3"
                            fill="white"
                        />
                    </svg>
                </button>
            </div>
        {/if}
        <div
            class="carousel-elem {animate ? 'duration-400' : ''}  {i == active_index ? 'scale-150 -translate-y-5 z-2' : ''}"
            style="background-image: url({testimonies[index].img});transform: translateX({offsets[i]})"
        ></div>
    {/each}
</div>