Put your full-size Canva export here as: hero-source.mp4

This folder is OUTSIDE public/ on purpose — Next.js copies everything under public/
into the production build. A 100MB+ source file would make your site huge.

Encoded files for the live site go to: public/Videos/
Run from project root: npm run encode:hero
