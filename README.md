## Gulp Susy Starter

This is a starter project template that uses LibSass to compile sass and html templates with Gulp. This project uses Susy grid system. For html templates it uses [gulp-file-include](https://www.npmjs.com/package/gulp-file-include) plugin.

## Project Setup  

1. Clone the repo 

    ~~~
    git clone git@git.epam.com:sapa-001.git
    ~~~

2. Install Node.js 

3. Install gulp (run anywhere)

    ~~~
    npm install -g gulp
    ~~~

4. Install bower (run anywhere)

    ~~~
    npm install -g bower
    ~~~

5. Install Node dependencies (run in project root folder)

    ~~~
    npm install
    ~~~

6. Install Bower dependencies (run in project root folder)

    ~~~
    bower install
    ~~~

## Usage 

The gruntfile in this project is setup to run `gulp-sass` for scss files and `gulp-file-include` for html (and html includes) and to watch for changes in `scss/*.scss` and `templates/*.html`. Use the `gulp` command (run in project root folder) to start the process.

    ~~~
    gulp
    ~~~

That's it!
Html files will be generated in project root. And main.css in CSS folder.