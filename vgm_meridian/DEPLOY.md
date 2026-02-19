# VGM Meridian — Deployment Guide

This is a **full-stack project**:
- **Frontend**: React (Vite) — built into `dist/` and served by Django via WhiteNoise
- **Backend**: Django REST Framework — serves both the API and the React SPA

---

## 🚀 Deploy on Render (Recommended — Free Tier)

### Step 1: Push to GitHub
Make sure your code is pushed to a GitHub repository.

```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

### Step 2: Create a Render Account
Go to [https://render.com](https://render.com) and sign up / log in.

### Step 3: Create a New Web Service

1. Click **"New +"** → **"Web Service"**
2. Connect your GitHub repository
3. Fill in the settings:
   - **Name**: `vgm-meridian`
   - **Root Directory**: *(leave blank / keep as `.` — do NOT set to `backend`)*
   - **Runtime**: `Python 3`
   - **Build Command**: `./build.sh`
   - **Start Command**: `cd backend && gunicorn vgm_backend.wsgi:application --bind 0.0.0.0:$PORT --workers 2 --timeout 120`
   - **Plan**: Free

> ⚠️ **Root Directory must be the project root (blank or `.`)** — NOT `backend/`. This is because the build needs access to both the React frontend (`package.json`, `src/`) and the Django backend (`backend/`). The `cd backend` in the start command handles the directory change.

> **Note**: Render will auto-detect `render.yaml` if you use "Blueprint" deployment — see Step 3b below.

### Step 3b (Alternative): Use Blueprint (render.yaml)

1. Click **"New +"** → **"Blueprint"**
2. Connect your GitHub repository
3. Render will read `render.yaml` and create both the **PostgreSQL database** and **web service** automatically.

### Step 4: Set Environment Variables

In the Render dashboard → your service → **Environment**, add:

| Key | Value |
|-----|-------|
| `SECRET_KEY` | `76W$p$WwZBSDbDDPPFf+n-IdYJE90R2(kV8^P#PrKa2sAZBlyC` |
| `DEBUG` | `False` |
| `ALLOWED_HOSTS` | `.onrender.com,localhost,127.0.0.1` |
| `DATABASE_URL` | (auto-set if using Blueprint, otherwise paste your PostgreSQL URL) |
| `EMAIL_HOST_USER` | `vgmmeridiangroups@gmail.com` |
| `EMAIL_HOST_PASSWORD` | (your Gmail App Password — see below) |

> **Note**: The `SECRET_KEY` above is already set in `render.yaml` for Blueprint deployments. For manual deployments, copy-paste it above.

### Step 5: Gmail App Password Setup

To send emails from Gmail:
1. Go to [https://myaccount.google.com/security](https://myaccount.google.com/security)
2. Enable **2-Step Verification**
3. Go to **App Passwords** → Generate a password for "Mail"
4. Use that 16-character password as `EMAIL_HOST_PASSWORD`

### Step 6: Deploy

Click **"Create Web Service"** — Render will:
1. Run `./build.sh` (installs Node deps, builds React, installs Python deps, runs migrations)
2. Start gunicorn serving your Django app + React SPA

Your app will be live at: `https://vgm-meridian.onrender.com`

---

## 🚂 Deploy on Railway

### Step 1: Push to GitHub
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

### Step 2: Create a Railway Account
Go to [https://railway.app](https://railway.app) and sign up / log in.

### Step 3: Create a New Project

1. Click **"New Project"** → **"Deploy from GitHub repo"**
2. Select your repository
3. Railway will detect `railway.json` automatically
4. **Root Directory**: Leave blank (project root) — do NOT set to `backend/`

> ⚠️ **Root Directory must stay at project root** — the build needs both `package.json` (React) and `backend/` (Django). The `cd backend` in the start command handles the directory change.

### Step 4: Add a PostgreSQL Database

1. In your project, click **"New"** → **"Database"** → **"Add PostgreSQL"**
2. Railway will create a `DATABASE_URL` variable automatically

### Step 5: Set Environment Variables

In Railway → your service → **Variables**, add:

| Key | Value |
|-----|-------|
| `SECRET_KEY` | `76W$p$WwZBSDbDDPPFf+n-IdYJE90R2(kV8^P#PrKa2sAZBlyC` |
| `DEBUG` | `False` |
| `ALLOWED_HOSTS` | `.railway.app,localhost,127.0.0.1` |
| `DATABASE_URL` | (auto-set by Railway PostgreSQL plugin) |
| `EMAIL_HOST_USER` | `vgmmeridiangroups@gmail.com` |
| `EMAIL_HOST_PASSWORD` | (your Gmail App Password) |

### Step 6: Deploy

Railway will automatically build and deploy. Your app will be live at:
`https://your-project-name.railway.app`

---

## 🔧 Generating a Django SECRET_KEY

Run this in Python to generate a secure key:
```python
python -c "from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())"
```

Or use an online generator: [https://djecrety.ir](https://djecrety.ir)

---

## 📁 Project Structure

```
vgm_meridian/
├── build.sh              # Build script (Render)
├── Procfile              # Process file (Heroku/Railway)
├── render.yaml           # Render Blueprint config
├── railway.json          # Railway config
├── requirements.txt      # Root Python requirements
├── package.json          # Node/React dependencies
├── src/                  # React source code
├── public/               # Static assets
└── backend/
    ├── manage.py
    ├── requirements.txt  # Backend Python requirements
    ├── vgm_backend/      # Django project settings
    └── contact_app/      # Contact form API
```

---

## ⚠️ Important Notes

1. **Free tier sleep**: Render's free tier spins down after 15 minutes of inactivity. First request after sleep takes ~30 seconds.
2. **Database**: Free PostgreSQL on Render expires after 90 days. Railway's free tier has monthly usage limits.
3. **Static files**: WhiteNoise serves React's built assets directly from Django — no separate CDN needed.
4. **Email**: Gmail SMTP requires an App Password (not your regular Gmail password).
5. **Migrations**: Run automatically during build via `python manage.py migrate`.
