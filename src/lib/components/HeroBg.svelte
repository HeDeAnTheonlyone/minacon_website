<style>
    @reference "../../styles/app.css";

    div {
        position: absolute;
        image-rendering: pixelated;
    }

    .sky {
        inset: 0;
        background: linear-gradient(180deg, #607ddc, #80a1f2);
    }

    @keyframes side-scroll {
        0% {
            transform:
                translateX(0px)
                scale(var(--cloud-scale));
        }

        100% {
            transform:
                translateX(calc(1728px * var(--cloud-scale)))
                scale(var(--cloud-scale));
        }
    }

    .cloud {
        bottom: 0;
        background-repeat: repeat-x;
        transform-origin: bottom center;
        @apply
            w-[1000%]
            h-[324px]
            origin-bottom
        ;
    }

    .cloud-1 {
        background-image: url('cloud_1.png');
        animation: side-scroll 240s linear infinite;
    } 
    .cloud-2 {
        background-image: url('cloud_2.png');
        animation: side-scroll 170s linear infinite;
    }

    .cloud-3 {
        background-image: url('cloud_3.png');
        animation: side-scroll 120s linear infinite;
    }

    .title {
        transform:
            translateY(30px)
            scale(0.9);
        background-image: url('title.png');
        background-size: contain;
        @apply
            inset-0
            bg-no-repeat
            bg-center
        ;
    }

    @keyframes sway {
        0% {
            transform-origin: calc(100% * 0.81) calc(100% * 0.47);
            rotate: -10deg;
        }
        
        50% {
            transform-origin: calc(100% * 0.81) calc(100% * 0.47);
            rotate: 5deg;
        }
        
        100% {
            transform-origin: calc(100% * 0.81) calc(100% * 0.47);
            rotate: -10deg;
        }
    }

    .wind-sway {
        inset: 0;
        animation: sway 5s ease-in-out infinite;
    }
</style>

<div class="sky"></div>
<div class="w-full h-screen overflow-clip">
    <div class="cloud cloud-1"></div>
    <div class="cloud cloud-2"></div>
    <div class="cloud cloud-3"></div>
</div>
<div class="title"></div>
<div class="overflow-clip inset-0">
    <div class="wind-sway">
        <div class="title" style="background-image: url('6.png');"></div>
    </div>
</div>
<div class="title" style="background-image: url('screw.png');"></div>