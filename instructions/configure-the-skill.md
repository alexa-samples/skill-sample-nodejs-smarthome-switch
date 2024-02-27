# Configure the Skill

Configure the Alexa Smart Home skill and fill out the required settings.

## Configure the Smart Home settings

1. Return to the Alexa Skills Kit Developer Console at https://developer.amazon.com/alexa/console/ask and open your skill-sample-nodejs-smarthome-switch skill.
2. On the *SMART HOME* tab, leave the Payload version at v3.
3. For the *Smart Home service endpoint*, enter the ARN saved in your `setup.txt` file as [AWS Lambda ARN] into the *Default endpoint* field. The ARN should look something like: `arn:aws:lambda:us-east-1:XXXXXXXXXXXX:function:skill-sample-language-smarthome-switch`
4. Click **Save**. If you get an error stating “Failed to save skill information, Please make sure that "Alexa Smart Home" is selected for the event source type...” return to your AWS Lambda for the *skill-sample-nodejs-smarthome-switch* function and verify you correctly set and saved the Smart Home trigger.

## Configure the Account Linking settings

1. Either select the *ACCOUNT LINKING *tab on the left or the **Setup Account Linking** button at the bottom of the page.
2. On the *Account Linking* page, for the *Authorization URI*, enter `https://www.amazon.com/ap/oa`.
3. For the Access Token URI, enter `https://api.amazon.com/auth/o2/token`.
4. For the Client ID, copy and paste the previously saved [Login with Amazon Client ID] value from the `setup.txt` file.
5. For the Client Secret, copy and paste the previously saved [Login with Amazon Client Secret] value from the `setup.txt` file.
6. Under *Scope*, click the **+ Add scope** link and then add the following scope into the text box: `profile:user_id`
7. Copy the three (3) redirect urls from the Redirect URLs section and save them to the [Redirect URLs] section of the `setup.txt` file.
8. Click **Save**.

## Set the Allowed Return URLs

Using your account-specific values from the skill configuration section, collect the Redirect URLs and set them in the *Security Profile Web Settings* **Allowed Return URLs**.

1. Open https://developer.amazon.com/iba-sp/overview.html in another browser tab and make sure *Settings* is selected in the top menu and *Security Profiles* is selected in the sub menu.
2. Select the **Smart Home Sample** Security Profile.
3. On the *Security Profile Management* page, select the **Web Settings** tab.
4. In the *Web Settings*, click the **Edit** button.
5. In the Allowed Return URLs text input, add each of the saved Redirect URLs from the `setup.txt` file. You will need to click the **Add Another** link to add each Return/Redirect URL. Each of the Return/Redirect URLs will have a format similar to `https://pitangui.amazon.com/api/skill/link/XXXXXXXXXXXXXX`
6. Click **Save**.


Next [Setup the DynamoDB Table](setup-the-dynamodb-table.md)

Return to the [Instructions](README.md)
