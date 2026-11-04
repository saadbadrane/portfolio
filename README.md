# Portfolio — Saad Badrane

Mon site personnel d'ingénieur IA & Computer Vision : présentation, compétences, projets détaillés (une page par projet) et formulaire de contact. Disponible en français et en anglais.

En ligne : https://saadbadrane.github.io/portfolio

## Stack

- [Next.js 16](https://nextjs.org/) (App Router), React 19, TypeScript
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) pour les animations
- Export statique (`output: "export"`), hébergé sur GitHub Pages sous `/portfolio`
- [Formspree](https://formspree.io/) pour le formulaire de contact
- Google Analytics optionnel, chargé uniquement après consentement

Tout le contenu (textes FR/EN, projets, compétences) est centralisé dans `lib/data.ts`.

## Lancer en local

```bash
npm install
npm run dev
```

Puis ouvrir http://localhost:3000.

Variables d'environnement optionnelles, dans un fichier `.env.local` :

```
NEXT_PUBLIC_FORMSPREE_ID=xxxxxxxx   # formulaire de contact
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX      # Google Analytics (sinon ni script ni bannière cookies)
```

## Vérifier et construire

```bash
npm run lint
npm run build   # génère le site statique dans out/
```

## Déployer

Chaque push sur `main` déclenche le workflow `.github/workflows/deploy.yml`, qui construit le site et le publie sur GitHub Pages.

Les identifiants Formspree et Google Analytics sont lus depuis les secrets du dépôt (`NEXT_PUBLIC_FORMSPREE_ID`, `NEXT_PUBLIC_GA_ID`).
