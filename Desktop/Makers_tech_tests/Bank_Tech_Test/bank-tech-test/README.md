# Bank-Tech-Test


# Project Description

This app is a basic bank account which is capable of being operated from command line. 
gi

# Set-up

Initialise the NPM project (this will create a file package.json)
$ nvm install node
$ nvm use node
$ npm init -y

# Testing

Add the jest package to our project
(this will update package.json and package-lock.json)
$ npm add jest

Also install jest "globally"
(this is so we can run the `jest` command)
$ npm install -g jest

Run the tests
$ jest

# Using the programme
From project directory

# Run node
$ node

Create a new bankApp instance:
const BankApp = require("./bankApp")
const bankApp = new BankApp()

Make a deposit
bankApp.deposit(1000) 
bankApp.deposit(2000) 

Make a withdrawal
bankApp.withdraw(500) 

Print the statement
bankApp.printStatement()

#Reflections

This project was a challenge given that previously we had been focused on databases rather than commandline centric programmes in projects.

Was unable to design a test in order to verify that the print statement resembled inputs.

Due to the fact, we have only had 2 weeks of formal JavaScript training some of the required code to complete the project was unfamiliar. 

Interested to explore further more sophisticated banking features. 




