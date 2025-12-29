<style>
    @import "../../styles/contact_bg_anim.css";
    @reference "../../styles/app.css";

    div {
        image-rendering: pixelated;
    }

    .bg-elem {
        background-size: auto 90%;
        @apply
            absolute
            size-full
            bg-center
            bg-no-repeat
        ;
    }

    .letter-clip {
        clip-path: inset(0 0 20vh 0);
        @apply
            absolute
            size-full
        ;
    }

    .paper-plane {
        @apply
            bg-contain
            inset-20
        ;
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

<div class="size-full paper-plane-y">
    <div class="size-full paper-plane-x">
        <div class="bg-elem paper-plane-rotation" style="background-image: url('paper_plane.png')"></div>
    </div>
</div>