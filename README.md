# congfigure-aws-and-serverless
[Advanced] - Setting up AWS accounts and Serverless Framework

## What is AWS?
Amazon Web Services(AWS) is a platform of cloud computing which provides a simple way to access servers, storage, databases and a broad set of applications. We are basically renting out AWS servers instead of having to maintain our own.

## Why use AWS?
- **Low Cost** - As developers, we pay end up paying less if we want to host our application on AWS servers. Since AWS has many active users, it drives down the cost of server use. 
- **Advanced security features** - Expert security staff are continually upgrading and maintaining servers. 
- **Highly reliable** - your data is matained in many different data centers just in case one goes down

## What is Serverless Framework?
AWS allows us to access the their platform through **programmatic access** or **AWS management console access**. In this course, we will be using **programmatic access** through the [Serverless Framework](https://serverless.com/) which allows us to access AWS through the command line and code editor.  

## What is AWS Lambda?
A compute service that allows developers to run code without having to manage a server. No express server needed. A Lambda is basically a function in the cloud. 

## What does deploy mean?
Moving our application to the AWS cloud. In our case, we will be delpoying our Lambda function

## Configuring AWS and Serverless

1. Your instructor should have provided you with a **Access Key ID** and a **Secret Access Key**. Please save them in a safe location.
2. Open up your git-bash terminal
3. Install aws-cli for windows 
    - [Install AWS Command Line](https://docs.aws.amazon.com/cli/latest/userguide/awscli-install-windows.html)
3. **Configure Access_ID, Secrect_Access_id, and region on our computer **
    - Type `aws configure` then hit enter
      - Input the following 
        - access_id 
        - access_secret_id
        - region: us-west-2
5. **npm install Serveless Framework** `npm install -g serverless`
6. **Set Serverless provider credentials**
  ```
  serverless config credentials --provider aws --key YOUR_ACCESS_KEY --secret YOUR_SECRET_KEY
  ```
7. **Make a new folder** `mkdir YOUR_PROJECT_NAME`
8. **CD into your folder** `cd YOUR_PROJECT_NAME`
9. **Create boilerplate/template to use Serverless** 
```
serverless create --template aws-nodejs
```
10. **Test Lambda function locally**
 ```
 serverless invoke local -f FUNCTION_NAME --path serverless.yml
 ```
11. Change service name in `serverless.yml` file
12. **Uncomment the following:**  
```
stage: dev
region: us-east-1
```
  - Then set region to `us-west-2`

13. **Deploy to your AWS cloud**
```
serverlesss deploy
```
14 **Change message in lambda function then redeploy function only**
```
serverless deploy -f FUNCTION_NAME
```
15. **Invoke deployed function**
```
serverless invoke -f FUNCTION_NAME
```
16. **If need help with serverless commands**
```
serverless --help
```
**Congratulations you have made your first deployment**

## Resources
[What is AWS?](https://aws.amazon.com/what-is-aws/)
[How does Amazon Web Services (AWS) work? - Quora](https://www.quora.com/How-does-Amazon-Web-Services-AWS-work)
[What Is AWS Lambda?](https://docs.aws.amazon.com/lambda/latest/dg/welcome.html)
[Serverless Framework - AWS Lambda Guide - Quick Start](https://serverless.com/framework/docs/providers/aws/guide/quick-start/)
