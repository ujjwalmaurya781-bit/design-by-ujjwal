/**
 * Gallery Component
 * Renders a Pinterest/Behance style masonry grid of images with original aspect ratios.
 */
export function renderMasonryGallery(images = []) {
    if (!images || images.length === 0) {
        return `<p style="color: var(--color-text-dark); font-family: var(--font-body); font-style: italic;">No creatives uploaded yet.</p>`;
    }

    const imagesHtml = images.map(imgSrc => `
        <div class="masonry-item">
            <img src="${imgSrc}" alt="Brand Creative Asset" loading="lazy" class="gallery-image">
        </div>
    `).join('');

    return `
    <div class="masonry-grid">
        ${imagesHtml}
    </div>
    `;
}
