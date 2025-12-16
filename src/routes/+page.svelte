<script lang="ts">
	import Hero from "$lib/components/Hero.svelte";
	import CountDown from "$lib/components/CountDown.svelte";
	import About from "$lib/components/About.svelte";
	import Cerber from "$lib/components/Cerber.svelte";
	import Testimony from "$lib/components/Testimony.svelte";
	import Gallery from "$lib/components/Gallery.svelte";
	import Contact from "$lib/components/Contact.svelte";
	import { onMount, type Component } from "svelte";
    import { initSmoothSnapScrolling } from "$lib/smooth_snap_scroll";

    const Sections: Component[] = [
        Hero,
        CountDown,
        About,
        Cerber,
        Testimony,
        Gallery,
        Contact
    ];

    onMount(() => initSmoothSnapScrolling());
</script>

<style>
    .smooth-scroll-snap {
        --section-index: 0;
        transform: translateY(calc(-100vh * var(--section-index)));
        transition-duration: 500ms;
    }
</style>

<!-- ================================ -->

<main class="smooth-scroll-snap">
    {#each Sections as section}
        <section>
            <svelte:component this={section}/>
        </section>
    {/each}
</main>