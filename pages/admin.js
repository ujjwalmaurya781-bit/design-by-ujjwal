/**
 * Hidden Portfolio Admin Panel Controller & Designer CMS
 */
import { supabase } from '../src/supabase.js';
import { ADMIN_PASSWORD } from '../src/config.js';

let isUserAuthenticated = false;
let brandsList = [];
let projectsList = [];
let editingBrandId = null;
let editingProjectId = null;

// Temporary list of image URLs uploaded for the project currently being edited/created (Supabase live mode)
let currentProjectImages = [];
let currentProjectCoverImage = "";

// Local designer state (Offline designer mode)
let localImages = []; // Array of objects: { name: string, objectUrl: string }
let localCoverImageName = "";

export function renderAdmin() {
    isUserAuthenticated = sessionStorage.getItem('admin_session') === 'active';

    if (!isUserAuthenticated) {
        return `
        <!-- Passcode Login View -->
        <section class="admin-login-section" style="min-height: 80vh; display: flex; align-items: center; justify-content: center; padding-top: 100px;">
            <div class="admin-login-card" style="background: #0d0d0d; border: 1px solid var(--color-border); border-radius: 24px; padding: 40px; width: 90%; max-width: 420px; text-align: center; box-shadow: 0 30px 60px rgba(0,0,0,0.8);">
                <div style="margin-bottom: 25px;">
                    <span style="color: var(--color-accent); font-family: var(--font-heading); font-size: 0.75rem; letter-spacing: 0.25em; text-transform: uppercase; font-weight: 700;">Secure Portal</span>
                    <h2 style="font-size: 1.8rem; text-transform: uppercase; color: var(--color-text-light); margin-top: 8px;">ADMIN SIGN IN</h2>
                </div>
                
                <form id="admin-login-form">
                    <div style="margin-bottom: 24px; text-align: left;">
                        <label for="admin-passcode" style="font-family: var(--font-heading); font-size: 0.75rem; color: var(--color-text-dark); text-transform: uppercase; letter-spacing: 0.1em; display: block; margin-bottom: 8px;">Access Passcode</label>
                        <input type="password" id="admin-passcode" required style="width: 100%; padding: 12px 16px; background: #060606; border: 1px solid var(--color-border); border-radius: 8px; color: var(--color-text-light); font-size: 1rem; outline: none; transition: border-color 0.3s;" placeholder="••••••••">
                    </div>
                    
                    <div id="login-error-msg" style="color: #ff3b30; font-size: 0.85rem; margin-top: -12px; margin-bottom: 16px; display: none;">Invalid Passcode</div>
                    
                    <button type="submit" class="btn btn-primary" style="width: 100%; border-radius: 30px; justify-content: center;">Enter Dashboard</button>
                </form>
            </div>
        </section>
        `;
    }

    // Tabs header rendering if Supabase is active
    const tabsHeaderHtml = supabase ? `
    <div class="admin-tabs" style="display: flex; gap: 15px; margin-bottom: 30px; border-bottom: 1px solid var(--color-border); padding-bottom: 10px;">
        <button class="admin-tab-btn active" data-tab="database" style="background: transparent; border: none; color: var(--color-text-light); font-family: var(--font-heading); font-size: 0.95rem; font-weight: 700; text-transform: uppercase; cursor: pointer; padding: 8px 16px; position: relative;">Live Database Manager</button>
        <button class="admin-tab-btn" data-tab="local" style="background: transparent; border: none; color: var(--color-text-muted); font-family: var(--font-heading); font-size: 0.95rem; font-weight: 700; text-transform: uppercase; cursor: pointer; padding: 8px 16px; position: relative;">Local Designer Mode</button>
    </div>
    ` : `
    <div style="background: rgba(255,107,0,0.05); border: 1px solid var(--color-accent); border-radius: 12px; padding: 15px; margin-bottom: 30px; display: flex; align-items: center; gap: 12px;">
        <span style="color: var(--color-accent); font-size: 1.2rem;">⚠️</span>
        <p style="color: var(--color-text-light); font-size: 0.9rem; margin: 0; line-height: 1.5;">
            <strong>Offline Mode:</strong> Supabase database is not configured. Live database features are disabled. Use <strong>Local Designer Mode</strong> below to automatically compile case studies.
        </p>
    </div>
    `;

    // Database tab content HTML (Crud interface)
    const dbTabContentHtml = supabase ? `
    <div id="tab-content-database" class="admin-tab-content-panel active">
        <div class="admin-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: start;">
            
            <!-- COLUMN 1: BRANDS MANAGEMENT -->
            <div class="admin-column" style="background: #080808; border: 1px solid var(--color-border); border-radius: 20px; padding: 30px;">
                <h2 style="font-family: var(--font-heading); font-size: 1.3rem; text-transform: uppercase; color: var(--color-text-light); margin-bottom: 24px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 10px;">1. BRAND MANAGER</h2>
                
                <!-- Brand Form -->
                <form id="brand-form" style="display: flex; flex-direction: column; gap: 16px; margin-bottom: 30px;">
                    <input type="hidden" id="brand-id">
                    <div>
                        <label style="font-family: var(--font-heading); font-size: 0.75rem; color: var(--color-text-dark); text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 6px;">Brand Name</label>
                        <input type="text" id="brand-name" required placeholder="e.g. Amanzi Fragrances" style="width: 100%; padding: 10px 14px; background: #0c0c0c; border: 1px solid var(--color-border); border-radius: 8px; color: var(--color-text-light); outline: none;">
                    </div>
                    <div>
                        <label style="font-family: var(--font-heading); font-size: 0.75rem; color: var(--color-text-dark); text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 6px;">Category</label>
                        <select id="brand-category" required style="width: 100%; padding: 10px 14px; background: #0c0c0c; border: 1px solid var(--color-border); border-radius: 8px; color: var(--color-text-light); outline: none;">
                            <option value="Brand Communication">Brand Communication</option>
                            <option value="Ecommerce">Ecommerce</option>
                            <option value="Campaigns">Campaigns</option>
                            <option value="Product Renders">Product Renders</option>
                        </select>
                    </div>
                    <div>
                        <label style="font-family: var(--font-heading); font-size: 0.75rem; color: var(--color-text-dark); text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 6px;">Industry / Tagline</label>
                        <input type="text" id="brand-industry" placeholder="e.g. Luxury Fragrances & Personal Care" style="width: 100%; padding: 10px 14px; background: #0c0c0c; border: 1px solid var(--color-border); border-radius: 8px; color: var(--color-text-light); outline: none;">
                    </div>
                    <div>
                        <label style="font-family: var(--font-heading); font-size: 0.75rem; color: var(--color-text-dark); text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 6px;">Objective</label>
                        <textarea id="brand-objective" rows="2" placeholder="Brief project summary or marketing objective..." style="width: 100%; padding: 10px 14px; background: #0c0c0c; border: 1px solid var(--color-border); border-radius: 8px; color: var(--color-text-light); outline: none; resize: vertical;"></textarea>
                    </div>
                    <div>
                        <label style="font-family: var(--font-heading); font-size: 0.75rem; color: var(--color-text-dark); text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 6px;">Design Approach</label>
                        <textarea id="brand-approach" rows="2" placeholder="Visual style, aesthetic elements, or design philosophy..." style="width: 100%; padding: 10px 14px; background: #0c0c0c; border: 1px solid var(--color-border); border-radius: 8px; color: var(--color-text-light); outline: none; resize: vertical;"></textarea>
                    </div>
                    <div style="display: flex; gap: 10px; margin-top: 10px;">
                        <button type="submit" class="btn btn-primary" id="brand-submit-btn" style="border-radius: 30px; flex: 1; justify-content: center;">Save Brand</button>
                        <button type="button" class="btn btn-secondary" id="brand-cancel-btn" style="border-radius: 30px; display: none;">Cancel</button>
                    </div>
                </form>

                <!-- Brands List -->
                <h3 style="font-family: var(--font-heading); font-size: 0.9rem; text-transform: uppercase; color: var(--color-text-dark); margin-bottom: 12px; font-weight: 700;">Existing Brands</h3>
                <div id="admin-brands-list" style="display: flex; flex-direction: column; gap: 10px; max-height: 350px; overflow-y: auto; padding-right: 8px;">
                    <!-- Rendered dynamically -->
                </div>
            </div>

            <!-- COLUMN 2: PROJECTS MANAGEMENT -->
            <div class="admin-column" style="background: #080808; border: 1px solid var(--color-border); border-radius: 20px; padding: 30px;">
                <h2 style="font-family: var(--font-heading); font-size: 1.3rem; text-transform: uppercase; color: var(--color-text-light); margin-bottom: 24px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 10px;">2. PROJECT CREATOR</h2>
                
                <!-- Project Form -->
                <form id="project-form" style="display: flex; flex-direction: column; gap: 16px; margin-bottom: 30px;">
                    <input type="hidden" id="project-id">
                    <div>
                        <label style="font-family: var(--font-heading); font-size: 0.75rem; color: var(--color-text-dark); text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 6px;">Select Brand</label>
                        <select id="project-brand-id" required style="width: 100%; padding: 10px 14px; background: #0c0c0c; border: 1px solid var(--color-border); border-radius: 8px; color: var(--color-text-light); outline: none;">
                            <option value="">-- Choose Brand --</option>
                            <!-- Loaded dynamically -->
                        </select>
                    </div>
                    <div>
                        <label style="font-family: var(--font-heading); font-size: 0.75rem; color: var(--color-text-dark); text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 6px;">Project / Creative Name</label>
                        <input type="text" id="project-name" required placeholder="e.g. White Oud, Extreme SX, or Launch Creative" style="width: 100%; padding: 10px 14px; background: #0c0c0c; border: 1px solid var(--color-border); border-radius: 8px; color: var(--color-text-light); outline: none;">
                    </div>
                    <div>
                        <label style="font-family: var(--font-heading); font-size: 0.75rem; color: var(--color-text-dark); text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 6px;">Sort Order</label>
                        <input type="number" id="project-sort" value="0" style="width: 100%; padding: 10px 14px; background: #0c0c0c; border: 1px solid var(--color-border); border-radius: 8px; color: var(--color-text-light); outline: none;">
                    </div>

                    <!-- Drag & Drop Upload Zone -->
                    <div>
                        <label style="font-family: var(--font-heading); font-size: 0.75rem; color: var(--color-text-dark); text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 6px;">Project Images</label>
                        <div class="admin-upload-dropzone" id="admin-dropzone" style="border: 2px dashed var(--color-border); border-radius: 12px; padding: 30px; text-align: center; cursor: pointer; transition: border-color 0.3s; background: rgba(255,255,255,0.01);">
                            <span style="font-size: 2rem; color: var(--color-accent); display: block; margin-bottom: 8px;">+</span>
                            <span style="font-family: var(--font-heading); font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-text-light); display: block;">Drag & Drop Images here</span>
                            <span style="font-size: 0.75rem; color: var(--color-text-dark); margin-top: 4px; display: block;">or Click to upload multiple files</span>
                            <input type="file" id="project-file-input" multiple accept="image/*" style="display: none;">
                        </div>
                    </div>

                    <!-- Visual Reorder Image List -->
                    <div id="project-images-preview-section" style="display: none;">
                        <h4 style="font-family: var(--font-heading); font-size: 0.75rem; color: var(--color-text-dark); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 10px;">Manage Assets (Reorder & Set Cover)</h4>
                        <div id="project-images-sort-list" style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px;">
                            <!-- Uploaded image items populated dynamically -->
                        </div>
                    </div>

                    <div style="display: flex; gap: 10px; margin-top: 10px;">
                        <button type="submit" class="btn btn-primary" id="project-submit-btn" style="border-radius: 30px; flex: 1; justify-content: center;">Save Project</button>
                        <button type="button" class="btn btn-secondary" id="project-cancel-btn" style="border-radius: 30px; display: none;">Cancel</button>
                    </div>
                </form>

                <!-- Projects List -->
                <h3 style="font-family: var(--font-heading); font-size: 0.9rem; text-transform: uppercase; color: var(--color-text-dark); margin-bottom: 12px; font-weight: 700;">Existing Projects</h3>
                <div id="admin-projects-list" style="display: flex; flex-direction: column; gap: 10px; max-height: 350px; overflow-y: auto; padding-right: 8px;">
                    <!-- Rendered dynamically -->
                </div>
            </div>

        </div>
    </div>
    ` : "";

    // Local designer tab content HTML (Offline mode)
    const localTabContentHtml = `
    <div id="tab-content-local" class="admin-tab-content-panel ${!supabase ? 'active' : ''}">
        <div class="local-designer-panel" style="background: #080808; border: 1px solid var(--color-border); border-radius: 20px; padding: 30px; width: 100%;">
            <div style="margin-bottom: 25px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 15px; display: flex; justify-content: space-between; align-items: center;">
                <div>
                    <span style="color: var(--color-accent); font-family: var(--font-heading); font-size: 0.75rem; letter-spacing: 0.2em; text-transform: uppercase; font-weight: 700;">Offline JSON Compiler</span>
                    <h2 style="font-family: var(--font-heading); font-size: 1.4rem; text-transform: uppercase; color: var(--color-text-light); margin-top: 4px;">Local Designer Tool</h2>
                </div>
                <button type="button" class="btn btn-secondary" id="local-add-project-btn" style="border-radius: 30px; padding: 8px 20px; font-size: 0.75rem; font-weight: 700;">Add Project / Reset</button>
            </div>
            
            <div class="admin-grid" style="display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 40px; align-items: start;">
                <!-- Local Column 1: Config Form -->
                <div style="display: flex; flex-direction: column; gap: 20px;">
                    <h3 style="font-family: var(--font-heading); font-size: 0.95rem; text-transform: uppercase; color: var(--color-accent); font-weight: 700; letter-spacing: 0.05em;">1. Project Settings</h3>
                    
                    <form id="local-project-form" style="display: flex; flex-direction: column; gap: 16px;">
                        <div>
                            <label style="font-family: var(--font-heading); font-size: 0.75rem; color: var(--color-text-dark); text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 6px;">Project / Product Name</label>
                            <input type="text" id="local-project-name" placeholder="e.g. White Oud" style="width: 100%; padding: 10px 14px; background: #0c0c0c; border: 1px solid var(--color-border); border-radius: 8px; color: var(--color-text-light); outline: none;">
                        </div>
                        <div>
                            <label style="font-family: var(--font-heading); font-size: 0.75rem; color: var(--color-text-dark); text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 6px;">Brand Partner</label>
                            <input type="text" id="local-project-brand" placeholder="e.g. Amanzi Fragrances" style="width: 100%; padding: 10px 14px; background: #0c0c0c; border: 1px solid var(--color-border); border-radius: 8px; color: var(--color-text-light); outline: none;">
                        </div>
                        <div>
                            <label style="font-family: var(--font-heading); font-size: 0.75rem; color: var(--color-text-dark); text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 6px;">Category</label>
                            <select id="local-project-category" style="width: 100%; padding: 10px 14px; background: #0c0c0c; border: 1px solid var(--color-border); border-radius: 8px; color: var(--color-text-light); outline: none;">
                                <option value="Ecommerce">Ecommerce</option>
                                <option value="Brand Communication">Brand Communication</option>
                                <option value="Campaigns">Campaigns</option>
                                <option value="Product Renders">Product Renders</option>
                                <option value="AI Creative">AI Creative</option>
                            </select>
                        </div>
                        <div>
                            <label style="font-family: var(--font-heading); font-size: 0.75rem; color: var(--color-text-dark); text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 6px;">Folder Path (relative to public/)</label>
                            <input type="text" id="local-project-folder" placeholder="e.g. assets/ecommerce/amanzi/white-oud/" style="width: 100%; padding: 10px 14px; background: #0c0c0c; border: 1px solid var(--color-border); border-radius: 8px; color: var(--color-text-light); outline: none;">
                        </div>
                        <div>
                            <label style="font-family: var(--font-heading); font-size: 0.75rem; color: var(--color-text-dark); text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 6px;">Industry / Tagline</label>
                            <input type="text" id="local-project-industry" placeholder="e.g. Luxury Fragrances & Personal Care" style="width: 100%; padding: 10px 14px; background: #0c0c0c; border: 1px solid var(--color-border); border-radius: 8px; color: var(--color-text-light); outline: none;">
                        </div>
                        <div>
                            <label style="font-family: var(--font-heading); font-size: 0.75rem; color: var(--color-text-dark); text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 6px;">Objective / Overview</label>
                            <textarea id="local-project-objective" rows="2" placeholder="Brief project summary or marketing objective..." style="width: 100%; padding: 10px 14px; background: #0c0c0c; border: 1px solid var(--color-border); border-radius: 8px; color: var(--color-text-light); outline: none; resize: vertical;"></textarea>
                        </div>
                        <div>
                            <label style="font-family: var(--font-heading); font-size: 0.75rem; color: var(--color-text-dark); text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 6px;">Design Approach</label>
                            <textarea id="local-project-approach" rows="2" placeholder="Visual style, aesthetic elements, or design philosophy..." style="width: 100%; padding: 10px 14px; background: #0c0c0c; border: 1px solid var(--color-border); border-radius: 8px; color: var(--color-text-light); outline: none; resize: vertical;"></textarea>
                        </div>
                    </form>
                </div>
                
                <!-- Local Column 2: Media Arrangement & JSON Output -->
                <div style="display: flex; flex-direction: column; gap: 20px;">
                    <h3 style="font-family: var(--font-heading); font-size: 0.95rem; text-transform: uppercase; color: var(--color-accent); font-weight: 700; letter-spacing: 0.05em;">2. Arrangement (Add Images & Update Cover)</h3>
                    
                    <!-- Drag & Drop Zone -->
                    <div class="admin-upload-dropzone" id="local-dropzone" style="border: 2px dashed var(--color-border); border-radius: 12px; padding: 25px; text-align: center; cursor: pointer; transition: border-color 0.3s; background: rgba(255,255,255,0.01);">
                        <span style="font-size: 1.8rem; color: var(--color-accent); display: block; margin-bottom: 4px;">+</span>
                        <span style="font-family: var(--font-heading); font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-text-light); display: block;">Drag & Drop Images here</span>
                        <span style="font-size: 0.7rem; color: var(--color-text-dark); margin-top: 2px; display: block;">or Click to select local files (visual previews)</span>
                        <input type="file" id="local-file-input" multiple accept="image/*" style="display: none;">
                    </div>
                    
                    <!-- Image preview grid -->
                    <div id="local-images-preview-section" style="display: none; max-height: 250px; overflow-y: auto; padding: 10px; border: 1px solid var(--color-border); border-radius: 8px; background: #040404;">
                        <div id="local-images-sort-list" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px;">
                            <!-- Local image items populated dynamically -->
                        </div>
                    </div>
                    
                    <!-- Output JSON -->
                    <div style="margin-top: 10px;">
                        <h3 style="font-family: var(--font-heading); font-size: 0.95rem; text-transform: uppercase; color: var(--color-accent); font-weight: 700; letter-spacing: 0.05em; margin-bottom: 10px;">3. Output Configuration JSON</h3>
                        <div style="position: relative;">
                            <textarea id="local-project-json-output" readonly rows="8" style="width: 100%; padding: 12px; background: #000; border: 1px solid var(--color-border); border-radius: 8px; color: #00ff66; font-family: monospace; font-size: 0.82rem; line-height: 1.4; outline: none; resize: none;"></textarea>
                            <button type="button" class="btn btn-primary" id="local-copy-json-btn" style="position: absolute; bottom: 15px; right: 15px; border-radius: 30px; padding: 6px 14px; font-size: 0.7rem; font-weight: 700;">Copy JSON</button>
                        </div>
                        <p style="font-size: 0.72rem; color: var(--color-text-dark); margin-top: 8px; line-height: 1.4;">
                            Copy this configuration block and insert it directly into the <code>STATIC_PROJECTS</code> array inside <code>pages/portfolio-view.js</code>.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Bulk Folder Importer -->
            <div class="local-designer-panel" style="background: #080808; border: 1px solid var(--color-border); border-radius: 20px; padding: 30px; margin-top: 40px; width: 100%;">
                <div style="margin-bottom: 20px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 15px;">
                    <span style="color: var(--color-accent); font-family: var(--font-heading); font-size: 0.75rem; letter-spacing: 0.2em; text-transform: uppercase; font-weight: 700;">Amanzi Products</span>
                    <h2 style="font-family: var(--font-heading); font-size: 1.4rem; text-transform: uppercase; color: var(--color-text-light); margin-top: 4px;">Bulk Folder Importer</h2>
                </div>
                <p style="font-size: 0.85rem; color: var(--color-text-muted); line-height: 1.6; margin-bottom: 20px; max-width: 800px;">
                    Select a local parent folder containing subfolders (e.g. <code>product-02-meraki/</code>, <code>product-03-green-ajmeri/</code>, etc.) which contain <code>listing/</code> or <code>aplus/</code> directories. The importer will scan and upload all images to the correct product paths on your local server.
                </p>
                <div style="display: flex; align-items: center; gap: 20px;">
                    <button type="button" class="btn btn-primary" id="bulk-import-btn" style="border-radius: 30px; font-weight: 700; padding: 10px 24px;">Select Parent Folder to Import</button>
                    <span id="bulk-import-status" style="font-size: 0.85rem; color: var(--color-text-dark); font-family: var(--font-heading); text-transform: uppercase; letter-spacing: 0.05em;">No folder selected</span>
                    <input type="file" id="bulk-folder-input" webkitdirectory directory multiple style="display: none;">
                </div>
                <div id="bulk-import-results" style="display: none; margin-top: 20px; max-height: 250px; overflow-y: auto; padding: 15px; border: 1px solid var(--color-border); border-radius: 8px; background: #000; font-family: monospace; font-size: 0.8rem; line-height: 1.5; color: var(--color-text-muted);">
                </div>
            </div>

        </div>
    </div>
    `;

    return `
    <!-- Admin Dashboard View -->
    <section class="admin-dashboard-section" style="padding: 120px 4vw 80px 4vw; background: #030303; min-height: 90vh;">
        <div class="container">
            <div class="admin-header-row" style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--color-border); padding-bottom: 20px; margin-bottom: 40px;">
                <div>
                    <span style="color: var(--color-accent); font-family: var(--font-heading); font-size: 0.8rem; font-weight: 600; letter-spacing: 0.2em; text-transform: uppercase;">Administrative Panel</span>
                    <h1 style="font-size: 2.2rem; font-weight: 900; color: var(--color-text-light); text-transform: uppercase; margin: 4px 0 0 0;">PORTFOLIO MANAGER</h1>
                </div>
                <button class="btn btn-secondary" id="admin-logout-btn" style="border-radius: 30px; padding: 8px 20px; font-size: 0.75rem;">Logout</button>
            </div>

            ${tabsHeaderHtml}
            ${dbTabContentHtml}
            ${localTabContentHtml}

        </div>
    </section>

    <!-- Custom styles for active tabs and local list scrollbar -->
    <style>
        .admin-tab-content-panel {
            display: none;
        }
        .admin-tab-content-panel.active {
            display: block;
        }
        .admin-tab-btn {
            transition: color 0.3s;
        }
        .admin-tab-btn.active {
            color: var(--color-accent) !important;
        }
        .admin-tab-btn::after {
            content: '';
            position: absolute;
            bottom: -11px;
            left: 0;
            width: 0;
            height: 2px;
            background-color: var(--color-accent);
            transition: width 0.3s;
        }
        .admin-tab-btn.active::after {
            width: 100%;
        }
        #admin-brands-list::-webkit-scrollbar,
        #admin-projects-list::-webkit-scrollbar,
        #local-images-preview-section::-webkit-scrollbar {
            width: 4px;
        }
        #admin-brands-list::-webkit-scrollbar-track,
        #admin-projects-list::-webkit-scrollbar-track,
        #local-images-preview-section::-webkit-scrollbar-track {
            background: transparent;
        }
        #admin-brands-list::-webkit-scrollbar-thumb,
        #admin-projects-list::-webkit-scrollbar-thumb,
        #local-images-preview-section::-webkit-scrollbar-thumb {
            background: var(--color-border);
            border-radius: 2px;
        }
        .admin-upload-dropzone.dragover {
            border-color: var(--color-accent) !important;
            background: rgba(255, 107, 0, 0.05) !important;
        }
    </style>
    `;
}

