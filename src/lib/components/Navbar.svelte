<script lang='ts'>
    import NavLogo from './NavLogo.svelte';
    import { gotoSection, Sections } from '$lib/smooth_snap_scroll';
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
        text-text
        font-bold
        text-lg
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
            bg-[#ffffff88]
        ;
    }
</style>

<header class='sticky'>
    <NavLogo/>
    <nav class='flex justify-center w-full space-x-5'>
        {#each Sections as button, index}
            {#if index != 0}
                <span>|</span>
            {/if}
            <button onclick={() => gotoSection(index)}>{button}</button>
        {/each}
    </nav>
</header>