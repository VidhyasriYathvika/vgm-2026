# VGM Meridian Group Website

A React + Vite frontend for VGM Meridian Group, featuring information about their various divisions including Thulir Info Tech, Mentorix Academy, and Dolphin Naturals.

## Features

- **Home** - Overview of VGM Meridian Group
- **About** - Company information and history
- **Services** - Details about services offered
- **Branches** - Information about branch locations
- **Contact** - Contact form with WhatsApp integration

## Tech Stack

- React 19
- Vite
- Express (for production serving)
- React Router DOM
- CSS Modules

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Serve production build
npm run start
```

## Deployment to Render

1. Push your code to GitHub
2. Create a new Web Service on Render
3. Connect your GitHub repository
4. Use these settings:
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm run start`
   - **Environment**: Node

## Contact Form

The contact form stores submissions locally in your browser and opens WhatsApp with your message for direct communication with the team.
