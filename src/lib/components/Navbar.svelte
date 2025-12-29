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
            /* bg-glass */
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
</style>

<!-- <div class="w-full flex"> -->
<header>
    <NavLogo/>
    <nav>
        {#each Sections as button, index}
            {#if index != 0}
                <span>|</span>
            {/if}
            <button onclick={() => gotoSection(index)}>{button}</button>
        {/each}
    </nav>
</header>
<!-- </div> -->