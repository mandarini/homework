# iSite

1. [Description](#description)
2. [Features](#features)
3. [Technologies used](#technologies-used)
4. [Testing](#testing)
5. [How to Run](#how-to-run)
6. [Prerequisites](#prerequisites)

## Description
This is an application which aims at showcasing some front-end development skills.

## Features

### Title
* Display the number of users, as returned by the users endpoint. If no response is given, say that no data are available. Display a loader until the request is finished.
* Hardcoded number of admins, since no indicator could be found as to which user is an admin, based on available data.

### Display list of files
* Display the info demonstrated in the requested design, and expand each list item to show more info, available in the files endpoint.
* Filter files by type and by Published status.
* View first 5 or view all content
* Search among the files using the search bar and dynamic search as you type.
* Wait for the request to the users to finish, and then display the list. If the request is never finished, do not display the "created by" and "modified by" properties.

### File Types
* Hover to see descrciption.
* Choose one to filter files.

### Slow response handling
As described above, the slow response from the users endpoint is handle in the following ways:
* When an error is returned, I repeat the request to the server until I have a response. However, I will only repeat it 5 times maximum, because the server could just be down.

* Once a request is successful, it will get cached, and it will be used in any other place it is needed.

* A map of the array of Users is created, in order to use it when requesting data for a specific user id
  (when, for example, showing the name of the user who modified or created a file). This is to avoid recursive API calls, which is generaly bad practice, but also, specifically for this endpoint, which is slow or fails to respond.
  This is generaly safe, since we do not expect the user data to change frequently.
  Only when the requested user id is not found on the map, the user table is updated.

## Technologies used

* Due to limited time, I opted to use [AngularJS](https://angularjs.org/) (1.6.5), with which I am most accustomed.
* I used [Sass](http://sass-lang.com/) for CSS preprocessing.
* I used [Bootstrap](http://getbootstrap.com/) v 3.3.7 for the UI.
* I used *karma* and *protractor* for testing.

## Testing

You will notice that the testing implementation is incomplete. I am not very skilled with testing yet.

## How to run

* git clone git@github.com:mandarini/homework.git
* cd homework/
* sass --watch app/scss:app/css
* npm start
* npm test
* npm run protractor

## Prerequisites

### npm

The project uses the [npm](https://www.npmjs.com/) package manager.
* To run `npm` you will need [Node.js](https://nodejs.org/en/download/) installed on your system.
* You will need to update npm to its latest version, running `npm install npm@latest -g`.

### bower
The project also uses the [bower](https://bower.io/) package manager. Bower can be installed with npm. You should run `npm install bower`.

### sass
The project, as mentioned, also uses Sass for CSS preprocessing. In order to install Sass, you will need [Ruby](https://www.ruby-lang.org/en/documentation/installation/) to be installed on your system. If you are using Mac, Ruby comes preinstalled.
To install Sass, you can run `sudo gem install sass`.
