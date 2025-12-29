<script lang="ts">
	import { onMount } from "svelte";

    let minutes: HTMLElement;
    let hours: HTMLElement;

    const minute_offset = 135;
    const hour_offset = 225;

    let minute_rot: number = 0;
    let hour_rot: number = 0;

    onMount(() => {       
        const start_time = crypto.getRandomValues(new Uint32Array(1))[0] % 360;

        hour_rot = start_time;
        minute_rot = start_time * 60 % 360;
        
        setInterval(moveClockhands, 300);
    });

    function moveClockhands() {
        updateRotation();

        minutes.style.setProperty('--minute-rot', (minute_rot + minute_offset).toString() + "deg")
        hours.style.setProperty('--hour-rot', (hour_rot + hour_offset).toString() + "deg")
    }

    function updateRotation() {
        minute_rot = (minute_rot + 6) % 360;
        hour_rot = (hour_rot + 0.1) % 360;
    }
</script>

<style>
    @reference '../../styles/app.css';

    .watch {
        image-rendering: pixelated;
        background-size: contain;
        transform-origin: 50% 50%;
        @apply
            bg-center
            absolute
            inset-20
            bg-no-repeat
        ;
    }
    
    .minutes {
        --minute-rot: 135deg;
        rotate: var(--minute-rot);
    }
    
    .hours {
        --hour-rot: 255deg;
        rotate: var(--hour-rot);
    }
</style>

<div class=" w-full">
    <div class="watch" style="background-image: url('pocket_watch.png')"></div>
    <div class="watch minutes" bind:this={minutes} style="background-image: url('minute_hand.png')"></div>
    <div class="watch hours" bind:this={hours} style="background-image: url('hour_hand.png')"></div>
</div>