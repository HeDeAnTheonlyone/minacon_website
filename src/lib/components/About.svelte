<script lang="ts">
	import Card from "./Card.svelte";

</script>

<style>
    @reference '../../styles/app.css';

    .cols-2 {
        display: grid;
        gap: 20px;
        align-items: center;
        @apply
            grid-cols-1
            md:grid-cols-2
        ;
    }
</style>

<Card>
    <h2>About MinaCon</h2>
    <div class="card cols-2" style="padding:28px;">
        <div>
            <p>MinaCon is a private, fan-organized meetup where Minawan gather once a year somewhere in Europe to
            celebrate CerberVT and the community.</p>
            <p style="font-size:13px;color:var(--color-muted)"><em>Note: MinaCon is not affiliated with CerberVT but created
                with love by her fans.</em></p>
        </div>
        <div>
            <h3>Quick Info</h3>
            <ul style="margin:0;padding-left:18px;color:var(--color-muted)">
                <li>Private, invite-based event</li>
                <li>Rotating location in Europe</li>
                <li>Community-led activities and casual meetups</li>
            </ul>
        </div>
    </div>
</Card>