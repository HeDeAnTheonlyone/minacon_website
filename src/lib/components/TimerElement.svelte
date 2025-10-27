<script lang="ts">
    let { num, label } = $props();
</script>

<style>
    div {
        min-width: 90px;
        padding: 14px;
        border-radius: 12px;
        background: linear-gradient(180deg, rgba(255, 255, 255, 0.18), rgba(255, 255, 255, 0.08));
        border: 1px solid rgba(255, 255, 255, 0.06);
        justify-items: center;
    }

    .num {
        font-weight: 800;
        font-size: 28px
    }

    .label {
        font-size: 12px;
        color: var(--muted)
    }
</style>

<div>
    <p class="num">{num}</p>
    <p class="label">{label}</p>
</div>