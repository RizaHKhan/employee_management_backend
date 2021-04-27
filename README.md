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

# Database Design

Golden Rules

1. Duplicate information is bad
2. Accuracy & Completness is good

Design Process

1. Purpose
2. Collect Information
3. Divide the entities into tables
4. Turn the data points into columns
5. Identify Primary and Foreign Key
6. Normalize and Refine

Normalize:

1. First Normal Form
2. Second Normal Form
3. Third Normal Form

| Name          | Primary Key  | Foreign Key         | Comment                                                                                                                                                                                                                                                                                                                                                                                                      |
| ------------- | ------------ | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Org           | UUID         |                     | Organization that will categorize all of the users (admin/managers/employees) underneath it. It also holds the array of UUID of criteria that are included in this org. Admin/Manager can add Criteria to the Org. To start off with, an org will not have any criteria that can be used. However, maybe its better to add an array of criteria under the org, rather then having criteria in its own table. |
| User          | UUID / Email | Role UUID, Org UUID | Any user can be here.                                                                                                                                                                                                                                                                                                                                                                                        |
| Role          | UUID         |                     | Specifies the various roles in this application. There would be permissions that can be added to this table so that the front-end does the appropriate routing. Admin, Manager, Employee                                                                                                                                                                                                                     |
| Criteria      | UUID         |                     | This table has all of the questions that we will be rating the employee on. Each organization can have their own list of criteria's that then the managers can choose (from a dropdown list) and then rate the employees on                                                                                                                                                                                  |
| Quarter-Score | Date         | User-UUID, Score    | Quarterly employee reviews. The unique id is the Quarter and Year (ie, Q1-2021, Q4-2022). We can then add that together to get a yearly average (or something like that)We can then add that together to get a yearly average (or something like that)                                                                                                                                                       |
