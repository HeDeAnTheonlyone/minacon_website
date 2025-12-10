<script lang="ts">
	import Card from "$lib/components/Card.svelte";
	import Gallery from "$lib/components/Gallery.svelte";
	import Hero from "$lib/components/Hero.svelte";
	import Testimony from "$lib/components/Testimony.svelte";
	import CountDown from "$lib/components/CountDown.svelte";
	import { onMount } from "svelte";
    import { initSmoothSnapScrolling } from "$lib/smooth_snap_scroll";

    onMount(() => initSmoothSnapScrolling());
</script>

<style>
    @reference "../styles/app.css";

    .cols-2 {
        display: grid;
        gap: 20px;
        align-items: center;
        @apply
            grid-cols-1
            md:grid-cols-2
        ;
    }

    .contact {
        display: flex;
        flex-direction: column;
        gap: 8px
    }

    .contact .meta {
        display: flex;
        gap: 12px;
        align-items: center
    }

    .smooth-scroll-snap {
        --section-index: 0;
        transform: translateY(calc(-100vh * var(--section-index)));
        transition-duration: 500ms;
    }
</style>

<!-- ================================ -->

<main class="h-screen smooth-scroll-snap">
    <section id="welcome" class="hero">
        <Hero/>
    </section>
    
    <section id="countdown">
        <CountDown/>
    </section>
    
    <section id="about">
        <Card heading="About MinaCon">
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
    </section>
    
    <section id="cerber">
        <Card heading="About CerberVT">
            <div class="section card" style="padding:28px;">
                <p>Cerber is a cheerful beacon of intense positivity and wholesomeness. She playfully adds "-wan" as an
                    honorific to the end of the names of her community members and friends. You'll frequently hear her switching
                    "1" for "wan" at any given opportunity!</p>
                <p>Though she is a Hellhound, she is extremely welcoming and kind, but push your luck and she'll bite your head
                    off. Her community is called <strong>Minawan</strong> (wordplay from "mina-san", "everyone" in Japanese).</p>
                <p>More info: <a href="https://virtualyoutuber.fandom.com/wiki/CerberVT" target="_blank" rel="noopener">CerberVT
                    Wiki</a> · <a href="https://www.twitch.tv/cerbervt" target="_blank" rel="noopener">Twitch Channel</a></p>
            </div>
        </Card>
    </section>

    <section id="testimonies" class="section">
        <Testimony/>
    </section>

    <section id="gallery" class="section">
        <Gallery/>
    </section>

    <section id="contact">
        <Card heading="Contact Us">
            <div class="section card fade-in" style="padding:24px;">
                <div class="contact">
                    <p class="muted">Want to contact the staff?</p>
                    <div class="meta"><strong>Discord:</strong>&nbsp;<span class="muted">samsa1337</span></div>
                    <div class="meta"><strong>Email:</strong>&nbsp;<a href="mailto:minacon@minawan.dog">minacon@minawan.dog</a>
                    </div>
                </div>
            </div>
        </Card>
        <div class="justify-self-center">© MinaCon · Built with love by Minawan</div>
    </section>
</main>

