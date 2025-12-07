<script lang="ts">
	import '../styles/app.css';
	import '../styles/fonts.css';
	import '../lib/components/Navbar.svelte';
	import Navbar from '../lib/components/Navbar.svelte';
	import Background from '$lib/components/Background.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<title>Minacon 2026</title>
	<link rel="icon" href="/favicon.png" />
</svelte:head>
<div class="relative">
	<Navbar/>
	<Background/>
	{@render children?.()}
</div>
