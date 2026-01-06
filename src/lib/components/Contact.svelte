<script lang="ts">
	import Card from "./Card.svelte";
	import ContactBg from "./ContactBg.svelte";
</script>

<style>
    @reference "../../styles/app.css";

    .contact {
        @apply
            flex
            flex-col
        ;
    }

    .meta {
        @apply
            flex
            items-center
        ;
    }
</style>

<ContactBg/>

<Card>
    <h2>Contact Us</h2>
    <p class="m-5">Want to contact the staff?</p>
    <div class="contact">
        <div class="flex gap-8">
            <div>
                <p class="meta">Discord:</p>
                <p class="meta">Email:</p>
            </div>
            <div>
                <p class="muted">samsa1337, imdasmiya</p>
                <a href="mailto:minacon@minawan.dog">minacon@minawan.dog</a>
            </div>
        </div>
    </div>
    <div class="mt-8">© MinaCon · Built with love by Minawan</div>
</Card>