# Review the Skill Logs

Interactions between Alexa and the AWS Lambda function are recorded in AWS CloudWatch. Those logs are useful for investigating what information is sent back and forth to the Lambda function.

## Review the logs on CloudWatch

1. Browse to https://us-east-1.console.aws.amazon.com/cloudwatch/home?region=us-east-1#logStream:group=/aws/lambda/skill-sample-nodejs-smarthome-switch
2. Click the latest **Log Stream** and review the *Messages*.
3. Note the values recorded in the logs. The inbound handler **request** and **context** values are from Alexa. The outbound handler **response** value is from the Lambda function.


Congratulations, if you have made it this far you have a working sample!

Return to the [Instructions](README.md)