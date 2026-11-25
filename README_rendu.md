# Rendu
Hadrien MILO (utilisateur github *HadrienM59*)
Sébastien GOUJON (utilisateur github *SEUB2*)

## Contraintes sélectionnées:
C. Indépendance technologique
D. Diversification des interfaces

## Choix architecturaux
Nous sommes passés sur une architecture de type MVC, complétée avec des repository (qui gèrent la persistence des données), et services, et routes.
Les contrôleurs exposent désormais les endpoints API, les services effectuent des tâches métier tels que la validation de la cohérence des données, les modèles posent la représentation des données, les routes permettent d'exposer les endpoints des contrôleurs via le serveur.js. 

Ces choix permettent de faciliter les évolutions futures puisque chaque responsabilité est séparée au lieu du monolithe initial. Par exemple pour changer la persistence on touche uniquement aux repository sans impacter le reste.

## Install et démarrage
 ```bash
 npm i
 npm start
 ```