<script lang="ts">
    import NavLogo from "./NavLogo.svelte";
</script>

<style>    
    header {
        position: sticky;
        top: 0;
        z-index: 10;
        height: var(--nav-height);
        backdrop-filter: blur(var(--blur));
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 12px 20px;
        gap: 12px;
        background: linear-gradient(180deg, rgba(255, 255, 255, 0.35), rgba(255, 255, 255, 0.12));
        border-bottom: 1px solid rgba(255, 255, 255, 0.12);
        box-shadow: var(--glass-shadow);
        border-radius: 0 0 14px 14px;
    }

    a {
        padding: 8px 12px;
        border-radius: 10px;
        text-decoration: none;
        font-weight: 600;
        color: var(--muted);
        transition-duration: 300ms;
    }
    
    a:hover {
        transform: translateY(-3px);
        background: #f0e8fa;
    }
</style>

<header class="sticky top-0">
    <NavLogo/>
    <nav class="absolute flex justify-center w-full space-x-5">
        <a href="#welcome">Welcome</a>
        <a href="#countdown">Countdown</a>
        <a href="#about">About MinaCon</a>
        <a href="#cerber">About Cerber</a>
        <a href="#testimonies">Testimonies</a>
        <a href="#gallery">Gallery</a>
        <a href="#contact">Contact</a>
    </nav>
</header>