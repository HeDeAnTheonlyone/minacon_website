<script lang="ts">
	import '../styles/app.css';
	import '../styles/fonts.css';
	import '../lib/components/Navbar.svelte';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<title>Minacon 2026</title>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children?.()}
