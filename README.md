# [Formation OpenClassRooms](https://openclassrooms.com/fr/paths/185-developpeur-web)
## Projet07-Groupomania - Création d'une application fullstack

## Installation

### Database setup
Start your MySQL server

Then import the database, 
you can find it from :
```
/backend/database_backup/groupomania.sql
```
Create a .ENV file in the backend root, 
copy paste the following and
change DB_USER and DB_PASS with your infos:
```
DB_HOST=localhost
DB_USER=your_databse_user
DB_PASS=your_user_password
DB_NAME=groupomania
```
----------

For accessing to the admin user, enter the following infos on the connection page :
```
Email:
admin@admin.com

Password:
admin
```

### Back-end setup
```
cd backend
```
then
```
npm install
```
Start server
```
nodemon server
```
### Front-end setup
```
cd frontend
```
Make sure to have Vue.cli
```
npm install -g @vue/cli
```
Then
```
npm install
```
Start front
```
npm run serve
```

