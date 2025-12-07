<style>
    .testimony-list {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 14px
    }

    @media (max-width:620px) {
        .testimony-list {
        grid-template-columns: 1fr
        }
    }

    .testimony {
        padding: 16px;
        border-radius: 12px;
        background: linear-gradient(180deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.02));
        border: 1px solid rgba(255, 255, 255, 0.04)
    }
</style>

<div>
    <h2>What Minawan Say</h2>
    <div class="testimony-list" id="testimonyList">
        <!-- Editable testimony blocks: change the inner text or add more .testimony elements -->
        <div class="testimony">“MinaCon feels like coming home.” — <strong>GooseWan</strong></div>
        <div class="testimony">“The energy, the laughter, the chaos. Perfect.” — <strong>CabbageWan</strong></div>
        <div class="testimony">“I met my best friends here.” — <strong>KaliWan</strong></div>
        <div class="testimony">“Worth every minute.” — <strong>PippensWan</strong></div>
    </div>
    <div style="margin-top:12px;color:var(--color-muted);font-size:13px">Tip: Edit or add testimonies by modifying the
        HTML inside <code>#testimonyList</code>.
    </div>
</div>