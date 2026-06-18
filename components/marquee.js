/**
 * Marquee Component
 * Renders an infinite scrolling horizontal ribbon.
 */
export function renderMarquee(items = []) {
    // Duplicate items to ensure seamless loop in horizontal scrolling
    const doubleItems = [...items, ...items, ...items];
    
    const itemsHtml = doubleItems.map(item => `
        <span class="marquee-item">
            <span class="marquee-dot"></span>
            ${item}
        </span>
    `).join('');

    return `
    <div class="marquee-container">
        <div class="marquee-content">
            ${itemsHtml}
        </div>
    </div>
    `;
}
