# Serverless Framework Node Endpoint on AWS

Simple function in Typescript with serverless 

## Usage

### Install dependencies

Do an npm install for installing all the project dependencies.

```
$ npm install
```

### Deployment

This example is made to work with the Serverless Framework dashboard which includes advanced features like CI/CD, monitoring, metrics, etc.

```
$ serverless login
$ serverless deploy
```

### Invocation

After successful deployment, you can call the created application via HTTP:

```bash
curl https://xxxxxxx.execute-api.us-east-2.amazonaws.com/dev/
```

Which should result in response similar to the following (removed `input` content for brevity):

```json
{
  "message": "Hello world, this is Carlos and this function was executed successfully!"  
}
```

### Local development

You can invoke your function locally by using the following command:

```bash
serverless invoke local --function hello
```

Which should result in response similar to the following:

```
{
  "statusCode": 200,
  "body": "{\n  \"message\": \"Go Serverless v2.0! Your function executed successfully!\",\n  \"input\": \"\"\n}"
}
```

Or you can run it with this command:

```
serverless offline
```
