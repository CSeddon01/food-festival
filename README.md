# food-festival

npm init --y
npm install -D webpack webpack-cli
Using the -D flag in our npm install command will install both packages into our devDependencies. 

package.json add:
"scripts": {
    "webpack": "webpack --watch",
    "build": "webpack"
},

npm i jquery

npm install bootstrap@4.3.1 --save
npm install popper.js@1.16.0 -- save    
Popper is needed for webpack to work with bootstrap

npm run build


npm install -D webpack-bundle-analyzer

npm install -D file-loader
npm install image-webpack-loader

npm install webpack-dev-server -D 
With this update, anytime you run the command npm run start:dev from the terminal, the development server will start up.
By default, you can view this in your browser at localhost:8080.

npm run webpack

