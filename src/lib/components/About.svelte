<script lang="ts">
	import AboutBg from "./AboutBg.svelte";
	import Card from "./Card.svelte";
</script>

<style>
    @reference '../../styles/app.css';

    .text-container {
        @apply
            grid
            grid-cols-1
            md:grid-cols-2
            items-center
            gap-10
            p-7
        ;
    }

    .note {
        @apply
            text-[13px]
            pt-5
        ;
    }

    ul {
        @apply
            align-top
            list-disc
            list-inside
            ml-1
        ;
    }
</style>

<AboutBg/>

<Card>
    <h2>About MinaCon</h2>
    <div class="text-container">
        <div>
            <p>
                MinaCon is a private, fan-organized meetup where Minawan gather once a year somewhere 
                in Europe to celebrate CerberVT and the community.
            </p>
        </div>
        <div>
            <h3>Quick Info:</h3>
            <ul>
                <li>Private, invite-based event</li>
                <li>Rotating location in Europe</li>
                <li>Community-led activities and casual meetups</li>
            </ul>
        </div>
    </div>
    <p class="note">
        <em>
            Note: MinaCon is not affiliated with CerberVT but created with love by her fans.
        </em>
    </p>
</Card>