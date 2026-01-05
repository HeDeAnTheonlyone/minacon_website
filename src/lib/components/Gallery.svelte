<script lang="ts">
    const photoModules = import.meta.glob('/src/lib/images/photos/*.{png,jpg,webp}', { eager: true });
    const temp_photos: string[] = Object.values(photoModules).map((mod: any) => mod.default);
    const photos = [...temp_photos, ...temp_photos]
</script>

<style>
    @reference "../../styles/app.css";

    .bg {
        background: linear-gradient(#51157c, #8715d8, #51157c);
        @apply
            absolute
            size-full
        ;
    }

    .headline {
        @apply
            relative
            pt-30
            w-full
            h-1/6
            text-center
        ;
    }

    .image-row {
        @apply
            flex
            h-2/5
            w-max
            py-5
            gap-10
            overflow-x-visible
        ;
    }

    @keyframes anim-left {
        100% {
            transform: translateX(-50%);
        }
    }

    @keyframes anim-right {
        0% {
            transform: translateX(-50%);
        }
    }

    .anim-left {
        animation: 150s linear infinite anim-left
    }

    .anim-right {
        @apply
            flex-row-reverse
        ;
        animation: 150s linear infinite anim-right
    }


    .photo {
        @apply
            h-full
            w-auto
            rounded-xl
            border-10
        ;
    }
</style>

<div class="absolute size-full">
    <div class="bg"></div>
    <h2 class="headline">Gallery</h2>
    <div class="image-row anim-left">
        {#each photos as photo}
            <img class="photo" src="{photo}" alt=""/>
        {/each}
    </div>
    <div class="image-row anim-right">
        {#each photos as photo}
            <img class="photo" src="{photo}" alt=""/>
        {/each}
    </div>
</div>