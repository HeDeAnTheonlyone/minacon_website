<script lang="ts">
    let {
        elem
    } = $props();
</script>

<style>
    @reference '../../styles/app.css';

    .speech-bubble {
        @apply
            bg-white
            relative
            w-full
            mx-auto
            rounded-4xl
            border-[3px]
        ;
    }
</style>

<div class="speech-bubble">
    <div class="flex flex-col items-center my-3 mx-10">
        <p class="mb-3 underline">
            <strong>
                {elem.name}:
            </strong>
        </p>
        <p>
            {elem.text}
        </p>
    </div>
    <svg width="50" height="75" class="absolute top-full left-[50%] translate-x-[-50%]">
        <path
            d="M0,0 L25,70 L50,0"
            stroke="black"
            stroke-width="3"
            fill="white"
        />
    </svg>
</div>