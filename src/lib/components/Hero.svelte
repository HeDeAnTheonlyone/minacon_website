<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import HeroBg from './HeroBg.svelte';

    let show_arrow = $state(true);

    function onScroll() {
        show_arrow = scrollY <= 0;
    }

    onMount(() => {
        addEventListener('scroll', onScroll);
    });
</script>

<style>
    @reference "../../styles/app.css";

    .hero-card {
        box-shadow: var(--shadow-glass);
        text-align: center;
        @apply
            relative
            z-3
            max-w-[1100px]
            mx-6
            p-10
            rounded-[18px]
            bg-glass
            backdrop-blur-sm
            border-glass
            border-b-2
        ;
    }

    h1 {
        font-family: 'Poppins', 'Nunito';
        font-size: clamp(28px, 4.5vw, 44px);
        letter-spacing: -0.02em;
        @apply
            font-extrabold
            mb-8
        ;
    }

    p.lead {
        font-size: clamp(14px, 2.1vw, 18px);
        @apply
            text-muted
        ;
    }

    .scroll-hint {
        @apply
            absolute
            bottom-7
            z-40
            opacity-90
        ;
    }
</style>

<HeroBg/>

<div class="hero-card" role="region" aria-labelledby="welcomeTitle">
    <h1 id="welcomeTitle">Welcome to MinaCon</h1>
    <p class="lead">By Minawan, for Minawan — annual fan meetup celebrating CerberVT and the Minawan community.</p>
    <div style="margin-top:18px">
        <a href="#countdown" class="btn hover:scale-110 duration-300">Next MinaCon</a>
    </div>
</div>

<div class="scroll-hint" aria-hidden="true">
    {#if show_arrow}
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" class="animate-bounce">
        <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"
        stroke-linejoin="round" />
    </svg>
    {/if}
</div>