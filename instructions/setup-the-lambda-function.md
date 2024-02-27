# Setup the Lambda Function

Create a new AWS Lambda function that will handle the Smart Home directives from Alexa.

## Create a Policy for the Lambda Function

1. Navigate to the IAM Management Console policies at https://console.aws.amazon.com/iam/home?region=us-east-1#/policies.
2. Click the **Create policy** button.
3. Select the *JSON* tab and then copy & paste the following policy into the text area:

	```
	{
	    "Version": "2012-10-17",
	    "Statement": [
	        {
	            "Effect": "Allow",
	            "Action": [
	                "logs:CreateLogStream",
	                "dynamodb:UpdateItem",
	                "logs:CreateLogGroup",
	                "logs:PutLogEvents"
	            ],
	            "Resource": "*"
	        }
	    ]
	}
	```

4. Click the **Review policy** button.
5. In the *Review policy* section, set the **Name** of the policy to `skill-sample-smarthome-switch`.
6. Click the **Create policy** button to create the policy.

## Create a Lambda Execution Role

1. Navigate to the IAM Management Console roles at https://us-east-1.console.aws.amazon.com/iam/home?region=us-east-1#/roles.
2. Click the **Create Role** button.
3. On the *Create role* page, select **AWS Service** for the type of trusted entity and then select **Lambda** from the list of services.
4. Click the **Next: Permissions** button.
5. When prompted to *Attach permissions policies*, filter and find the previously create *skill-sample-smarthome-switch* policy and select its check box.
6. Click the **Next: Review** button.
7. In the *Review* section, set the **Role name** to `lambda_skill_sample_smarthome_switch`.
8. Click **Create role** to create the execution role. 


## Create a Lambda Function

1. Navigate to the AWS Lambda console at https://us-east-1.console.aws.amazon.com/lambda/home?region=us-east-1.
2. Verify you are in N. Virginia (us-east-1).
3. Click on the **Create function** button to start creating an AWS Lambda function.
4. On the *Create function* page, select the **Author from scratch** option.
5. For the Name of the function, enter `skill-sample-nodejs-smarthome-switch`.
6. For the Runtime, select **Node.js 12.x**.
7. Choose an existing role and select *lambda\_skill\_sample\_smarthome\_switch* from the **Existing Role** options.
8. Click the **Create function** button to create the AWS Lambda function.
9. From the Lambda function page, copy the ARN from the top right of the page and save it into the `setup.txt` file in the [AWS Lambda ARN] section. The ARN should look something like: `arn:aws:lambda:us-east-1:XXXXXXXXXXXX:function:skill-sample-language-smarthome-switch`

## Add a Smart Home Trigger to the Lambda Function

1. On the Lambda function page for `skill-sample-nodejs-smarthome-switch`, select the *Configuration* tab if not already selected. Optionally, you can browse to https://us-east-1.console.aws.amazon.com/lambda/home?region=us-east-1#/functions/skill-sample-nodejs-smarthome-switch?tab=triggers. Note the *Add triggers* section on the left menu. This part of the designer allows you to add triggers to your Lambda function.
2. In the *Configuration* tab, select **Alexa Smart Home** from the left menu and it should be added to the `skill-sample-nodejs-smarthome-switch` function as a trigger. The Alexa Smart Home trigger will report "Configuration required" until the corresponding Alexa Skill Application ID is entered as part of the configuration.
3. Select the **Alexa Smart Home - Configuration required** box and locate the *Configure triggers* section at the bottom of the page. Paste the Alexa Skill Application ID value from the setup.txt file [Alexa Skill Application ID] section into the Application ID text box. The Alexa Skill Application ID should look something like: `amzn1.ask.skill.XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX`
4. Verify **Enable trigger** checkbox is checked and then click **Add**.
5. The added trigger will have unsaved changes, to finish enabling the trigger, click **Save** for the function at the top right of the page. Once saved, the Alexa Smart Home trigger should report and ID and be associated with the Alexa Skill Application ID.


Next [Configure the Skill](configure-the-skill.md)

Return to the [Instructions](README.md)
