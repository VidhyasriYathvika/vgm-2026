#!/usr/bin/env bash
# Exit on error
set -o errexit

# --- Frontend Build ---
echo "==> Installing Node dependencies..."
npm install

echo "==> Building React frontend..."
npm run build

# --- Backend Setup ---
echo "==> Installing Python dependencies..."
pip install -r backend/requirements.txt

echo "==> Collecting static files..."
cd backend
python manage.py collectstatic --noinput

echo "==> Running database migrations..."
python manage.py migrate

echo "==> Build complete!"
