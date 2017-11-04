# MobileHybridProjectWoW #

### Principe ###

Application lié au jeu vidéo World of Warcraft permettant de charger un personnage World of Warcraft avec son équipement.

*L'utilisateur peut :*

- S'authentifier
- Créer un compte
- Réinitialiser son mot de passe
- Ajouter un personnage avec son pseudonyme et son serveur (européen)
- Accéder à la liste des personnages enrigstrés sur la base de donnée

### Fonctionnement ###



- L'application, faite sous Ionic, échange avec une fonctionnalité backend fournie par Firebase afin d'afficher les personnages ajoutés et leurs équipements ajoutés par les utilisateurs.


- Une GoogleSheet vérifie la base de données Firebase afin d'identifier les nouveaux personnages ajoutés. Dès qu'elle récupère un nouveau personnage, elle fait appel à l'API Blizzard afin de récupérer les données liées aux personnages et les traites.

*Firebase ne sera partagé qu'à l'examinateur :*
*[https://console.firebase.google.com/u/0/project/wowmobile-b69ba/overview ](https://console.firebase.google.com/u/0/project/wowmobile-b69ba/overview)*

*Voici le lien du GoogleSheet (créez une copie pour avoir accès aux scripts) :*
*[https://docs.google.com/spreadsheets/d/1XRdglyWNnSvhjb-q-E_hKh69Aok4lk2dbCxrlWYQFmw/edit?usp=sharing](https://docs.google.com/spreadsheets/d/1XRdglyWNnSvhjb-q-E_hKh69Aok4lk2dbCxrlWYQFmw/edit?usp=sharing "GoogleSheet")*

### Problèmes rencontrés ###

*Après avoir échangé à la fin du cours, nous avions, pour but de notre application hybride, une application faisant appel à l'API Blizzard pour récupérer les hôtels des ventes de chaques serveurs européens, afficher ces enchères et avoir une notification par rapport à des enchères sélectionnées.*

***Cependant, nous avons rencontrés beaucoup de problèmes lors de ce mois.***


*Bien que les cours pendant ce mois aient étés en partie un temps perdu à développer pour l'application, cela n'est pas vraiment le plus gros problème que nous ayons rencontrés :*

- Firebase, dans un premier temps, pour sa limitation aux appels API. Si nous voulions faire un appel à une API autre que celle de Google, Firebase devenait payant, ce qui était impossible pour nous.



- Le second gros problème fût été d'utiliser GoogleSheet pour faire nos appels à l'API Blizzard. Les appels marchent en soi, sauf que le JSON de chaque hôtel des ventes est tellement volumineux que GoogleSheet refuse de le traiter. Nous nous sommes donc orientés vers les équipements des personnages, étant énormément moins volumineux.



- Le dernier problème fût surtout la documentation de Ionic, non mise à jour, avec des posts d'au minimum 7 mois (c'est-à-dire beaucoup), qui nous ont empêchés de produire ce que nous souhaitions. Nous avons quand même fait tout notre possible pour présenter une application présentable.


*Finalement, avec tout ces problèmes rencontrés, nous nous sommes assez éloignés de notre premier but.*

### Exemple de personnages pour les tests (Serveur - Nom de personnage) ###
Hyjal - Magnûm

Hyjal - Flayed

Hyjal - Jbate

Ysondre - Nooctae

Sargeras - Nogead

Ysondre - Mojowar

*(Pleins d'autres exemples existent avec d'autres serveurs, cependant cela peut être très long à rechercher)*

###  Screenshots ###
#### Page de connexion ####

![Accueil](http://zupimages.net/up/17/44/tap6.png)

#### Home ####

![Home](http://zupimages.net/up/17/44/c36l.png)


### Membres du groupe ###

*Arthur Chassot*

*Léa Giffard Hontabat*

***Nous avons assisté au cours.***