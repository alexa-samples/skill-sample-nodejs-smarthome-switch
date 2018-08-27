# Setup the Sample Resources

To complete this sample, check for the required accounts and tools as well as prepare a setup scratch file to store configuration variables.

## Check for the Required Accounts

To work with this sample, you will need both an Amazon Developer account and an Amazon Web Services account.

* An [Amazon Developer](https://developer.amazon.com/) account. This is required to create and configure Alexa skills.
* An [Amazon Web Services (AWS)](https://aws.amazon.com/) account. This is required to host the skill logic in an AWS Lambda function.

## Create a Working Directory

Create a folder on your computer Desktop called `working-smarthome`. This folder will store the code and configuration files needed to complete the sample.

## Copy the Setup Configuration File

The `setup.txt` configuration file is used to store IDs and other values during configuration of the environment.

1. Either download https://raw.githubusercontent.com/alexa/skill-sample-nodejs-smarthome-switch/master/instructions/setup.txt into the `working-smarthome` folder or create your own setup.txt file in that directory and copy the contents outlined in the next step.
2. Open and review the `setup.txt` file. The file should contain:

```
[Login with Amazon Client ID]
amzn1.application-oa2-client.XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

[Login with Amazon Client Secret]
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

[Alexa Skill Application ID]
amzn1.ask.skill.XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX

[AWS Lambda ARN]
arn:aws:lambda:us-east-1:XXXXXXXXXXXX:function:skill-sample-language-smarthome-switch

[Redirect URLs]
https://pitangui.amazon.com/api/skill/link/XXXXXXXXXXXXXX
https://layla.amazon.com/api/skill/link/XXXXXXXXXXXXXX
https://alexa.amazon.co.jp/api/skill/link/XXXXXXXXXXXXXX
```

These placeholders represent the configuration entities to be collected for the sample environment.


> Keep secrets safe. If a Client Secret is compromised or needs to be reset, you will have to discard the secret and regenerate the Client ID and Secret again or recreate the profile. This will immediately sever the existing access relationships and customers will have to re-authenticate or re-link their account or skill.



## Install Optional Tools

The use of these tools is optional as they are useful, but not required.

### **Git**

Git 2.0 or greater is required only if you want to clone the source code locally. At a command line, you can verify if git is installed by running the command:

```
git --version
```

If it is not properly installed or is not a version greater than 2.0, visit https://git-scm.com/downloads to download and install a version for your platform.


### **Alexa Skills Kit Command Line Interface (ASK CLI)**

This ASK CLI can be used to create, deploy, and maintain a Alexa skills. If you have the ASK CLI installed already you can can verify its version by running the command:

```
ask --version
```

For the purposes of this sample, the ask version should be 1.3.1 or greater.

If you do not have the ASK CLI installed or need to update to a version greater than 1.3, follow the [Quick Start Alexa Skills Kit Command Line Interface (ASK CLI) instructions](https://developer.amazon.com/docs/smapi/quick-start-alexa-skills-kit-command-line-interface.html).

Next [Get the Sample Source Code](get-the-sample-source-code.md)

Return to the [Instructions](README.md)