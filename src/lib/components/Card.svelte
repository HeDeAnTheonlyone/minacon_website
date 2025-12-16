<script lang="ts">
    let {
        children,
        extra_classes = "",
    } = $props();
</script>

<style>
    @reference '../../styles/app.css';

    .section {
        @apply
            w-full
            h-screen
            px-5
            justify-items-center
            content-center
            z-1
        ;
    }

    .card {
        box-shadow: var(--shadow-glass);
        @apply
            justify-items-center
            relative
            z-3
            max-w-2/5
            w-full
            mx-6
            p-10
            rounded-[18px]
            bg-glass
            backdrop-blur-sm
            border-glass
            border-b-2
        ;
    }

</style>

<div class="section">
    <div class="card {extra_classes}">
        {@render children?.()}
    </div>
</div>