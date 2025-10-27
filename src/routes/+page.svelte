<script lang="ts">
	import Card from "$lib/components/Card.svelte";
	import Navbar from "$lib/components/Navbar.svelte";
	import Timer from "$lib/components/Timer.svelte";
	import TimerNumber from "$lib/components/TimerElement.svelte";

    /********* USER EDITABLE VALUES *********/

    // Hero background — swap image by changing URL below or set to empty string to use gradient
    const HERO__BG_URL = 'https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1600&q=60';

    /********* END USER EDITABLE *********/


    // // Apply hero background (easy to replace)
    // const heroBg = document.getElementById('heroBg');
    // if (!HERO__BG_URL) heroBg.style.background = 'var(--bg-gradient)'; else heroBg.style.backgroundImage = `url('${HERO__BG_URL}')`;

    // Countdown logic

    // Theme toggle — manual, stores preference in localStorage
    // const themeToggle = document.getElementById('themeToggle');
    // const root = document.documentElement;
    // function setTheme(t) {
    //     if (t === 'dark') root.setAttribute('data-theme', 'dark'); else root.removeAttribute('data-theme');
    //     localStorage.setItem('minacon_theme', t);
    // }
    // // init theme
    // const savedTheme = localStorage.getItem('minacon_theme') || 'light';
    // setTheme(savedTheme);
    // themeToggle?.addEventListener('click', () => {
    //     const current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    //     setTheme(current === 'dark' ? 'light' : 'dark');
    // });

    // // Mobile nav toggle
    // const navToggleBtn = document.querySelector('.nav-toggle');
    // const mainNav = document.getElementById('mainNav');
    // navToggleBtn.addEventListener('click', () => {
    //     const expanded = navToggleBtn.getAttribute('aria-expanded') === 'true';
    //     navToggleBtn.setAttribute('aria-expanded', String(!expanded));
    //     if (expanded) { mainNav.style.display = ''; } else { mainNav.style.display = 'flex'; mainNav.style.flexDirection = 'column'; mainNav.style.position = 'absolute'; mainNav.style.right = '16px'; mainNav.style.top = '72px'; mainNav.style.background = 'var(--glass-bg)'; mainNav.style.padding = '12px'; mainNav.style.borderRadius = '10px'; }
    // });

    // Intersection observer for fade-in
    // const io = new IntersectionObserver(entries => {
    //     entries.forEach(e => {
    //     if (e.isIntersecting) e.target.classList.add('visible');
    //     });
    // }, { threshold: 0.12 });
    // document.querySelectorAll('.fade-in').forEach(el => io.observe(el));

    // Optional: close mobile nav on link click
    // document.querySelectorAll('#mainNav a').forEach(a => a.addEventListener('click', () => {
    //     if (window.innerWidth < 820) { mainNav.style.display = ''; navToggleBtn.setAttribute('aria-expanded', 'false'); }
    // }));

    // Accessibility: keyboard skip to content
    // (You can add a skip link if desired)

    // Small utility for modifying testimonies/gallery via JS (example)
    // window.addTestimony = function (text) {
    //     const el = document.createElement('div'); el.className = 'testimony'; el.innerHTML = text; document.getElementById('testimonyList').appendChild(el);
    // }
    // window.addGalleryImage = function (url, alt = 'MinaCon image') {
    //     const img = document.createElement('img'); img.src = url; img.alt = alt; img.style.width = '100%'; img.style.height = '100%'; img.style.objectFit = 'cover'; img.style.borderRadius = '12px'; const wrap = document.createElement('div'); wrap.appendChild(img); document.getElementById('galleryGrid').appendChild(wrap);
    // }
</script>

<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<title>MinaCon — By Minawan, for Minawan</title>
<!-- Google Fonts -->
<link
href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;700;800&family=Poppins:wght@300;400;600;700&display=swap"
rel="stylesheet">

<style>
/* Dark theme variables */
[data-theme="dark"] {
    --glass-bg: rgba(20, 18, 30, 0.44);
    --glass-border: rgba(255, 255, 255, 0.06);
    --text: #f6f3ff;
    --muted: #d7cfe8;
    background-color: #0f0c14;
}

/* Hero / Welcome */
.hero {
    height: calc(100vh - var(--nav-height));
    min-height: 520px;
    display: grid;
    place-items: center;
    position: relative;
    overflow: hidden;
}

/* Welcome background — easy to change image */
.hero__bg {
    position: absolute;
    inset: 0;
    background: var(--bg-gradient);
    background-size: cover;
    background-position: center;
    transition: transform 0.8s ease;
    z-index: 0;
}

/* overlay so content always readable and background only in hero */
.hero__overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(16, 12, 25, 0.15), rgba(255, 255, 255, 0.06));
    z-index: 1
}

.hero__card {
    position: relative;
    z-index: 3;
    max-width: 1100px;
    margin: 0 24px;
    padding: 40px;
    border-radius: 18px;
    background: var(--glass-bg);
    backdrop-filter: blur(var(--blur));
    border: 1px solid var(--glass-border);
    box-shadow: var(--glass-shadow);
    text-align: center
}

h1 {
    font-family: 'Poppins', 'Nunito';
    font-weight: 800;
    margin: 0 0 8px;
    font-size: clamp(28px, 4.5vw, 44px);
    letter-spacing: -0.02em
}

p.lead {
    margin: 0;
    color: var(--muted);
    font-size: clamp(14px, 2.1vw, 18px)
}

