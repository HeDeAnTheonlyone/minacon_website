<script lang="ts">
	import { onMount } from "svelte";
    import { type Vector2, VecMath } from "$lib/vector";
    
    const center_offset: number = 100;
    const speed: number = 25;
    const stop_distance: number = 75;
    
    let minawan: HTMLElement;
    let wanTxt: HTMLElement;
    
    let target: Vector2 = {x: 0, y: 0};
    let pos: Vector2 = {x: 0, y: 0};
    let flip: boolean;
    let len: number;
    let wanning: boolean = false;

    function updateMinawanPos() {
        const dif: Vector2 = VecMath.subtract(target, pos);
        flip = dif.x < 0;
        len = VecMath.length(dif);
        if (len > stop_distance) {
            const dir: Vector2 = VecMath.normalize(dif);
            const motion: Vector2 = VecMath.scale(dir, speed);
            pos = VecMath.add(pos, motion);

            minawan.style.translate = `${pos.x - center_offset}px ${pos.y - center_offset}px`;
        }
    }

    function updateTargetPos(e: MouseEvent) {
        target = {
            x: e.clientX,
            y: e.clientY
        };
    }

    function wan() {
        if (wanning) return;

        wanning = true;
        setTimeout(() => wanning = false, 800);

        wanTxt.style.setProperty('--x', `${pos.x}px`);
        wanTxt.style.setProperty('--y', `${pos.y}px`);
    }

    onMount(() => {
        addEventListener("mousemove", updateTargetPos, {passive: true});
        addEventListener("mouseout", () => { target = pos; }, {passive: true});
        
        pos = target = {
            x: window.innerWidth / 2,
            y: 300
        };

        minawan.style.translate = `${pos.x - center_offset}px ${pos.y - center_offset}px`;
        setInterval(updateMinawanPos, 100);
    });
</script>

<style>
    @reference "../../styles/app.css";

    .minawan {
        transition-timing-function: linear;
        image-rendering: pixelated;
        transition-property: transform, translate;
        @apply
            absolute
            size-50
            bg-no-repeat
            bg-contain
            duration-100
        ;
    }

    .walk {
        background-image: url('mina_walk.gif');
    }

    .idle {
        background-image: url('mina_idle.gif');
    }

    .flip {
        transform: scaleX(-1);
    }

    .wan {
        background-image: url('wan.png');
        @apply
            absolute
            size-20
            bg-contain
            opacity-0
        ;
    }

    @keyframes fade {
        0% {
            opacity: 100%;
            transform: translate(
                calc(var(--x) - var(--x_offset)),
                calc(var(--y) - var(--y_offset))
            );
        }
        
        100% {
            opacity: 0%;
            transform: translate(
                calc(var(--x) - var(--x_offset)),
                calc(var(--y) - calc(100px + var(--y_offset)))
            );
        }
    }

    .fade {
        --x: 0px;
        --y: 0px;
        --x_offset: calc(75px / 2);
        --y_offset: 30px;
        animation: 800ms ease-out fade;
    }
</style>

<button
    class="minawan {len > stop_distance ? 'walk' : 'idle'} {flip ? 'flip' : ''}"
    bind:this={minawan}
    onclick={wan}
    aria-label="Background Minawan following the cursor"
></button>

<div
    class="wan {wanning ? 'fade' : ''}"
    bind:this={wanTxt}
></div>