export function initAdmin() {
    isUserAuthenticated = sessionStorage.getItem('admin_session') === 'active';

    if (!isUserAuthenticated) {
        setupLoginForm();
        return;
    }

    // Bind logout button
    const logoutBtn = document.getElementById('admin-logout-btn');
    if (logoutBtn) {
        logoutBtn.onclick = () => {
            sessionStorage.removeItem('admin_session');
            isUserAuthenticated = false;
            window.location.reload();
        };
    }

    // Tab Switching Logic if Supabase configured
    if (supabase) {
        const tabButtons = document.querySelectorAll('.admin-tab-btn');
        tabButtons.forEach(btn => {
            btn.onclick = () => {
                tabButtons.forEach(b => {
                    b.classList.remove('active');
                    b.style.color = 'var(--color-text-muted)';
                });
                btn.classList.add('active');
                btn.style.color = 'var(--color-text-light)';

                const targetTab = btn.getAttribute('data-tab');
                document.querySelectorAll('.admin-tab-content-panel').forEach(panel => {
                    panel.classList.remove('active');
                });
                
                const targetPanel = document.getElementById(`tab-content-${targetTab}`);
                if (targetPanel) {
                    targetPanel.classList.add('active');
                }
            };
        });

        setupBrandActions();
        setupProjectActions();
        setupDropzone();
        loadDashboardData();
    }

    // Setup local designer actions (always setup)
    setupLocalDesignerActions();
    setupBulkFolderImporter();
}

