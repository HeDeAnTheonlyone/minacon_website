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
            gap-2
        ;
    }

    .meta {
        @apply
            flex
            gap-3
            items-center
        ;
    }
</style>

<ContactBg/>

<Card>
    <h2>Contact Us</h2>
    <div class="card">
        <p class="muted mb-5">Want to contact the staff?</p>
        <div class="contact">
            <div class="flex gap-5">
                <div>
                    <div class="meta">Discord:</div>
                    <div class="meta">Email:</div>
                </div>
                <div>
                    <span class="muted">samsa1337</span>
                    <br>
                    <a class="underline" href="mailto:minacon@minawan.dog">minacon@minawan.dog</a>
                </div>
            </div>
        </div>
    </div>
    <div class="justify-self-center">© MinaCon · Built with love by Minawan</div>
</Card>