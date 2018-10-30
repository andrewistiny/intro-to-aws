# AWS and Serverless
[Advanced] - Setting up AWS accounts and Serverless Framework

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
  
## Create Serveless Template and Lambda Function
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
5. Test Lambda function locally
 ```
 serverless invoke local -f FUNCTION_NAME 
 ```
6. Deploy your code
```
serverlesss deploy
```
7. Change message in lambda function then redeploy function only
```
serverless deploy -f FUNCTION_NAME
```
8. Invoke deployed function
```
serverless invoke -f FUNCTION_NAME
```
9. If need help with serverless commands
```
serverless --help
```
** Create API Gateway `GET` request

**Congratulations you have made your first deployment**

# Class Exercise
1. Create a `GET` request to your Lambda function, then render out text `Hello World!` in your frontend

**Hint:** create file structure in your root path for you frontend
```
serverless-demo
|
+ --public
    |
    +-- index.html
    +-- styles.css
    +-- app.js
```
2. Create a `GET` request to your Lambda function, which calls the [Chuck Norris API](http://www.icndb.com/api/) random jokes endpont. Render out a random joke to your frontend everytime you refresh your browser. 

## Resources
[What is AWS?](https://aws.amazon.com/what-is-aws/)

[How does Amazon Web Services (AWS) work? - Quora](https://www.quora.com/How-does-Amazon-Web-Services-AWS-work)

[What Is AWS Lambda?](https://docs.aws.amazon.com/lambda/latest/dg/welcome.html)

[Serverless Framework - AWS Lambda Guide - Quick Start](https://serverless.com/framework/docs/providers/aws/guide/quick-start/)

