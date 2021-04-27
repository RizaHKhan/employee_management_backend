# Employee Management App

This is an app that has been brewing in my mind for sometime now. Originally, this was built way back when in **Excel** of all places.

That project was a failure, and I realized I bit off too much that I could chew. Fast forward a couple of years, I have the required skills to do a better job.

This app is meant for medium sized businesses. The business has a number of departments and they have each a hierarchy of managers, leads and employees. This app will do the heavy lifting of corresponding with all of the key players. Paperwork can be shared about employees. Viewed directly in the app by those accredited and we could even extend the app to be used by all employees at some point. Namely to provide feedback or sign documentation.

# Stack

- NodeJS
- Express
- Postgres
- VueJS

We will need to incorporate some type of Email notification.

# Process

1. HR manager login into app.
2. Proceeds to specify **departments** and their **managers**
3. When adding managers, email will be a required field. Once saved, an email will be sent to the manager who will be sent a link to register with the app. Upon their first login, they will be asked to enter a new password.

# DB Connection steps

1. You need to configure your database connection

# Typescript-Rest

The the params are the req object
The return statement is the `response.send`

# Form submissions

Right now form data isn't being accepted by the API. There are ways you can parse that data, or you could just send `x-www-form-urlencoded`
