<script lang="ts">
	import TestimonyCarousel from "./TestimonyCarousel.svelte";
</script>

<style>
    @reference "../../styles/app.css";

    .headline {
        @apply
            relative
            pt-30
            w-full
            h-1/4
            text-center
        ;
    }

    .spotlight {
        @apply
            absolute
            bg-black
            h-[150%]
            w-2/3
            top-[-10%]
            opacity-50
            blur-lg
            pointer-events-none
            -z-1
        ;
    }

    .left-side {
        @apply
            rotate-16
            right-[50%]
            origin-top-right
        ;
    }

    .right-side {
        @apply
            -rotate-16
            left-[50%]
            origin-top-left
        ;
    }
</style>

<div class="size-full">
    <div class="-z-3 absolute inset-0 bg-[#fff7db]"></div>
    <h2 class="headline">What Minawan Say</h2>
    <TestimonyCarousel/>
    <div class="spotlight left-side"></div>
    <div class="spotlight right-side"></div>
</div>