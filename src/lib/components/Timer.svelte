<script lang="ts">
    import { countdown_target } from '$lib';
	import TimerElement from './TimerElement.svelte';

    let countdown = $state({
        sec: 0,
        min: 0,
        hrs: 0,
        days: 0,
    });

    function updateCountdown() {
        const now = Date.now();
        const diff = countdown_target.getTime() - now;
        if (diff <= 0) {
            countdown = {
                sec: 0,
                min: 0,
                hrs: 0,
                days: 0,
            };
        return;
        }

        countdown.sec = Math.floor(diff / 1000) % 60;
        countdown.min = Math.floor(diff / 1000 / 60) % 60;
        countdown.hrs = Math.floor(diff / 1000 / 60 / 60) % 24;
        countdown.days = Math.floor(diff / 1000 / 60 / 60 / 24);
    }
    updateCountdown();
    setInterval(updateCountdown, 1000);
</script>

<div class="flex my-5">
    <TimerElement num={countdown.days} label=Days/>
    <TimerElement num={countdown.hrs} label=Hours/>
    <TimerElement num={countdown.min} label=Minutes/>
    <TimerElement num={countdown.sec} label=Seconds/>
</div>