.scroll-hint {
    position: absolute;
    bottom: 28px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 4;
    opacity: 0.9
}

/* Main content wrapper — will cover hero background with non-transparent bg */
main {
    background: transparent
}

.section {
    padding: 72px 20px;
    max-width: 1100px;
    margin: 0 auto
}

.section h2 {
    margin-top: 0;
    font-size: 22px
}

.muted {
    color: var(--muted)
}

/* About, testimonies layout */
.two-col {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    align-items: center
}

@media (max-width:880px) {
    .two-col {
    grid-template-columns: 1fr
    }
}

.testimony-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 14px
}

@media (max-width:620px) {
    .testimony-list {
    grid-template-columns: 1fr
    }
}

.testimony {
    padding: 16px;
    border-radius: 12px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.02));
    border: 1px solid rgba(255, 255, 255, 0.04)
}

/* Gallery */
.gallery {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px
}

@media (max-width:880px) {
    .gallery {
    grid-template-columns: repeat(2, 1fr)
    }
}

@media (max-width:480px) {
    .gallery {
    grid-template-columns: 1fr
    }
}

.gallery .placeholder {
    aspect-ratio: 16/10;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, var(--lavender), var(--pastel-pink));
    color: white;
    font-weight: 700
}

/* Contact */
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

/* Footer */
footer {
    padding: 28px 20px;
    text-align: center;
    color: var(--muted);
    font-size: 13px
}


.btn {
    display: inline-block;
    padding: 10px 16px;
    border-radius: 12px;
    background: linear-gradient(90deg, var(--lavender), var(--pastel-pink));
    color: white;
    font-weight: 700;
    text-decoration: none
}


@media (max-width:820px) {
    nav {
    display: none
    }
}

/* Fade-in on scroll */
/* .fade-in {
    opacity: 0;
    transform: translateY(12px);
    transition: opacity 600ms ease, transform 600ms ease
} */

/* small tweaks for dark */
[data-theme="dark"] header {
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0.01))
}
</style>

<Navbar/>

<!-- <div style="display:flex;align-items:center;gap:10px">
    <button id="themeToggle" aria-label="Toggle theme" title="Toggle dark/light">🌗</button>
    <button class="nav-toggle" aria-expanded="false" aria-controls="mainNav">☰</button>
</div> -->

<!-- HERO / WELCOME -->
<section id="welcome" class="hero">
    <!-- Change this background easily: replace the image URL below or comment and use gradient -->
    <div id="heroBg" class="hero__bg"
        style="background-image: url('https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1600&q=60');">
    </div>
    <div class="hero__overlay"></div>

    <div class="hero__card" role="region" aria-labelledby="welcomeTitle">
        <h1 id="welcomeTitle">Welcome to MinaCon</h1>
        <p class="lead">By Minawan, for Minawan — an intimate, annual fan meetup celebrating CerberVT and the Minawan community.</p>
        <div style="margin-top:18px">
            <a href="#countdown" class="btn">Next MinaCon</a>
        </div>
    </div>

    <div class="scroll-hint" aria-hidden="true">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" style="opacity:0.9">
        <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"
            stroke-linejoin="round" />
        </svg>
    </div>
</section>

<main>
    <section id="countdown">
        <Card heading="Countdown to the Next MinaCon" extra_classes="float-anim">
            <p class="muted">Mark your calendars — next MinaCon: <strong>July 27, 2026</strong></p>
            <Timer/>
        </Card>
    </section>
        
    <section id="about">
        <Card heading="About MinaCon">
            <div class="section card two-col" style="padding:28px;">
                <div>
                    <p>MinaCon is a private, fan-organized meetup where Minawan gather once a year somewhere in Europe to
                    celebrate CerberVT and the community.</p>
                    <p style="font-size:13px;color:var(--muted)"><em>Note: MinaCon is not affiliated with CerberVT but created
                        with love by her fans.</em></p>
                </div>
                <div>
                    <h3>Quick Info</h3>
                    <ul style="margin:0;padding-left:18px;color:var(--muted)">
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
        <div>
            <h2>What Minawan Say</h2>
            <div class="testimony-list" id="testimonyList">
                <!-- Editable testimony blocks: change the inner text or add more .testimony elements -->
                <div class="testimony">“MinaCon feels like coming home.” — <strong>GooseWan</strong></div>
                <div class="testimony">“The energy, the laughter, the chaos. Perfect.” — <strong>CabbageWan</strong></div>
                <div class="testimony">“I met my best friends here.” — <strong>KaliWan</strong></div>
                <div class="testimony">“Worth every minute.” — <strong>PippensWan</strong></div>
            </div>
            <div style="margin-top:12px;color:var(--muted);font-size:13px">Tip: Edit or add testimonies by modifying the
                HTML inside <code>#testimonyList</code>.
            </div>
        </div>
    </section>

    <section id="gallery" class="section">
        <div>
        <h2>Gallery</h2>
        <div class="gallery" id="galleryGrid">
            <div class="placeholder">Coming Soon</div>
            <div class="placeholder">Coming Soon</div>
            <div class="placeholder">Coming Soon</div>
        </div>
        <div style="margin-top:12px;color:var(--muted);font-size:13px">Tip: Replace the placeholders by adding
            &lt;img&gt; tags inside <code>#galleryGrid</code> or replace a placeholder's background-image via inline
            style.</div>
        </div>
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
