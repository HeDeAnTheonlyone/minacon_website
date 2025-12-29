<script lang="ts">
	import Minawan from "./Minawan.svelte";
</script>

<style>
    @reference '../../styles/app.css';
    .map {
        background-image: url('pixel_world_map.png');
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

<div class="map"></div>

<div class="minawan-playground">
    <Minawan/>
</div>