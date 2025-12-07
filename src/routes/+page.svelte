<script lang="ts">
	import Card from "$lib/components/Card.svelte";
	import Gallery from "$lib/components/Gallery.svelte";
	import Hero from "$lib/components/Hero.svelte";
	import Testimony from "$lib/components/Testimony.svelte";
	import Timer from "$lib/components/Timer.svelte";
	import { onMount } from "svelte";

    // Smooth Snap Scrolling
    let index: number = 0;
    let last_index: number;
    let locked: boolean = false;
    let container: HTMLElement;

    onMount(() => {
        last_index = document.querySelectorAll("section").length - 1;
        container = document.querySelector('.smooth-scroll-snap') as HTMLElement;
        
        addEventListener("wheel", e => {
            if (locked) return;

            index += Math.sign(e.deltaY);
            index = Math.max(0, Math.min(index, last_index));
            locked = true;

            container.style.setProperty('--section-index', index.toString());

            setTimeout(() => locked = false, 500);
        }, { passive: false });
    });

</script>

<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<title>MinaCon — By Minawan, for Minawan</title>
<!-- Google Fonts -->
<link
href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;700;800&family=Poppins:wght@300;400;600;700&display=swap"
rel="stylesheet">

<style>
    @reference "../styles/app.css";

    .hero {
        @apply
            relative
            grid
            min-h-[520px]
            place-items-center
        ;
    }

    .muted {
        color: var(--color-muted)
    }

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

    footer {
        padding: 28px 20px;
        text-align: center;
        color: var(--color-muted);
        font-size: 13px
    }

    .smooth-scroll-snap {
        --section-index: 0;
        transform: translateY(calc(-100vh * var(--section-index)));
        transition-duration: 500ms;
    }
</style>

<!-- ================================ -->

<main class="smooth-scroll-snap">
    <section id="welcome" class="hero">
        <Hero/>
    </section>
    
    <section id="countdown">
        <Card heading="Countdown to the Next MinaCon" extra_classes="float-anim">
            <p class="muted">Mark your calendars — next MinaCon: <strong>July 27, 2026</strong></p>
            <Timer/>
        </Card>
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
                    <h3 class="">Quick Info</h3>
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
    </section>
</main>

<footer>
<div>© MinaCon · Built with love by Minawan</div>
</footer>
