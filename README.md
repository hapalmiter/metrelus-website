# MetrelusWebsite

------------------------- Angular App --------------------------

* ensure you have angular cli
  - npm install -g @angular/cli
  - OR to get latest version
  - npm install -g @angular/cli@next
* ensure you have node v10 or higher
  - npm install npm@latest -g
* then run ng update

* create new angular project (DO NOT DO THIS STEP UNLESS REPLACING CURRENT WEBSITE)
  - ng new <app-name> --defaults
  - defaults is optional
 
* cd into <app-name>
* Add ghpages to your application
  - ng add angular-cli-ghpages

* ng serve
  - http://localhost:4400/

--------------- Angular Deploy to Github Page ------------------

* https://github.com/angular-schule/angular-cli-ghpages

* create repo in github (DO NOT DO UNLESS CREATING NEW REPO)

To commit and push to repo:
* git remote add origin https://github.com/<username>/<repositoryname>.git
	- HINT: first ensure https://github.com/<username>/<repositoryname>.git goes to correct project by entering URL into browser
* git commit -a -m "<commit message>"
* For first push git 
	- push origin master
	- git push --set-upstream origin master
* All other commits
	- git push

To deploy app:
* ng deploy --cname=metrelus.com

-------------------------- DNS Config --------------------------

*https://uxworks.online/3-steps-to-add-a-custom-domain-for-github-pages-for-your-angular-website/
*https://help.github.com/en/articles/setting-up-an-apex-domain#configuring-a-records-with-your-dns-provider

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
