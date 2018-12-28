# Setup the Amazon DynamoDB Table

Create a new Amazon DynamoDB Table that will hold the state of the virtual switch.

## Create a SampleSmartHome Table

1. Navigate to the Amazon DynamoDB Tables Console at https://console.aws.amazon.com/dynamodb/home?region=us-east-1#tables.
2. Click the **Create table** button.
3. For the **Table name**, enter `SampleSmartHome`.
4. For the **Primary key**, enter `ItemId`.
5. Click the **Create** button to create the table.

> It may take a moment for the table to be created. 


Next [Deploy the Sample Code](deploy-the-sample-code.md)

Return to the [Instructions](README.md)