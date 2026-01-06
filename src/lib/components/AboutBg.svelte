<script lang="ts">
	import Minawan from "./Minawan.svelte";
</script>

<style>
    @reference '../../styles/app.css';
    .map {
        image-rendering: pixelated;
        background-position: 50% -200px;
        @apply
            origin-top
            absolute
            bg-no-repeat
            scale-180
            size-full
        ;
    }

    .minawan-playground {
        @apply
            absolute
            size-full
        ;
    }
</style>

<div class="map" style="background-image: url('https://codeberg.org/HeDeAn/MinaCon_Web/src/commit/62ac0832adfe4ade2a5a95d34bd8d05a744868eb/src/lib/images/pixel_world_map.webp')"></div>
<div class="minawan-playground">
    <Minawan/>
</div>