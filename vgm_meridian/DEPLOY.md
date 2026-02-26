# Deployment to Render - Step by Step

## Prerequisites
- Your code pushed to GitHub with the project in `vgm_meridian/` folder

## Steps

### 1. Login to Render
Go to https://dashboard.render.com and login

### 2. Create New Static Site
1. Click "New +" button in the top right
2. Select "Static Site"
3. Click "Link your GitHub account" if not already connected

### 3. Configure Your Site
1. **Select repository**: Choose your GitHub repository (e.g., `yourusername/your-repo`)
2. **Settings will appear** - find these fields:
   - **Name**: `vgm-meridian` (or your preferred name)
   - **Root Directory**: **Enter exactly: `vgm_meridian`**
   - **Build Command**: `npm run build`
   - **Publish directory**: `dist`

### 4. Create Static Site
Click "Create Static Site" button

### 5. Wait for Deployment
- Render will build and deploy your site
- Once complete, you'll get a URL like `https://vgm-meridian.onrender.com`

## Important: Root Directory

The **Root Directory** field is critical. Since your project code is in the `vgm_meridian` folder in your GitHub repo, you MUST set:
```
Root Directory: vgm_meridian
```

If you leave it blank, Render will look at the repo root (where there's no package.json) and the build will fail.

## Troubleshooting

If deployment fails:
1. Click on your service in Render dashboard
2. Go to "Logs" tab
3. Look for error messages
4. Most common fix: Check that Root Directory is set correctly