function setupLoginForm() {
    const form = document.getElementById('admin-login-form');
    if (!form) return;

    form.onsubmit = (e) => {
        e.preventDefault();
        const passcode = document.getElementById('admin-passcode').value;
        const errorEl = document.getElementById('login-error-msg');

        if (passcode === ADMIN_PASSWORD) {
            sessionStorage.setItem('admin_session', 'active');
            isUserAuthenticated = true;
            if (errorEl) errorEl.style.display = 'none';
            window.location.reload();
        } else {
            if (errorEl) errorEl.style.display = 'block';
            const passcodeField = document.getElementById('admin-passcode');
            if (passcodeField) {
                passcodeField.value = '';
                passcodeField.focus();
            }
        }
    };
}

async function loadDashboardData() {
    if (!supabase) return;
    try {
        // Fetch Brands
        const { data: brands, error: bErr } = await supabase.from('brands').select('*').order('name', { ascending: true });
        if (!bErr && brands) {
            brandsList = brands;
            renderBrandsList();
            populateProjectBrandDropdown();
        }

        // Fetch Projects
        const { data: projects, error: pErr } = await supabase.from('projects').select('*').order('sort_order', { ascending: true });
        if (!pErr && projects) {
            projectsList = projects;
            renderProjectsList();
        }
    } catch (e) {
        console.error("Error loading dashboard data: ", e);
    }
}

