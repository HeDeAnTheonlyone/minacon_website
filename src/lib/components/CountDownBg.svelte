<script lang="ts">
    import pendulum from "$lib/images/pendulum.png";
</script>

<style>
    @reference '../../styles/app.css';

    div {
        position: absolute;
        image-rendering: pixelated;
    }

    .wall {
        background: linear-gradient(90deg, #4b2417, #69311f, #69311f, #69311f, #4b2417);
        @apply
            size-full
        ;
    }

    @keyframes swing {
        0% {
            rotate: var(--swing-angle);
        }

        50% {
            rotate: calc(-1 * var(--swing-angle));
        }

        100% {
            rotate: var(--swing-angle);
        }
    }

    .pendulum-swing {
        --swing-angle: 37deg;
        transform-origin: 50% -50%;
        animation: swing 5s ease-in-out infinite;
        height: auto;
        @apply
            w-full
        ;
    }
    
    .pendulum {
        background-size: contain;
        transform-origin: bottom center;
        @apply
        relative
        bottom-10
        h-screen
        bg-center
        bg-no-repeat
        scale-150
        ;
    }
    
</style>

<div class="wall"></div>
<!-- <PocketWatch/> -->
<div class="pendulum-swing">
    <div class="pendulum" style="background-image: url({pendulum});"></div>
</div>