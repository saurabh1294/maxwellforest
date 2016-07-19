# maxwellforest

maxwellforest TDD protractor (non-angular site ) demo
________________________________________________________________


For test automation, you need to have the following packages installed:

1.node.js (download and install https://nodejs.org/en/download/)


2.webdriver-manager - npm update webdriver-manager if you already have webdriver-manager installed 
on your system


3.if webdriver-manager is absent install using npm install webdriver-manager --save-dev


4. Install protactor - npm install  protactor -g


5. Go to project's directory through the command line <project directory path> and type grunt  - It 
will run the server and client and order the coffee for you.


6. The grunt file has tasks like jshint to check the semantics of the code, bgShell - which runs the 
selenium server in the background and shell which then runs the client which automates the coffee 
order process after a timeout of 5 seconds which is used to make sure that the server is up and running 
before the client starts automating the coffee order process.


7. Here is a small demo of the automated coffee ordering task :- https://youtu.be/oHJnWjaF9kU
