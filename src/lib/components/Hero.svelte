<script lang="ts">
	import HeroBg from './HeroBg.svelte';
	import { gotoSection } from '$lib/util/smooth_snap_scroll';
	import Card from './Card.svelte';
	import ScrollHint from './ScrollHint.svelte';
</script>

<style>
    @reference "../../styles/app.css";

    h1 {
        font-size: clamp(28px, 4.5vw, 52px);
        letter-spacing: -0.02em;
        @apply
            font-bold
            mb-8
        ;
    }

    p {
        @apply
            text-muted
        ;
    }

    button {
        @apply
            w-full
            mt-5
            underline
            hover:scale-110
            duration-200
        ;
    }
</style>

<HeroBg/>

<Card>
    <h1>Welcome to MinaCon</h1>
    <p>By Minawan, for Minawan — annual fan meetup celebrating CerberVT and the Minawan community.</p>
    <button onclick={() => gotoSection("Countdown")}>Next MinaCon</button>
</Card>

<ScrollHint/>