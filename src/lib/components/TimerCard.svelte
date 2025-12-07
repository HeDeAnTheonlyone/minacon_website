<script lang="ts">
	import Card from "./Card.svelte";
	import Timer from "./Timer.svelte";

</script>

<Card heading="Countdown to the Next MinaCon" extra_classes="float-anim">
    <p class="muted">Mark your calendars — next MinaCon: <strong>July 27, 2026</strong></p>
    <Timer/>
</Card>