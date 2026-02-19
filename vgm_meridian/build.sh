#!/usr/bin/env bash
set -o errexit

# --- Frontend Build ---
npm install
npm run build

# --- Backend Setup ---
pip install -r backend/requirements.txt

# Django collectstatic & migrate
cd backend
python manage.py collectstatic --noinput
python manage.py migrate
