# Creating Angular Resturant Project
# How to Upload a repository
*ng new demo*
## Change the directory to demo and open the project in VS Code or any other IDE of your choice.
*ng serve.*
*git remote add origin https://github.com/USERNAME/PROJECT_NAME.git.*
*git remote -v.*
*_npm install -g angular-cli-ghpages._*
*_After installing ghpages, use Angular CLI to build the project._*
## How to Install JSON Server?
*npm install -g json-server*

## Go to under mentioned url
[JSON Server](https://www.npmjs.com/package/json-server)
## In a Folder Create json file with the json Extension and then
## Paste the following Code this will create 3 API (posts, profile, Resturant)
```javascript
{
  "posts": [
    { "id": 1, "title": "json-server", "author": "typicode" }
  ],
  "profile": { "name": "typicode" },
  "Resturant": [
    {
      "id": 1,
      "name": "2nd Wife",
      "address": "Malir Karachi",
      "email": "2ndwife@test.com"
    },
    {
      "id": 2,
      "name": "KFC",
      "address": "Korangi Karachi",
      "email": "kfc@test.com"
    },
    {
      "id": 3,
      "name": "McDonals",
      "address": "Landhi Karachi",
      "email": "mcd@test.com"
    }
  ]
}
```
## In Command Prompt open the directory where file located and then run the following command
*json-server --watch db.json*
## Go to the Following Port in Browser
*localhost:3000/Resturant*
## To go to Specific ID enter the id
*localhost:3000/Resturant/1*
## Postman
1. Install and Run Postman Extension for Chorome and then run it
### Get Option of Postman
1. Do the following for Get Request in Postman
2. Click *New* and then *Request* Button in the Postman
3. Select the *Get* Service in the *Dropdown*
4. Paste the URL of your JSON File Server *localhost:3000/Resturant* in *params* option
4. Click the *Send* Button
5. Now check the *Body* for Result
### Post Option of Postman
1. Do the following for *Post* Request in Postman
2. Select *Post* in Drop Down
3. Select *Body* tab in Postman
4. Check *Row* in Radio Button
5. Select *json* option in dropdown
6. Enter your new *object* without *id* because auto generated
```javascript
{
    "name": "Healty",
    "address": "Cant Bazar Karachi",
    "email": "hcbk@test.com"
}
```
7. Hit the *Send* Button
### Put Option of Postman
1. Do the following for *Put* Request in Postman
2. Select *Put* in Drop Down
3. Select *Body* tab in Postman
4. Check *Row* in Radio Button
5. Select *json* option in dropdown
6. Use URL *http://localhost:3000/resturant/5* and *ID* to Update an *Exsisting Object*
7. You already mentioned the *ID* in URL so in Object no need to mentioned again
```javascript
{
    "name": "Healty",
    "address": "Cant Bazar Karachi",
    "email": "hcbk@test.com"
}
```
8. Hit the *Send* Button

### Delete Option of Postman
1. Do the following for *Delete* Request in Postman
2. Select *Delete* in Drop Down
3. Select *Body* tab in Postman
4. Check *Row* in Radio Button
5. Select *json* option in dropdown
6. Use URL *http://localhost:3000/resturant/5* and *ID* to Delete an *Exsisting Object*
7. Hit the *Send* Button

### Search Option of Postman
1. Do the following for *Search* Request in Postman
2. Select *Get* in Drop Down
3. Select *Authorization* tab in Postman not *mendatory*
4. Use URL *http://localhost:3000/resturant?q=sweet* Seraching Keyword goes after *q=*
5. Hit the *Send* Button
6. Result would be displayed in *Body* tab below



