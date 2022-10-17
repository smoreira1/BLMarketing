# B.L Media Group LLC Marketing Site

## Built with QWIK, Java Spring Boot, AWS DynamoDB

# Prerequisites

The following are some hard and soft prerequisites in order to fully setup and develop with this repository.

1. Node.js
2. Java 18
3. Intellij
4. Git
5. VSCode
6. Docker

# Local Development:

Git Clone repo into your desired directory.

## QWIK set up

1. Development:

- a. Navigate to qwik-app and run npm install
- b. run 'npm run dev'
- c. You now should have a local server that will hot reload on development changes.

2. Testing:

- a. TBD

3. e2e Testing:

- a. TBD

4. More:
1. Check out the package.json to review all possible scripts and features.

## Java Spring Boot Setup

1. In resources/application.properties ensure these settings are pointing to your local docker container.

## AWS DynamoDB

1. Ensure docker is runnning on your device.
2. Navgiate to dynamodb
3. run 'docker compose up'
4. You should now have docker images running locally for the application to interact with.

# Continuous Integration

1. Don't branch.
2. Azure pipeline on Azure Dev Ops will run the build, test and deploy to the trunk web app, be alert for any potential failures.
