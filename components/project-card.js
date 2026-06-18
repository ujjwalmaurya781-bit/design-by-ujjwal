/**
 * Project Card Component
 * Renders a large cinematic cover card representing a project category.
 */
export function renderProjectCard(project) {
    return `
    <a href="${project.link}" class="project-card fade-in-section" data-id="${project.id}">
        <div class="project-img-wrapper" id="cover-wrapper-${project.id}">
            <img src="${project.coverImage}" alt="${project.title}" loading="lazy" id="cover-img-${project.id}" onerror="this.style.display='none'; this.parentElement.classList.add('no-image');">
        </div>
        <div class="project-info">
            <div class="project-meta">
                <span class="project-category">${project.category}</span>
                <span class="project-num">${project.num}</span>
            </div>
            <h3 class="project-card-title">${project.title}</h3>
            <p class="project-desc">${project.description}</p>
            <div class="project-action-btn">
                <span>View Project</span>
                <span class="project-action-icon">&rarr;</span>
            </div>
        </div>
    </a>
    `;
}
