
# CREATE THE APP
- package.json 
- global css homePage update


# PRISMA DATABASE AUTHENICATION
npm i -D prisma
npm i @prisma/client
npx prisma init
add the database
- update data source
- setup authenication
- add the adapter
- google console
update the model
npx prisma migrate dev
npx prisma generate
run app
- run prisma studio

- test it out on the home page
- create login/out components & bring in the session
- check prisma studio

# LAYOUT 
- add daisyui
- setup folder organization
- dashboard and landing
- create aside and layout

# LIGHT DARK TOGGLE
 - update tailwindconfig
 - update theme context add one
 - wrap the app with the provider
 - add the toggle button and add in the header

 # ASIDE
 - update the layout
 - bring in the aside
- add the toggle and logic
- make sure is responsize

# HEADER
 - setup the header component
 - style it
 - bring in the auth and theme toggle

# WEBITE 
- update the model
- create route websiteId
- setup the validation
- add to the aside the websiteid


# WEBISTE SELECT
- 