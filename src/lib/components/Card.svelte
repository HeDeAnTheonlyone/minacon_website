<script lang="ts">
    let {
        children,
        heading = "",
        extra_classes = "",
    } = $props();
</script>

<style>
    .section {
        padding: 72px 20px;
        max-width: 1100px;
        margin: 0 auto
    }

    .card {
        background: var(--bg-glass);
        border-radius: var(--radius);
        border: 1px solid var(--border-glass);
        box-shadow: var(--shadow-glass);
        padding: 35px;
        justify-items: center;
    }
</style>

<div class="section">
    <div class="card {extra_classes}">
        <h2>{heading}</h2>
        {@render children?.()}
    </div>
</div>