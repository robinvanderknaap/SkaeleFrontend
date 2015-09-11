# SkaeleFrontend
> Frontend starter template. Including NPM, Bower, Gulp, SASS, Angular, jQuery, Bootstrap

# Requirements
To install the starter template you need to have npm, bower and gulp installed globally.

NPM is a package manager which is bundled with NodeJs. Just download and install node from https://nodejs.org/en/

When NPM is installed it's easy to install Bower and Gulp

From the command line:

	npm install -g bower

	npm install -g gulp

# Getting started
To start the template, run npm and bower first to download all the packages (packages are not stored in the repository):

	npm install

	bower install

Now you have to create a settings file called 'environment-settings.js. This needs to be placed in the 'src' folder. This file will contain all settings which are specific to the environment. A template file can be found in the same src folder, called environment-settings-template.js. You can copy and rename this file, and change the values according to your environment. The settings file is ignored by version control, so other developers will not be affected by the changes you make in the settings file.

When the settings file is in place, you can spinup a webserver and immediately start the webpages by running:

	gulp serve

# Build production version	
To turn the frontend into a production version, with all html, css and js minified and concattenated, you can run 

	gulp build
	
The output will be placed in a folder called 'dist'. If you want to see if the production actually works run

	gulp serve-dist



