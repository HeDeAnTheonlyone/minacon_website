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
        background: var(--glass-bg);
        border-radius: var(--radius);
        border: 1px solid var(--glass-border);
        box-shadow: var(--glass-shadow);
        padding: 35px;
        justify-items: center;
    }

    h2 {
        margin-bottom: 10px;
        font-size: 22px;
        width: max-content;
    }
</style>

<div class="section">
    <div class="card {extra_classes}">
        <h2>{heading}</h2>
        {@render children?.()}
    </div>
</div>