<script lang="ts">
	import HeroBg from './HeroBg.svelte';
	import { gotoSection } from '$lib/smooth_snap_scroll';
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
</style>

<HeroBg/>

<Card>
    <h1>Welcome to MinaCon</h1>
    <p>By Minawan, for Minawan — annual fan meetup celebrating CerberVT and the Minawan community.</p>
    <div style="margin-top:18px">
        <button class=" underline hover:scale-110 duration-200" onclick={() => gotoSection("Countdown")}>Next MinaCon</button>
    </div>
</Card>

<ScrollHint/>