# Helldivders 2 App Backend

The goal of this project is to create the backend for a Helldivers 2 app which allows admins to add entries (enemy units, factions, weapons, stratagems, etc.) which can be viewed by all users.

Utilizes JavaScript, Express.js, Sequelize, Express-Validator, JSON Web Token implementation

### Features (work in progress)

-   Currently I have implemented the option to create new users with a "user" or "admin" role. From the frontend you can only create a "user" role and view the assets that have already been added. Admins can be created from the backend.

-   Logging in from the frontend signs a JSON web token for that user.

-   User routes are validated using Express Validator

-   Admins can add/edit/delete factions and enemy units. Sequalize assosiations between the models has been set in the index.js file
