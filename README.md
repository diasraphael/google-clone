# Google Clone

## This project uses the below packages

### react-router

to move from search page to search results page

### material UI

to use builtin components, images

### google custom api

for user search

### custom hook with react

### tailwind for styling

fetch for backend call

## features

Home page

Search results page

TODO:
brief about the home page and search page

## Notes

### To create the create react app in typescript

npx create-react-app google-clone --template typescript

### material ui installation

npm install @mui/material

npm install @mui/icons-material

npm install @emotion/styled @emotion/react

### react router 6 installation

npm install react-router-dom@6

### How to add google search to web application

#### Step1: Get API key

https://developers.google.com/custom-search/v1/using_rest

click Get a key button

create a new project using the option and give a name

copy the API key and store it in a file(key.ts)

#### Step2: create new search engine

open http://cse.google.com/cse/create/new

give name to search engine

click search the entire web option and create

copy the search engine id to pass when we call the api