// --- BRAND CRUD LOGIC (SUPABASE DB) ---

function setupBrandActions() {
    if (!supabase) return;
    const form = document.getElementById('brand-form');
    const cancelBtn = document.getElementById('brand-cancel-btn');

    if (!form) return;

    form.onsubmit = async (e) => {
        e.preventDefault();

        const id = document.getElementById('brand-id').value;
        const name = document.getElementById('brand-name').value;
        const category = document.getElementById('brand-category').value;
        const industry = document.getElementById('brand-industry').value;
        const objective = document.getElementById('brand-objective').value;
        const approach = document.getElementById('brand-approach').value;

        const payload = { name, category, industry, objective, approach };

        try {
            let error = null;
            if (id) {
                const { error: err } = await supabase.from('brands').update(payload).eq('id', id);
                error = err;
            } else {
                const { error: err } = await supabase.from('brands').insert([payload]);
                error = err;
            }

            if (!error) {
                resetBrandForm();
                await loadDashboardData();
            } else {
                alert("Error saving brand: " + error.message);
            }
        } catch (err) {
            console.error("Brand submit error: ", err);
        }
    };

    if (cancelBtn) {
        cancelBtn.onclick = () => {
            resetBrandForm();
        };
    }
}

function renderBrandsList() {
    const listEl = document.getElementById('admin-brands-list');
    if (!listEl) return;

    listEl.innerHTML = brandsList.map(brand => `
    <div style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); border-radius: 12px; padding: 14px 18px; display: flex; justify-content: space-between; align-items: center;">
        <div>
            <h4 style="font-family: var(--font-heading); font-size: 0.95rem; color: var(--color-text-light); text-transform: uppercase;">${brand.name}</h4>
            <span style="font-size: 0.72rem; color: var(--color-accent); font-family: var(--font-heading); text-transform: uppercase; letter-spacing: 0.05em;">${brand.category}</span>
        </div>
        <div style="display: flex; gap: 8px;">
            <button class="brand-edit-btn" data-id="${brand.id}" style="background: transparent; border: 1px solid rgba(255,255,255,0.1); color: var(--color-text-muted); padding: 4px 10px; font-size: 0.7rem; border-radius: 6px; cursor: pointer; transition: all 0.2s;">Edit</button>
            <button class="brand-delete-btn" data-id="${brand.id}" style="background: transparent; border: 1px solid rgba(255,59,48,0.2); color: #ff3b30; padding: 4px 10px; font-size: 0.7rem; border-radius: 6px; cursor: pointer; transition: all 0.2s;">Delete</button>
        </div>
    </div>
    `).join('');

    listEl.querySelectorAll('.brand-edit-btn').forEach(btn => {
        btn.onclick = () => {
            const id = btn.getAttribute('data-id');
            const brand = brandsList.find(b => b.id === id);
            if (brand) {
                document.getElementById('brand-id').value = brand.id;
                document.getElementById('brand-name').value = brand.name;
                document.getElementById('brand-category').value = brand.category;
                document.getElementById('brand-industry').value = brand.industry || "";
                document.getElementById('brand-objective').value = brand.objective || "";
                document.getElementById('brand-approach').value = brand.approach || "";

                document.getElementById('brand-submit-btn').textContent = "Update Brand";
                document.getElementById('brand-cancel-btn').style.display = 'block';
                editingBrandId = brand.id;
            }
        };
    });

    listEl.querySelectorAll('.brand-delete-btn').forEach(btn => {
        btn.onclick = async () => {
            const id = btn.getAttribute('data-id');
            if (confirm("Are you sure you want to delete this brand? All nested projects will be deleted too.")) {
                try {
                    const { error } = await supabase.from('brands').delete().eq('id', id);
                    if (!error) {
                        if (editingBrandId === id) resetBrandForm();
                        await loadDashboardData();
                    } else {
                        alert("Error deleting brand: " + error.message);
                    }
                } catch (e) {
                    console.error(e);
                }
            }
        };
    });
}

