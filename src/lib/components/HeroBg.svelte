<script lang="ts">
	import { onDestroy, onMount } from "svelte";
    import cloud_1 from "$lib/images/cloud_1.webp";
    import cloud_2 from "$lib/images/cloud_2.webp";
    import cloud_3 from "$lib/images/cloud_3.webp";
    import title from "$lib/images/title.webp";
    import six_img from "$lib/images/6.webp";
    import screw from "$lib/images/screw.webp";

    
    const native_six_width: number = 192;
    const native_six_height: number = 110;
    const origin_x: number = 0.705;
    const origin_y: number = 0.38;
    const native_cloud_width = 576;
    let six_elem: HTMLElement;
    
    function updateOrigin() {
        const vw = window.innerWidth;
        const vh = window.innerHeight;

        const scale_x = vw / native_six_width;
        const scale_y = vh / native_six_height;
        const scaled_width = native_six_width * scale_x;
        const scaled_height = native_six_height * scale_y;

        const offset_x = (vw - scaled_width) / 2;
        const offset_y = (vh - scaled_height) / 2;

        const ox = offset_x + scaled_width * origin_x;
        const oy = offset_y + scaled_height * origin_y;

        six_elem.style.transformOrigin = `${ox}px ${oy}px`;
    }

    function updateClouds() {
        const vw = window.innerWidth;

        const scale = vw / native_cloud_width;
        const travel = native_cloud_width * scale;

        document.documentElement.style.setProperty('--cloud-travel', `${travel}px`);
    }

    onMount(() => {
        addEventListener("resize", updateClouds, {passive: true});
        addEventListener("resize", updateOrigin, {passive: true});
        
        updateClouds();
        updateOrigin();

        onDestroy(() => {
            removeEventListener("resize", updateClouds);
            removeEventListener("resize", updateOrigin);
        });
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
        100% {
            transform:
                translateX(var(--cloud-travel))
            ;
        }
    }

    .cloud {
        background-repeat: repeat-x;
        background-position: bottom center;
        background-size: auto 115vh;
        transform-origin: bottom;
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
        animation: side-scroll 150s linear infinite;
    } 
    .cloud-2 {
        z-index: -2;
        animation: side-scroll 90s linear infinite;
    }

    .cloud-3 {
        z-index: -1;
        animation: side-scroll 50s linear infinite;
    }

    .title-anchor {
        @apply
            relative
            size-full
            grid
            place-items-center
        ;
    }

    .title {
        @apply
            absolute
            aspect-video
            size-[85%]
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
    <div class="cloud cloud-1" style="background-image: url({cloud_1});"></div>
    <div class="cloud cloud-2" style="background-image: url({cloud_2});"></div>
    <div class="cloud cloud-3" style="background-image: url({cloud_3});"></div>
</div>

<div class="size-full absolute">
    <div class="title-anchor">
        <div class="title" style="background-image: url({title});"></div>
        <div class="title sway" style="background-image: url({six_img});" bind:this={six_elem}></div>
        <!-- <div class="title sway" style="background-image: url({six_img});"></div> -->
        <div class="title static" style="background-image: url({screw});"></div>
    </div>
</div>
