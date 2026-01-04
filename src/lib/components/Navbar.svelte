<script lang='ts'>
    import NavLogo from './NavLogo.svelte';
    import { index, gotoSection } from '$lib/util/smooth_snap_scroll';
    import { Sections } from '$lib/data/sections';
</script>

<style>
    @reference '../../styles/app.css';

    header {
        @apply
            sticky
            top-0
            w-full
            h-(--nav-height)
            z-10
            flex
            px-10
            -mb-18
            border-b
            border-glass
            gap-12
            items-center
            justify-between
            backdrop-blur-sm
            shadow-glass
        ;
    }
    
    nav {
        @apply
            flex
            justify-center
            w-full
            space-x-5
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
            -translate-y-0.75
            bg-[#ffffff88]
        ;
    }

    .underlining {
        @apply
            underline
            decoration-2
            scale-105
        ;
    }
</style>

<header>
    <NavLogo/>
    <nav>
        {#each Sections as button, i}
            {#if i != 0}
                <span>|</span>
            {/if}
            <button
                class="{$index == i ? 'underlining' : ''}"
                onclick={() => gotoSection(i)}
            >
                {button}
            </button>
        {/each}
    </nav>
</header>