function resetBrandForm() {
    document.getElementById('brand-id').value = '';
    document.getElementById('brand-name').value = '';
    document.getElementById('brand-industry').value = '';
    document.getElementById('brand-objective').value = '';
    document.getElementById('brand-approach').value = '';
    document.getElementById('brand-submit-btn').textContent = "Save Brand";
    document.getElementById('brand-cancel-btn').style.display = 'none';
    editingBrandId = null;
}

function populateProjectBrandDropdown() {
    const dropdown = document.getElementById('project-brand-id');
    if (!dropdown) return;

    dropdown.innerHTML = '<option value="">-- Choose Brand --</option>' + brandsList.map(b => `
        <option value="${b.id}">${b.name} (${b.category})</option>
    `).join('');
}

// --- PROJECT CRUD LOGIC (SUPABASE DB) ---

function setupProjectActions() {
    if (!supabase) return;
    const form = document.getElementById('project-form');
    const cancelBtn = document.getElementById('project-cancel-btn');

    if (!form) return;

    form.onsubmit = async (e) => {
        e.preventDefault();

        const id = document.getElementById('project-id').value;
        const brand_id = document.getElementById('project-brand-id').value;
        const name = document.getElementById('project-name').value;
        const sort_order = parseInt(document.getElementById('project-sort').value, 10) || 0;

        const payload = {
            brand_id,
            name,
            sort_order,
            cover_image: currentProjectCoverImage,
            images: currentProjectImages
        };

        try {
            let error = null;
            if (id) {
                const { error: err } = await supabase.from('projects').update(payload).eq('id', id);
                error = err;
            } else {
                const { error: err } = await supabase.from('projects').insert([payload]);
                error = err;
            }

            if (!error) {
                resetProjectForm();
                await loadDashboardData();
            } else {
                alert("Error saving project: " + error.message);
            }
        } catch (err) {
            console.error("Project submit error: ", err);
        }
    };

    if (cancelBtn) {
        cancelBtn.onclick = () => {
            resetProjectForm();
        };
    }
}

function renderProjectsList() {
    const listEl = document.getElementById('admin-projects-list');
    if (!listEl) return;

    listEl.innerHTML = projectsList.map(proj => {
        const brand = brandsList.find(b => b.id === proj.brand_id);
        const brandName = brand ? brand.name : 'Unknown Brand';
        return `
        <div style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); border-radius: 12px; padding: 14px 18px; display: flex; justify-content: space-between; align-items: center;">
            <div>
                <h4 style="font-family: var(--font-heading); font-size: 0.95rem; color: var(--color-text-light); text-transform: uppercase;">${proj.name}</h4>
                <span style="font-size: 0.72rem; color: var(--color-text-dark); font-family: var(--font-heading); text-transform: uppercase;">Brand: ${brandName}</span>
                <span style="font-size: 0.72rem; color: var(--color-accent); font-family: var(--font-heading); text-transform: uppercase; margin-left: 8px;">Order: ${proj.sort_order}</span>
            </div>
            <div style="display: flex; gap: 8px;">
                <button class="project-edit-btn" data-id="${proj.id}" style="background: transparent; border: 1px solid rgba(255,255,255,0.1); color: var(--color-text-muted); padding: 4px 10px; font-size: 0.7rem; border-radius: 6px; cursor: pointer; transition: all 0.2s;">Edit</button>
                <button class="project-delete-btn" data-id="${proj.id}" style="background: transparent; border: 1px solid rgba(255,59,48,0.2); color: #ff3b30; padding: 4px 10px; font-size: 0.7rem; border-radius: 6px; cursor: pointer; transition: all 0.2s;">Delete</button>
            </div>
        </div>
        `;
    }).join('');

    listEl.querySelectorAll('.project-edit-btn').forEach(btn => {
        btn.onclick = () => {
            const id = btn.getAttribute('data-id');
            const proj = projectsList.find(p => p.id === id);
            if (proj) {
                document.getElementById('project-id').value = proj.id;
                document.getElementById('project-brand-id').value = proj.brand_id;
                document.getElementById('project-name').value = proj.name;
                document.getElementById('project-sort').value = proj.sort_order;

                currentProjectImages = proj.images || [];
                currentProjectCoverImage = proj.cover_image || "";
                renderImagesSortGrid();

                document.getElementById('project-submit-btn').textContent = "Update Project";
                document.getElementById('project-cancel-btn').style.display = 'block';
                editingProjectId = proj.id;
            }
        };
    });

    listEl.querySelectorAll('.project-delete-btn').forEach(btn => {
        btn.onclick = async () => {
            const id = btn.getAttribute('data-id');
            if (confirm("Are you sure you want to delete this project?")) {
                try {
                    const { error } = await supabase.from('projects').delete().eq('id', id);
                    if (!error) {
                        if (editingProjectId === id) resetProjectForm();
                        await loadDashboardData();
                    } else {
                        alert("Error deleting project: " + error.message);
                    }
                } catch (e) {
                    console.error(e);
                }
            }
        };
    });
}

