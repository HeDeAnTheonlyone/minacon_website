<style>
    @reference "../../styles/app.css";

    .scroll-hint {
        @apply
            absolute
            w-full
            flex
            place-content-center
            bottom-7
            z-40
            opacity-90
        ;
    }
</style>

<div class="scroll-hint" aria-hidden="true">
    <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        class="animate-bounce"
    >
        <path
            d="M12 5v14M5 12l7 7 7-7"
            stroke="currentColor"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
    </svg>
</div>