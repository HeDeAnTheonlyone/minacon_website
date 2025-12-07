<style>
    @reference "../../styles/app.css";

    .gallery {
        display: grid;
        gap: 12px;
    }

    .placeholder {
        aspect-ratio: 16/10;
        background: linear-gradient(135deg, var(--color-lavender), var(--color-pastel-pink));
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-weight: 700;
    }

    .cols-3 {
        display: grid;
        gap: 20px;
        align-items: center;
        @apply
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
        ;
    }
</style>

<div>
    <h2>Gallery</h2>
    <div class="gallery cols-3" id="galleryGrid">
        <!-- TODO add a way to only show 3 images but have them all lined up to scroll through -->
        <div class="placeholder">Coming Soon</div>
        <div class="placeholder">Coming Soon</div>
        <div class="placeholder">Coming Soon</div>
    </div>
    <div style="margin-top:12px;color:var(--color-muted);font-size:13px">Tip: Replace the placeholders by adding
        &lt;img&gt; tags inside <code>#galleryGrid</code> or replace a placeholder's background-image via inline
        style.
    </div>
</div>