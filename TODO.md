# Backend:

1. Connect clerk with mongodb using webhooks
   - When a clerk user is created, their information created in the clerk signup page (ex. username, email, first name, last name, clerk_id) should be automatically added to the users table in the database. After this is completed, there will be null values in the entry for additional information such as university, role (student or professor), etc. These values will be updated from an additional form that users get redirected to after signing up with clerk that asks them for this extra information
2. Create/modify CRUD operations to properly handle frontend form submissions
3. Figure out how UF student verification API works, this will be needed for the university verification feature

# Frontend

1. Create user registration form
   - After registering with Clerk, users should be automatically redirected to a brief "complete registration" form that asks them to select their role (student or professor) and optionally choose a university to connect with. Both fields should be a dropdown, with the university field options being the names of universities already present in the universities table.
2. Create new listings form
   - Form to add a new listing to the listings page, reference schemaOverview.md (I'll add a category column in the database to match the mockData and enable filtration -Rami)
3. Create profile page
   - Prepopulate with logged-in user's data, allow some fields to be edited and updated in the database with a PATCH request
4. Create university connection page
   - Shows universities and allows a student to connect with a university. For the sake of this project, lets have UF as a prepopulated university to show off University authentication.
   - A form to create a new university, reference the schemaOverview.md file for the required fields.
