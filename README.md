# 📌 Projet Angular - Système de Soumission de Devoirs

Bienvenue dans ce projet Angular ! 🚀 Ce projet permet aux étudiants de soumettre leurs devoirs et aux enseignants de les corriger.

## 📌 Description

Ce projet est un **frontend Angular** qui se connecte à un backend **Django** pour gérer :

- 📌 L'authentification des utilisateurs (Étudiants et Enseignants)
- 📌 Le tableau de bord avec statistiques
- 📌 La soumission de devoirs par les étudiants
- 📌 La correction et la notation par les enseignants

## 📌 Prérequis

Avant de commencer, assure-toi d'avoir :

- **Node.js** installé : [Télécharger Node.js](https://nodejs.org/)
- **Angular CLI** installé :
  ```sh
  npm install -g @angular/cli
  ```
- **Git** installé : [Télécharger Git](https://git-scm.com/downloads)

## 📌 Installation

1. **Cloner le dépôt** :

   ```sh
   git clone https://github.com/ton-utilisateur/mon-projet-angular.git
   cd mon-projet-angular
   ```

2. **Installer les dépendances** :

   ```sh
   npm install
   ```

3. **Lancer le projet** :
   ```sh
   ng serve --open
   ```
   L'application sera accessible à **http://localhost:4200/**

## 📌 Structure du Projet

📂 `src/` - Dossier principal contenant le code source  
📂 `src/app/` - Contient les composants et services Angular  
📂 `src/assets/` - Contient les fichiers statiques (images, styles)  
📂 `src/environments/` - Contient les fichiers de configuration

## 📌 Fonctionnalités

- 📌 **Authentification** : Connexion et inscription des utilisateurs
- 📌 **Soumission de devoirs** : Upload de fichiers par les étudiants
- 📌 **Correction et notation** : Interface enseignant pour corriger les devoirs
- 📌 **Tableau de bord** : Vue avec statistiques sur les devoirs soumis
