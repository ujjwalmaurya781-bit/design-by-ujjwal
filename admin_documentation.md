# Portfolio Admin System Setup & User Guide

This guide explains how to connect your Supabase database and storage, customize your passcode, and use the admin dashboard to manage your visual design portfolio.

---

## Part 1: Supabase Configuration

### Step 1: Database Tables Setup
Log into your [Supabase Dashboard](https://supabase.com/), open your project, and navigate to the **SQL Editor**. Copy and paste the following commands to create the `brands` and `projects` tables:

```sql
-- 1. Create Brands Table
CREATE TABLE public.brands (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    category TEXT NOT NULL, -- 'Brand Communication', 'Ecommerce', 'Campaigns', 'Product Renders'
    industry TEXT,
    objective TEXT,
    approach TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Create Projects Table
CREATE TABLE public.projects (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    brand_id UUID REFERENCES public.brands(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    cover_image TEXT, -- URL of cover image in storage
    images TEXT[] DEFAULT '{}'::TEXT[], -- Array of project image URLs
    sort_order INT DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. Enable Row Level Security (RLS)
ALTER TABLE public.brands ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;

-- 4. Enable Public Read access Policies
CREATE POLICY "Allow public read access" ON public.brands FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON public.projects FOR SELECT USING (true);

-- 5. Enable Public Write access Policies (For Admin Panel Actions)
CREATE POLICY "Allow all write access" ON public.brands FOR ALL USING (true);
CREATE POLICY "Allow all write access" ON public.projects FOR ALL USING (true);
```

### Step 2: Storage Bucket Setup
1. In the Supabase sidebar, click on **Storage**.
2. Click **New bucket**.
3. Name the bucket exactly: `portfolio-assets`.
4. Toggle **Public bucket** to **ON** (so image URLs can be accessed publicly by recruiters and clients).
5. Click **Create bucket**.

### Step 3: Link Credentials to Website code
Open the file [src/config.js](file:///c:/Users/HARSHIT/Documents/Ujjwal-Maurya-Portfolio/src/config.js) and fill in your Supabase credentials:

- `SUPABASE_URL`: Found in Supabase Settings -> API -> Project URL
- `SUPABASE_ANON_KEY`: Found in Supabase Settings -> API -> `anon` public key

You can also customize your passcode by modifying the `ADMIN_PASSWORD` variable (default: `Ujjwal@Designer2026`).

---

## Part 2: How to Use the Admin Panel

To access the admin system, navigate to: **`http://localhost:5173/#admin`** (or `https://yourdomain.com/#admin` when deployed). Enter your configured passcode.

### 1. Adding a Brand
Brands act as containers for projects/products.
1. Fill out the **Brand Manager** form:
   - **Brand Name**: (e.g. `Amanzi Fragrances`)
   - **Category**: Dropdown list matching portfolio filters.
   - **Industry / Tagline**: (e.g. `Luxury Fragrances & Personal Care`)
   - **Objective & Design Approach**: Detailed design objectives.
2. Click **Save Brand**. The brand will appear in the dropdown list for projects.

### 2. Adding a Project & Uploading Images
1. Locate the **Project Creator** form.
2. Choose your brand in the **Select Brand** dropdown.
3. Enter the **Project Name** (e.g. `White Oud`).
4. Set a **Sort Order** number (e.g. `0` for first, `1` for second).
5. Drag multiple images into the dashed **Drag & Drop** area, or click the box to select files from your computer. 
6. Wait for the upload to complete. Uploaded images will render visually in a grid layout.

### 3. Reordering Images & Selecting Cover
Inside the Project Creator form under the dropzone:
- **Change Sort Order**: Click `‹` (left) or `›` (right) buttons below any thumbnail to move the image.
- **Select Cover Image**: Click the **Cover** button on a thumbnail. The active cover image will highlight with an orange border. This cover image represents the project card thumbnail.
- **Delete Image**: Click the `×` button on any image to remove it.
- Click **Save Project** when finished. The project card and dynamic gallery will immediately update.

### 4. Editing and Deleting Projects / Brands
- **Edit**: Click **Edit** next to any brand or project. Modify its fields or sort order, and click **Update**.
- **Delete**: Click **Delete** next to any brand or project. Note that deleting a Brand automatically deletes all projects associated with that brand.
