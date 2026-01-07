<script lang="ts">
	import Minawan from "./Minawan.svelte";
    import map from "$lib/images/pixel_world_map.webp";
    // 'https://codeberg.org/HeDeAn/MinaCon_Web/raw/branch/main/src/lib/images/pixel_world_map.webp'
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

<div class="map" style="background-image: url({map})"></div>
<div class="minawan-playground">
    <Minawan/>
</div>