function resetProjectForm() {
    document.getElementById('project-id').value = '';
    document.getElementById('project-brand-id').value = '';
    document.getElementById('project-name').value = '';
    document.getElementById('project-sort').value = '0';

    currentProjectImages = [];
    currentProjectCoverImage = "";
    document.getElementById('project-images-preview-section').style.display = 'none';

    document.getElementById('project-submit-btn').textContent = "Save Project";
    document.getElementById('project-cancel-btn').style.display = 'none';
    editingProjectId = null;
}

// --- DRAG & DROP & FILE STORAGE UPLOAD (SUPABASE LIVE) ---

function setupDropzone() {
    if (!supabase) return;
    const dropzone = document.getElementById('admin-dropzone');
    const fileInput = document.getElementById('project-file-input');

    if (!dropzone || !fileInput) return;

    dropzone.onclick = () => {
        fileInput.click();
    };

    dropzone.ondragover = (e) => {
        e.preventDefault();
        dropzone.classList.add('dragover');
    };

    dropzone.ondragenter = (e) => {
        e.preventDefault();
        dropzone.classList.add('dragover');
    };

    dropzone.ondragleave = () => {
        dropzone.classList.remove('dragover');
    };

    dropzone.ondrop = async (e) => {
        e.preventDefault();
        dropzone.classList.remove('dragover');
        const files = Array.from(e.dataTransfer.files);
        if (files.length > 0) {
            await handleImageUploads(files);
        }
    };

    fileInput.onchange = async (e) => {
        const files = Array.from(e.target.files);
        if (files.length > 0) {
            await handleImageUploads(files);
        }
    };
}

async function handleImageUploads(files) {
    if (!supabase) return;
    const dropzone = document.getElementById('admin-dropzone');
    const label = dropzone.querySelector('span:nth-child(2)');

    const originalText = label.textContent;
    label.textContent = "Uploading... (0/" + files.length + ")";

    let successCount = 0;

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        
        const timestamp = Date.now();
        const rand = Math.floor(Math.random() * 10000);
        const cleanName = file.name.replace(/[^a-zA-Z0-9.]/g, '_');
        const fileName = `${timestamp}_${rand}_${cleanName}`;
        const filePath = `uploads/${fileName}`;

        try {
            const { data, error } = await supabase.storage
                .from('portfolio-assets')
                .upload(filePath, file, {
                    cacheControl: '3600',
                    upsert: false
                });

            if (!error && data) {
                const { data: publicData } = supabase.storage
                    .from('portfolio-assets')
                    .getPublicUrl(filePath);

                if (publicData && publicData.publicUrl) {
                    const publicUrl = publicData.publicUrl;
                    currentProjectImages.push(publicUrl);

                    if (!currentProjectCoverImage) {
                        currentProjectCoverImage = publicUrl;
                    }
                    successCount++;
                }
            } else {
                console.error("Storage upload error: ", error);
            }
        } catch (e) {
            console.error(e);
        }

        label.textContent = `Uploading... (${i + 1}/${files.length})`;
    }

    label.textContent = originalText;
    renderImagesSortGrid();
}

function renderImagesSortGrid() {
    const previewSection = document.getElementById('project-images-preview-section');
    const grid = document.getElementById('project-images-sort-list');
    if (!previewSection || !grid) return;

    if (currentProjectImages.length === 0) {
        previewSection.style.display = 'none';
        return;
    }

    previewSection.style.display = 'block';
    
    grid.innerHTML = currentProjectImages.map((imgUrl, index) => {
        const isCover = imgUrl === currentProjectCoverImage;
        const activeCoverClass = isCover ? 'border: 2px solid var(--color-accent);' : 'border: 1px solid rgba(255,255,255,0.05);';
        
        return `
        <div style="background: rgba(255,255,255,0.02); border-radius: 10px; overflow: hidden; display: flex; flex-direction: column; align-items: center; position: relative; ${activeCoverClass} padding: 6px;">
            <div style="width: 100%; aspect-ratio: 1; display: flex; align-items: center; justify-content: center; background: #000; border-radius: 6px; overflow: hidden;">
                <img src="${imgUrl}" style="width: 100%; height: 100%; object-fit: contain;">
            </div>
            
            <div style="display: flex; justify-content: center; gap: 4px; width: 100%; margin-top: 8px;">
                <button type="button" class="img-move-left" data-idx="${index}" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); color: var(--color-text-light); width: 22px; height: 22px; font-size: 0.65rem; display: flex; align-items: center; justify-content: center; border-radius: 4px; cursor: pointer;">&lsaquo;</button>
                <button type="button" class="img-set-cover" data-idx="${index}" title="Set as Cover" style="background: ${isCover ? 'var(--color-accent)' : 'rgba(255,255,255,0.03)'}; border: 1px solid ${isCover ? 'var(--color-accent)' : 'rgba(255,255,255,0.08)'}; color: var(--color-text-light); flex-grow: 1; height: 22px; font-size: 0.6rem; display: flex; align-items: center; justify-content: center; border-radius: 4px; cursor: pointer; text-transform: uppercase; font-family: var(--font-heading); font-weight: 700;">Cover</button>
                <button type="button" class="img-move-right" data-idx="${index}" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); color: var(--color-text-light); width: 22px; height: 22px; font-size: 0.65rem; display: flex; align-items: center; justify-content: center; border-radius: 4px; cursor: pointer;">&rsaquo;</button>
                <button type="button" class="img-delete" data-idx="${index}" title="Delete Image" style="background: rgba(255,59,48,0.1); border: 1px solid rgba(255,59,48,0.2); color: #ff3b30; width: 22px; height: 22px; font-size: 0.65rem; display: flex; align-items: center; justify-content: center; border-radius: 4px; cursor: pointer;">&times;</button>
            </div>
        </div>
        `;
    }).join('');

    grid.querySelectorAll('.img-move-left').forEach(btn => {
        btn.onclick = () => {
            const idx = parseInt(btn.getAttribute('data-idx'), 10);
            if (idx > 0) {
                const temp = currentProjectImages[idx];
                currentProjectImages[idx] = currentProjectImages[idx - 1];
                currentProjectImages[idx - 1] = temp;
                renderImagesSortGrid();
            }
        };
    });

    grid.querySelectorAll('.img-move-right').forEach(btn => {
        btn.onclick = () => {
            const idx = parseInt(btn.getAttribute('data-idx'), 10);
            if (idx < currentProjectImages.length - 1) {
                const temp = currentProjectImages[idx];
                currentProjectImages[idx] = currentProjectImages[idx + 1];
                currentProjectImages[idx + 1] = temp;
                renderImagesSortGrid();
            }
        };
    });

    grid.querySelectorAll('.img-set-cover').forEach(btn => {
        btn.onclick = () => {
            const idx = parseInt(btn.getAttribute('data-idx'), 10);
            currentProjectCoverImage = currentProjectImages[idx];
            renderImagesSortGrid();
        };
    });

    grid.querySelectorAll('.img-delete').forEach(btn => {
        btn.onclick = () => {
            const idx = parseInt(btn.getAttribute('data-idx'), 10);
            const deletedImg = currentProjectImages[idx];
            currentProjectImages.splice(idx, 1);
            if (currentProjectCoverImage === deletedImg) {
                currentProjectCoverImage = currentProjectImages.length > 0 ? currentProjectImages[0] : "";
            }
            renderImagesSortGrid();
        };
    });
}

