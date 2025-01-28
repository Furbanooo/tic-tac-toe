# Jeu de Tic-Tac-Toe

Ceci est un jeu de Tic-Tac-Toe construit avec React et Zustand pour la gestion de l'état. Le jeu présente un thème sombre avec des couleurs néon et inclut des fonctionnalités telles que la réinitialisation du jeu et le suivi des scores.

## Fonctionnalités

- Design futuriste avec thème sombre et couleurs néon
- Jeu à deux joueurs (Joueur X et Joueur O)
- Met en évidence la ligne gagnante
- Affiche l'état actuel du jeu (gagnant, match nul ou prochain joueur)
- Suivi des scores pour les deux joueurs
- Fonctionnalités de réinitialisation du jeu et des scores

# Structure du Projet
# Tic-Tac-Toe

## Project Structure

- `tic-tac-toe/`
  - `public/`
    - `index.html`
  - `src/`
    - `components/`
      - `Board.jsx`
      - `Scoreboard.jsx`
      - `Square.jsx`
      - `Status.jsx`
    - `Stores/`
      - `useStore.js`
    - `App.jsx`
    - `App.css`
    - `index.jsx`
  - `package.json`
  - `README.md`


# Composants

-App.jsx: Le composant principal qui contient l'état du jeu et rend les autres composants.

-Board.jsx: Rend le plateau de jeu et gère la logique du jeu.

-Square.jsx: Représente une seule case sur le plateau.

-Status.jsx: Affiche l'état actuel du jeu (gagnant, match nul ou prochain joueur).

-Scoreboard.jsx: Affiche les scores de chaque joueur.

-useStore.js: Gère l'état du jeu en utilisant Zustand.

# Stack

-React: Une bibliothèque JavaScript pour construire des interfaces utilisateur. React est utilisé pour créer les composants de l'application et gérer l'état local des composants.

-Zustand: Une petite bibliothèque de gestion d'état pour React. Zustand est utilisé pour gérer l'état global de l'application, comme le plateau de jeu, le joueur actuel, le gagnant, et les scores.

-Vite: Un outil de build rapide pour les projets web modernes. Vite est utilisé pour le développement et la construction de l'application.

-CSS: Les styles sont écrits en CSS pour donner au jeu un aspect moderne et futuriste. Le fichier App.css contient tous les styles nécessaires pour l'application.

-Police Orbitron: Une police de caractères utilisée pour donner un aspect futuriste au jeu.
