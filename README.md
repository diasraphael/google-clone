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

## features

Home page

Search results page

## Notes

### To create the create react app in typescript

npx create-react-app google-clone --template typescript

### tailwind setup

step1: Install Tailwind CSS
Install tailwindcss and its peer dependencies via npm, and then run the init command to generate both tailwind.config.js and postcss.config.js.

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

step2: Configure your template paths
Add the paths to all of your template files in your tailwind.config.js file.

module.exports = {
content: [
"./src/**/*.{js,jsx,ts,tsx}",
],
theme: {
extend: {},
},
plugins: [],
}

step3: Add the Tailwind directives to your CSS
Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file.

@tailwind base;
@tailwind components;
@tailwind utilities;

step4: Start your build process
Run your build process with npm run start.

Start using Tailwind in your project
Start using Tailwind’s utility classes to style your content.

### material ui installation

npm install @mui/material

npm install @mui/icons-material

### react router 6 installation

npm install react-router-dom@6
