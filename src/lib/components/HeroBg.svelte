<style>
    @reference "../../styles/app.css";

    div {
        position: absolute;
        image-rendering: pixelated;
    }

    .sky {
        background: linear-gradient(180deg, #607ddc, #80a1f2);
        @apply
            inset-0
            -z-10
        ;
    }

    @keyframes side-scroll {
        0% {
            transform:
                translateX(0px)
                scale(var(--cloud-scale))
            ;
        }

        100% {
            transform:
                translateX(calc(var(--cloud-width) * var(--cloud-scale)))
                scale(var(--cloud-scale))
            ;
        }
    }

    .cloud {
        --cloud-width: 576px;
        --cloud-height: 324px;
        --cloud-scale: max(calc( 115vh / var(--cloud-height)), 1);
        background-repeat: repeat-x;
        background-position: bottom center;
        transform-origin: bottom;
        transform: scale(var(--cloud-width) * 1);
        @apply
            absolute
            bottom-0
            left-[-200vw]
            w-[300vw]
            h-screen
        ;
    }

    .cloud-1 {
        z-index: -3;
        background-image: url('cloud_1.png');
        animation: side-scroll 150s linear infinite;
    } 
    .cloud-2 {
        z-index: -2;
        background-image: url('cloud_2.png');
        animation: side-scroll 90s linear infinite;
    }

    .cloud-3 {
        z-index: -1;
        background-image: url('cloud_3.png');
        animation: side-scroll 50s linear infinite;
    }

    .title {
        transform: translateY(30px);
        background-size: contain;
        @apply
            absolute
            inset-15
            bg-no-repeat
            bg-center
        ;
    }    

    @keyframes sway {
        0% {
            transform-origin: calc(100% * var(--origin-x)) calc(100% * var(--origin-y));
            rotate: -10deg;
        }
        
        50% {
            transform-origin: calc(100% * var(--origin-x)) calc(100% * var(--origin-y));
            rotate: 5deg;
        }
        
        100% {
            transform-origin: calc(100% * var(--origin-x)) calc(100% * var(--origin-y));
            rotate: -10deg;
        }
    }

    .wind-sway {
        --origin-x: 0.8;
        --origin-y: 0.47;
        position: absolute;
        inset: 0;
        animation: sway 5s ease-in-out infinite;
    }
</style>

//BUG NUMBER SWAY BROKEN on non 16/9 ratios

<div class="sky">
    <div class="cloud cloud-1"></div>
    <div class="cloud cloud-2"></div>
    <div class="cloud cloud-3"></div>
</div>
<div class="title" style="background-image: url('title.png');"></div>s
<div class="inset-0">
    <div class="wind-sway">
        <div class="title" style="background-image: url('6.png');"></div>
    </div>
</div>
<div class="title" style="background-image: url('screw.png');"></div>