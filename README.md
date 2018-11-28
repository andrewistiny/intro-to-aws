# Intro to AWS
[Advanced] - AWS Intro, Set up AWS and Serverless, Lambda, API Gateway

## What is AWS?
Amazon Web Services(AWS) is a platform of cloud computing which provides a simple way to access servers, storage, databases and a broad set of applications. We are basically renting out AWS servers to host our application instead of having to maintain our own. There are many type of services in AWS, each performing a specific functionality.

## Why use AWS?
- **Low Cost** - As developers, we pay end up paying less if we want to host our application on AWS servers. Since AWS has many active users, it drives down the cost of server use. 
- **Advanced security features** - Expert security staff are continually upgrading and maintaining servers. 
- **Highly reliable** - your data is matained in many different data centers just in case one goes down

## What is Serverless Framework?
AWS allows us to access the their platform through **programmatic access** or **AWS management console access**. In this course, we will be using **programmatic access** through the [Serverless Framework](https://serverless.com/) which allows us to access AWS through the command line and code editor.  

## What is AWS Lambda?
An AWS service that allows developers to run code without having to manage a server. No express server needed. A Lambda is basically a function in the cloud. 

## What is API Gateway?
An AWS service that enables developers to create, publish, maintain, monitor, and secure APIs at any scale. You can create APIs that access AWS or other web services, as well as data stored in the AWS Cloud. It allows developers to create CRUD routes(GET, POST, PUT, DELETE).

## What does deploy mean?
Moving our application to the AWS cloud/servers. In our case, we will be deploying our Lambda function. 

## What will we be doing?
We will conifgure our AWS credentials and Serverless credentials, then will set up our Lambda function and API Gateway to deploy a `GET` url enpoint for our frontend client. 

![AWS Diagram](https://i.imgur.com/Qi61WFf.png)

## Configuring AWS and Serverless

1. Your instructor should have provided you with a **Access Key ID** and a **Secret Access Key**. Please save them in a safe location.
2. Open up your git-bash terminal
3. Install aws-cli for windows 
    - [Install AWS Command Line](https://docs.aws.amazon.com/cli/latest/userguide/awscli-install-windows.html)
3. Configure Access_ID, Secrect_Access_id, and region on our computer
    - Type `aws configure` then hit enter
      - Input the following 
        - access_id 
        - access_secret_id
        - region: us-west-2
5. npm install Serveless Framework `npm install -g serverless`
6. Set Serverless provider credentials
  ```
  serverless config credentials --provider aws --key YOUR_ACCESS_KEY --secret YOUR_SECRET_KEY
  ```
  
## Create Serverless Template and Lambda Function
1. Create a new directory/project`mkdir YOUR_PROJECT_NAME`
2. CD into your directory/project `cd YOUR_PROJECT_NAME`
3. Create boilerplate/template to use Serverless**
```
serverless create --template aws-nodejs
```
3. Change service name in `serverless.yml` file
4. Uncomment the following:* 
```
stage: dev
region: us-east-1
```
  - Then set region to `us-west-2`
5. Deploy your code
```
serverlesss deploy
```
6. Invoke deployed function
```C
serverless invoke -f FUNCTION_NAME 
```
7. Change message in lambda function then redeploy function only
```
serverless deploy -f FUNCTION_NAME
```
8. Invoke deployed function
```
serverless invoke -f FUNCTION_NAME 
```
9. Get logs from deployed function
```
serverless logs -f FUNCTION_NAME -t
```
10. If need help with serverless commands
```
serverless --help
```
**Create API Gateway `GET` request**
1. Paste in the following code snippet in `serverless.yml`
```
functions:
  FUNCTION_NAME:
    handler: handler.FUNCTION_NAME
    events:
      - http:
          path: PATH_NAME
          method: get
          cors: true
 ```
 2. Paste in the following in your `response` object, above the `body` property
 
 **This allows [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)**
 ```
 headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true
    },
 ```
 3. Deploy your code
 ```
 serverless deploy
 ```
 4. You should see a `GET` endpoint url under `endpoints:`

# Serverless Workflow
1. Write your functions
2. Use`serverless deploy`only when you've made changes to`serverless.yml`
3. Use`serverless deploy function -f FUNCTION_NAME`to rapidly deploy changes when you are working on a specific AWS Lambda Function.
4. Use`serverless invoke -f FUNCTION_NAME`to test your AWS Lambda Functions on AWS.
5. Open up a separate tab in your console and stream logs in there via`serverless logs -f FUNCTION_NAME -t`.

# Class Exercise
1. In your Lambda function, create a random food generator
2. Create file structure in your root path for you frontend
```
serverless-demo
|
+ --public
    |
    +-- index.html
    +-- styles.css
    +-- app.js
```
3. Use axios in your `app.js` to get a random food from your newly created GET endpoint
4. Render the following to your browser `Today, I will eat a ${INSERT_FOOD_VALUE}`
5. Your browser should render a different food everytime you refresh

## Resources
[What is AWS?](https://aws.amazon.com/what-is-aws/)

[How does Amazon Web Services (AWS) work? - Quora](https://www.quora.com/How-does-Amazon-Web-Services-AWS-work)

[Serverless Framework - AWS Lambda Guide - Quick Start](https://serverless.com/framework/docs/providers/aws/guide/quick-start/)
[Serverless Framework - CORS & API Gateway](https://serverless.com/blog/cors-api-gateway-survival-guide/)

#### AWS Services
[What Is AWS Lambda?](https://docs.aws.amazon.com/lambda/latest/dg/welcome.html)

[What Is Amazon API Gateway?](https://docs.aws.amazon.com/apigateway/latest/developerguide/welcome.html)
