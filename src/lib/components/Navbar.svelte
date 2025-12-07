<script lang='ts'>
	import { onMount } from 'svelte';
    import NavLogo from './NavLogo.svelte';

    const buttons = [
        'Welcome',
        'Countdown',
        'About MinaCon',
        'About Cerber',
        'Testimonies',
        'Gallery',
        'Contact'
    ];
    let container: HTMLElement;

    function gotoSection(index: number) {
        container.style.setProperty('--section-index', index.toString());
    }

    onMount(() => {
        container = document.querySelector('.smooth-scroll-snap') as HTMLElement;
    });
</script>

<style>
    @reference '../../styles/app.css';

    header {
        box-shadow: var(--shadow-glass);
        @apply
            sticky
            top-0
            h-(--nav-height)
            z-10
            flex
            px-10
            mb-[-72px]
            border-b
            border-glass
            gap-12
            items-center
            justify-between
            backdrop-blur-sm
        ;
    }

    
    button, span {
        @apply
        px-6
        py-3
        rounded-xl
        font-semibold
        duration-200
        ;
    }

    span {
        @apply
            px-0
            select-none
        ;
    }
    
    button:hover {
        @apply
            translate-y-[-3px]
            bg-[rgba(219,121,255,0.47)]
        ;
    }
</style>

<header class='sticky'>
    <NavLogo/>
    <nav class='flex justify-center w-full space-x-5'>
        {#each buttons as button, index}
            {#if index != 0}
                <span>|</span>
            {/if}
            <button onclick={() => {gotoSection(index)}}>{button}</button>
        {/each}
    </nav>
</header>