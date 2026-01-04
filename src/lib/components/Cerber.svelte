<script lang="ts">
	import Card from "./Card.svelte";
    import bg from "$lib/images/cerber_bg.png";
</script>

<style>
    @reference "../../styles/app.css";

    .text-container {
        @apply
            p-7
        ;
    }

    .bg {
        @apply
            absolute
            size-full
            bg-contain
            bg-center
        ;
    }
</style>

<div class="bg" style="background-image: url({bg});"></div>
<Card>
    <h2>About CerberVT</h2>
    <div class="text-container">
        <p>Cerber is a cheerful beacon of intense positivity and wholesomeness. She playfully adds "-wan" as an
            honorific to the end of the names of her community members and friends. You'll frequently hear her switching
            "1" for "wan" at any given opportunity!
        </p>
        <p>Though she is a Hellhound, she is extremely welcoming and kind, but push your luck and she'll bite your head
            off. Her community is called <strong>Minawan</strong> (wordplay from "mina-san", "everyone" in Japanese).
        </p>
    </div>
    <div class="flex">
            <p>
                More info:
                <a href="https://virtualyoutuber.fandom.com/wiki/CerberVT" target="_blank" rel="external">CerberVT</a>
                <span class="mx-3">|</span>
                Wiki:
                <a href="https://www.twitch.tv/cerbervt" target="_blank" rel="external">Twitch Channel</a>
            </p>
    </div>
</Card>