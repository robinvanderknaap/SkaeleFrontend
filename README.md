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

To spinup a webserver and immediately start the webpages:

	gulp serve
	
To turn the frontend into a production version, with all html, css and js minified and concattenated, you can run 

	gulp build
	
The output will be placed in a folder called 'dist'. If you want to see if the production actually works run

	gulp serve-dist



