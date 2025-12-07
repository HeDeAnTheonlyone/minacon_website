<script lang="ts">
    let {
        num,
        label = "",
    } = $props();
</script>

<style>
    @reference "../../styles/app.css";
    div {
        justify-items: center;
        @apply
            py-14
            md:px-5
            sm:px-3
            px-1
        ;
    }

    .num {
        font-weight: 800;
        font-size: 30px;
    }

    .label {
        font-size: 12px;
        @apply
            text-muted
        ;
    }
</style>

<div>
    <p class="num">{num}</p>
    <p class="label">{label}</p>
</div>