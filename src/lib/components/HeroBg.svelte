<script lang="ts">
	import { onDestroy, onMount } from "svelte";

    let six: HTMLDivElement;
    let ro: ResizeObserver;

    const img_width: number = 192;
    const img_height: number = 110;
    const origin_x: number = 0.78;
    const origin_y: number = 0.43;

    function updateOrigin() {
        if (!six) return;

        const rect = six.getBoundingClientRect();

        const scale = Math.min(rect.width / img_width, rect.height / img_height);
        const scaled_width = img_width * scale;
        const scaled_height = img_height * scale;

        const offset_x = (rect.width - scaled_width) / 2;
        const offset_y = (rect.height - scaled_height) / 2;

        const ox = offset_x + scaled_width * origin_x;
        const oy = offset_y + scaled_height * origin_y;

        // console.log(`scale: ${scale}\nox: ${ox}\noy: ${oy}\ncw: ${rect.width}\nch: ${rect.height}\noff x: ${offset_x}\noff y: ${offset_y}`);

        six.style.transformOrigin = `${ox}px ${oy}px`;
    }

    onMount(() => {
        ro = new ResizeObserver(updateOrigin);
        ro.observe(six);

        updateOrigin();
    });

    onDestroy(() => {
        ro?.disconnect();
    });
</script>

<style>
    @reference "../../styles/app.css";

    div {
        position: absolute;
        image-rendering: pixelated;
    }

    .sky {
        background: linear-gradient(180deg, #607ddc, #80a1f2);
        @apply
            inset-0
            -z-10
        ;
    }

    @keyframes side-scroll {
        0% {
            transform:
                translateX(0px)
                scale(var(--cloud-scale))
            ;
        }

        100% {
            transform:
                translateX(calc(var(--cloud-width) * var(--cloud-scale)))
                scale(var(--cloud-scale))
            ;
        }
    }

    .cloud {
        --cloud-width: 576px;
        --cloud-height: 324px;
        --cloud-scale: max(calc( 115vh / var(--cloud-height)), 1);
        background-repeat: repeat-x;
        background-position: bottom center;
        transform-origin: bottom;
        transform: scale(var(--cloud-width) * 1);
        @apply
            absolute
            bottom-0
            left-[-200vw]
            w-[300vw]
            h-screen
        ;
    }

    .cloud-1 {
        z-index: -3;
        background-image: url('cloud_1.png');
        animation: side-scroll 150s linear infinite;
    } 
    .cloud-2 {
        z-index: -2;
        background-image: url('cloud_2.png');
        animation: side-scroll 90s linear infinite;
    }

    .cloud-3 {
        z-index: -1;
        background-image: url('cloud_3.png');
        animation: side-scroll 50s linear infinite;
    }

    .title-anchor {
        @apply
            size-full
            place-items-center
        ;
    }

    .title {
        transform: translateY(100px);
        @apply
            aspect-video
            size-[80%]
            bg-no-repeat
            bg-center
            bg-contain
        ;
    }

    .sway {
        animation: sway 5s ease-in-out infinite;
    }

    @keyframes sway {
        0% { rotate: -10deg; }
        50% { rotate: 5deg; }
        100% { rotate: -10deg; }
    }
</style>

<div class="sky">
    <div class="cloud cloud-1"></div>
    <div class="cloud cloud-2"></div>
    <div class="cloud cloud-3"></div>
</div>

<div class="title-anchor">
    <div class="title" style="background-image: url('title.png');"></div>
    <div class="title sway" bind:this={six} style="background-image: url('6.png');"></div>
    <div class="title static" style="background-image: url('screw.png');"></div>
</div>
