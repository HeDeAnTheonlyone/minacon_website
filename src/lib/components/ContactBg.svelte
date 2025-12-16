<style>
    @import "../../styles/contact_bg_keyframess.css";
    @reference "../../styles/app.css";

    div {
        image-rendering: pixelated;
    }

    .bg-elem {
        background-size: auto 90%;
        @apply
            absolute
            w-full
            h-screen
            bg-center
            bg-no-repeat
        ;
    }

    .letter-clip {
        clip-path: inset(0 0 20vh 0);
        @apply
            absolute
            w-full
            h-screen
        ;
    }

    .letter {
        animation:10s ease-in-out infinite letter;
    }

    .envelope {
        animation:
            10s ease-in-out infinite env-movement;
        }
        
    .flap-up {
        animation:
            10s ease-in-out infinite env-movement,
            10s ease-in-out infinite env-open;
        }
        
    .flap-down {
        animation:
            10s ease-in-out infinite env-movement,
            10s ease-in-out infinite env-closed;
    }

    .paper-plane-x {
        animation:
            10s linear infinite paper-plane-x;
    }

    .paper-plane-y {
        animation: 10s cubic-bezier(0.697, 0.354, 0.479, 0.827) infinite paper-plane-y;
    }

    .paper-plane-rotation {
        background-size: auto 50%;
        animation: 10s ease-in-out infinite paper-plane-rotation;
    }

</style>

<div class="absolute inset-0 bg-[#cfb2d8] -z-4"></div>
<div class="bg-elem envelope -z-3" style="background-image: url('envelope_bg.png')"></div>
<div class="bg-elem envelope -z-1" style="background-image: url('envelope_overlay.png')"></div>
<div class="bg-elem flap-up -z-3" style="background-image: url('envelope_flap_up.png')"></div>
<div class="bg-elem flap-down z-0" style="background-image: url('envelope_flap_down.png')"></div>

<div class="letter-clip -z-2">
    <div class="bg-elem letter" style="background-image: url('letter.png')"></div>
</div>

<div class="bg-elem paper-plane-y">
    <div class="bg-elem paper-plane-x">
        <div class="bg-elem paper-plane-rotation" style="background-image: url('paper_plane.png')"></div>
    </div>
</div>