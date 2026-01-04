<script lang="ts">
    import envelope_bg from "$lib/images/envelope_bg.png";
    import envelope_overlay from "$lib/images/envelope_overlay.png";
    import envelope_flap_up from "$lib/images/envelope_flap_up.png";
    import envelope_flap_down from "$lib/images/envelope_flap_down.png";
    import letter from "$lib/images/letter.png";
    import paper_plane from "$lib/images/paper_plane.png";
</script>

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
</style>

<div class="absolute w-full h-full">
    <div class="absolute size-full bg-[#cfb2d8] -z-4"></div>
    <div class="bg-elem envelope -z-3" style="background-image: url({envelope_bg})"></div>
    <div class="bg-elem envelope -z-1" style="background-image: url({envelope_overlay})"></div>
    <div class="bg-elem flap-up -z-3" style="background-image: url({envelope_flap_up})"></div>
    <div class="bg-elem flap-down z-0" style="background-image: url({envelope_flap_down})"></div>
    
    <div class="letter-clip -z-2">
        <div class="bg-elem letter" style="background-image: url({letter})"></div>
    </div>
    
    <div class="size-full paper-plane-y">
        <div class="size-full paper-plane-x">
            <div class="bg-elem paper-plane-rotation" style="background-image: url({paper_plane})"></div>
        </div>
    </div>
</div>