// --- OFFLINE LOCAL DESIGNER CMS LOGIC ---

function setupLocalDesignerActions() {
    const form = document.getElementById('local-project-form');
    const localDropzone = document.getElementById('local-dropzone');
    const localFileInput = document.getElementById('local-file-input');
    const addProjectBtn = document.getElementById('local-add-project-btn');
    const copyJsonBtn = document.getElementById('local-copy-json-btn');

    if (!form) return;

    // Trigger update on form entries
    const inputFields = [
        'local-project-name',
        'local-project-brand',
        'local-project-category',
        'local-project-folder',
        'local-project-industry',
        'local-project-objective',
        'local-project-approach'
    ];
    inputFields.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.oninput = () => updateLocalProjectJSON();
            el.onchange = () => updateLocalProjectJSON();
        }
    });

    // Drag & Drop visual arranger events
    if (localDropzone && localFileInput) {
        localDropzone.onclick = () => {
            localFileInput.click();
        };

        localDropzone.ondragover = (e) => {
            e.preventDefault();
            localDropzone.classList.add('dragover');
        };

        localDropzone.ondragenter = (e) => {
            e.preventDefault();
            localDropzone.classList.add('dragover');
        };

        localDropzone.ondragleave = () => {
            localDropzone.classList.remove('dragover');
        };

        localDropzone.ondrop = (e) => {
            e.preventDefault();
            localDropzone.classList.remove('dragover');
            const files = Array.from(e.dataTransfer.files);
            if (files.length > 0) {
                handleLocalImageSelect(files);
            }
        };

        localFileInput.onchange = (e) => {
            const files = Array.from(e.target.files);
            if (files.length > 0) {
                handleLocalImageSelect(files);
            }
        };
    }

    // Reset designer layout
    if (addProjectBtn) {
        addProjectBtn.onclick = () => {
            if (confirm("Reset local designer fields? This will clear all details and visual previews.")) {
                form.reset();
                localImages.forEach(img => URL.revokeObjectURL(img.objectUrl));
                localImages = [];
                localCoverImageName = "";
                renderLocalImagesPreview();
                updateLocalProjectJSON();
            }
        };
    }

    // Copy compiler JSON block
    if (copyJsonBtn) {
        copyJsonBtn.onclick = () => {
            const textarea = document.getElementById('local-project-json-output');
            if (textarea) {
                textarea.select();
                navigator.clipboard.writeText(textarea.value).then(() => {
                    const originalText = copyJsonBtn.textContent;
                    copyJsonBtn.textContent = "Copied!";
                    copyJsonBtn.style.backgroundColor = "var(--color-accent)";
                    copyJsonBtn.style.borderColor = "var(--color-accent)";
                    
                    setTimeout(() => {
                        copyJsonBtn.textContent = originalText;
                        copyJsonBtn.style.backgroundColor = "";
                        copyJsonBtn.style.borderColor = "";
                    }, 2000);
                }).catch(err => {
                    console.error("Clipboard copy failed: ", err);
                });
            }
        };
    }

    updateLocalProjectJSON();
}

function handleLocalImageSelect(files) {
    for (const file of files) {
        const objectUrl = URL.createObjectURL(file);
        localImages.push({
            name: file.name,
            objectUrl: objectUrl
        });
        
        if (!localCoverImageName) {
            localCoverImageName = file.name;
        }
    }
    renderLocalImagesPreview();
    updateLocalProjectJSON();
}

function renderLocalImagesPreview() {
    const previewSection = document.getElementById('local-images-preview-section');
    const grid = document.getElementById('local-images-sort-list');
    
    if (!previewSection || !grid) return;

    if (localImages.length === 0) {
        previewSection.style.display = 'none';
        return;
    }

    previewSection.style.display = 'block';

    grid.innerHTML = localImages.map((img, index) => {
        const isCover = img.name === localCoverImageName;
        const activeCoverStyle = isCover ? 'border: 2px solid var(--color-accent);' : 'border: 1px solid rgba(255,255,255,0.05);';
        
        return `
        <div style="background: rgba(255,255,255,0.02); border-radius: 10px; overflow: hidden; display: flex; flex-direction: column; align-items: center; position: relative; ${activeCoverStyle} padding: 6px;">
            <div style="width: 100%; aspect-ratio: 1; display: flex; align-items: center; justify-content: center; background: #000; border-radius: 6px; overflow: hidden;">
                <img src="${img.objectUrl}" style="width: 100%; height: 100%; object-fit: contain;">
            </div>
            
            <div style="display: flex; justify-content: center; gap: 4px; width: 100%; margin-top: 8px;">
                <button type="button" class="local-img-move-left" data-idx="${index}" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); color: var(--color-text-light); width: 20px; height: 20px; font-size: 0.6rem; display: flex; align-items: center; justify-content: center; border-radius: 4px; cursor: pointer;">&lsaquo;</button>
                <button type="button" class="local-img-set-cover" data-idx="${index}" title="Set as Cover" style="background: ${isCover ? 'var(--color-accent)' : 'rgba(255,255,255,0.03)'}; border: 1px solid ${isCover ? 'var(--color-accent)' : 'rgba(255,255,255,0.08)'}; color: var(--color-text-light); flex-grow: 1; height: 20px; font-size: 0.55rem; display: flex; align-items: center; justify-content: center; border-radius: 4px; cursor: pointer; text-transform: uppercase; font-family: var(--font-heading); font-weight: 700;">Cover</button>
                <button type="button" class="local-img-move-right" data-idx="${index}" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); color: var(--color-text-light); width: 20px; height: 20px; font-size: 0.6rem; display: flex; align-items: center; justify-content: center; border-radius: 4px; cursor: pointer;">&rsaquo;</button>
                <button type="button" class="local-img-delete" data-idx="${index}" title="Delete Image" style="background: rgba(255,59,48,0.1); border: 1px solid rgba(255,59,48,0.2); color: #ff3b30; width: 20px; height: 20px; font-size: 0.6rem; display: flex; align-items: center; justify-content: center; border-radius: 4px; cursor: pointer;">&times;</button>
            </div>
        </div>
        `;
    }).join('');

    grid.querySelectorAll('.local-img-move-left').forEach(btn => {
        btn.onclick = () => {
            const idx = parseInt(btn.getAttribute('data-idx'), 10);
            if (idx > 0) {
                const temp = localImages[idx];
                localImages[idx] = localImages[idx - 1];
                localImages[idx - 1] = temp;
                renderLocalImagesPreview();
                updateLocalProjectJSON();
            }
        };
    });

    grid.querySelectorAll('.local-img-move-right').forEach(btn => {
        btn.onclick = () => {
            const idx = parseInt(btn.getAttribute('data-idx'), 10);
            if (idx < localImages.length - 1) {
                const temp = localImages[idx];
                localImages[idx] = localImages[idx + 1];
                localImages[idx + 1] = temp;
                renderLocalImagesPreview();
                updateLocalProjectJSON();
            }
        };
    });

    grid.querySelectorAll('.local-img-set-cover').forEach(btn => {
        btn.onclick = () => {
            const idx = parseInt(btn.getAttribute('data-idx'), 10);
            localCoverImageName = localImages[idx].name;
            renderLocalImagesPreview();
            updateLocalProjectJSON();
        };
    });

    grid.querySelectorAll('.local-img-delete').forEach(btn => {
        btn.onclick = () => {
            const idx = parseInt(btn.getAttribute('data-idx'), 10);
            const deleted = localImages[idx];
            URL.revokeObjectURL(deleted.objectUrl);
            localImages.splice(idx, 1);
            if (localCoverImageName === deleted.name) {
                localCoverImageName = localImages.length > 0 ? localImages[0].name : "";
            }
            renderLocalImagesPreview();
            updateLocalProjectJSON();
        };
    });
}

