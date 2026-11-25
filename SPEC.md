# Refactoring to MVC

Pourquoi MVC :
Appli simple                    → Archi simple
API                             → Facile à Adapter en Model/Controller
Gestion Notification            → Implémenter les controllers
Diversification des interface   → Créer des views indépendantes

```
MVC
│   package.json
│   server.js
│   
└───public
    │   index.html
    │   server.js
    |
    ├───model
    │       Teams.js
    │       Matches.js
    │       Results.js
    │       
    ├───view  
    │       TeamView.js
    │       MatcheView.js  
    │       ResultView.js  
    │       RankingView.js  
    │
    service
    |     ServiceController.js
    |     ServiceController.js
    |     ServiceController.js
    |     ServiceController.js
    |
    └───controller
            TeamController.js
            MatcheController.js
            ResultController.js
            RankingController.js
```