<script lang="ts">
	import TimerElement from './TimerElement.svelte';

    const countdown_target: Date = new Date(2026, 6, 27, 12, 0, 0);

    let countdown = $state({
        days: "0",
        hours: "0",
        minutes: "0",
        seconds: "0",
    });

    function updateCountdown() {
        const now = Date.now();
        const diff = countdown_target.getTime() - now;
        if (diff <= 0) {
            countdown = {
                days: "0",
                hours: "0",
                minutes: "0",
                seconds: "0",
            };
            return;
        }

        countdown.days = Math.floor(diff / 1000 / 60 / 60 / 24).toString().padStart(2, "0");
        countdown.hours = (Math.floor(diff / 1000 / 60 / 60) % 24).toString().padStart(2, "0");
        countdown.minutes = (Math.floor(diff / 1000 / 60) % 60).toString().padStart(2, "0");
        countdown.seconds = (Math.floor(diff / 1000) % 60).toString().padStart(2, "0");
    }
    updateCountdown();
    setInterval(updateCountdown, 1000);
</script>

<style>
    @reference "../../styles/app.css";

    .timer {
        @apply
            w-full
            flex
            justify-center
            my-5
            px-25
        ;
    }

    @keyframes wave {
        0% {
            transform: translateY(15px);
        }

        50% {
            transform: translateY(-15px);
        }

        100% {
            transform: translateY(15px);
        }
    }

    
    .wave {
        animation: wave 3s ease-in-out infinite;
    }

    .delay-0 {
        animation-delay: -1500ms;
    }
    .delay-1 {
        animation-delay: -1000ms;
    }
    .delay-2 {
        animation-delay: -500ms;
    }
    .delay-3 {
        animation-delay: 0ms;
    }
</style>

<div class="timer">
    {#each Object.entries(countdown) as [label, num], index}
        {#if index != 0}
            <TimerElement num=":"/>
        {/if}
        <div class="wave {`delay-${index}`}"> 
            <TimerElement num={num} label={label}/>
        </div>
    {/each}
</div>