function updateLocalProjectJSON() {
    const name = document.getElementById('local-project-name')?.value || "";
    const brand = document.getElementById('local-project-brand')?.value || "";
    const category = document.getElementById('local-project-category')?.value || "Ecommerce";
    let folderPath = document.getElementById('local-project-folder')?.value || "";
    
    if (folderPath && !folderPath.endsWith('/')) {
        folderPath += '/';
    }

    const industry = document.getElementById('local-project-industry')?.value || "";
    const objective = document.getElementById('local-project-objective')?.value || "";
    const approach = document.getElementById('local-project-approach')?.value || "";

    const id = generateProjectSlug(brand, name);

    let coverImage = "";
    if (localCoverImageName) {
        coverImage = folderPath + localCoverImageName;
    } else if (localImages.length > 0) {
        coverImage = folderPath + localImages[0].name;
    }

    const projectObj = {
        id,
        name,
        brand,
        category,
        folderPath,
        coverImage,
        industry,
        objective,
        approach
    };

    const textarea = document.getElementById('local-project-json-output');
    if (textarea) {
        textarea.value = JSON.stringify(projectObj, null, 2);
    }
}

function generateProjectSlug(brand, name) {
    if (!name) return "new-project";
    const cleanName = slugify(name);
    if (!brand) return cleanName;
    
    const cleanBrand = slugify(brand.split(' ')[0]); // Take first word base
    if (cleanName.startsWith(cleanBrand)) {
        return cleanName;
    }
    return `${cleanBrand}-${cleanName}`;
}

function slugify(text) {
    return text
        .toString()
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-')       // Replace spaces with -
        .replace(/[^\w\-]+/g, '')   // Remove all non-word chars
        .replace(/\-\-+/g, '-');    // Replace multiple - with single -
}

function setupBulkFolderImporter() {
    const bulkImportBtn = document.getElementById('bulk-import-btn');
    const bulkFolderInput = document.getElementById('bulk-folder-input');
    const bulkImportStatus = document.getElementById('bulk-import-status');
    const bulkImportResults = document.getElementById('bulk-import-results');

    if (!bulkImportBtn || !bulkFolderInput) return;

    bulkImportBtn.onclick = () => {
        bulkFolderInput.click();
    };

    bulkFolderInput.onchange = async (e) => {
        const files = Array.from(e.target.files);
        if (files.length === 0) return;

        bulkImportStatus.textContent = `Processing ${files.length} files...`;
        bulkImportResults.style.display = 'block';
        bulkImportResults.innerHTML = '';
        
        let successCount = 0;
        let failCount = 0;
        let ignoredCount = 0;

        const appendLog = (message, type = 'info') => {
            const color = type === 'success' ? '#00ff66' : type === 'error' ? '#ff3b30' : '#8e8e93';
            bulkImportResults.innerHTML += `<div style="color: ${color}">${message}</div>`;
            bulkImportResults.scrollTop = bulkImportResults.scrollHeight;
        };

        appendLog(`[START] Scanning selected directory tree...`, 'info');

        for (const file of files) {
            const relativePath = file.webkitRelativePath.replace(/\\/g, '/');
            
            // Match relative path containing product folder (e.g. product-02-meraki) and folder type (listing or a-plus)
            const match = relativePath.match(/(?:^|\/)(product-(\d+)(?:-([^/]+))?)\/(listing|a-plus)\/([^/]+)$/i);
            
            if (match) {
                const fullProductFolder = match[1];
                const indexStr = match[2];
                const folderType = match[4].toLowerCase();
                const filename = match[5];

                // Skip system/hidden files
                if (filename.startsWith('.') || filename.toLowerCase().endsWith('.db')) {
                    ignoredCount++;
                    continue;
                }

                // Construct destination path inside public/assets/ecommerce/amanzi/
                const destinationFolder = `assets/ecommerce/amanzi/${fullProductFolder}/${folderType}/`;
                const destinationPath = `public/${destinationFolder}${filename}`;

                appendLog(`Importing file: ${destinationFolder}${filename} ...`, 'info');

                try {
                    const response = await fetch('/api/upload', {
                        method: 'POST',
                        headers: {
                            'x-target-path': destinationPath
                        },
                        body: file
                    });

                    if (response.ok) {
                        const data = await response.json();
                        if (data.success) {
                            successCount++;
                            appendLog(`✓ Imported successfully: ${filename}`, 'success');
                        } else {
                            failCount++;
                            appendLog(`✗ Failed to write file: ${filename}`, 'error');
                        }
                    } else {
                        failCount++;
                        appendLog(`✗ Server error (${response.status}): ${filename}`, 'error');
                    }
                } catch (err) {
                    failCount++;
                    appendLog(`✗ Network error: ${err.message} (${filename})`, 'error');
                }
            } else {
                ignoredCount++;
            }
        }

        appendLog(`\n[COMPLETE] Import finished. Success: ${successCount} | Failed: ${failCount} | Ignored/Skipped: ${ignoredCount}`, 'success');
        bulkImportStatus.textContent = `Import complete: ${successCount} succeeded, ${failCount} failed.`;
    };
}
