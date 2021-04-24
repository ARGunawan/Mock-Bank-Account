WebDev-Assignment-7

Link to the deployed website: (*Insert the link here when the github pages website is deployed*)

Contributors:
Alfonso Gunawan, James Yoo, Caitlin-Dawn Sangcap, Ifte Ahmed

React Router App Project:
- Linked API's to React Router
- Add more features to the banking app (see below). You will need to access the following API endpoints:

The Debits index endpoint is located at https://moj-api.herokuapp.com/debits
The Credits index endpoint is located at https://moj-api.herokuapp.com/credits
 
 Instructions:
 Add the following methods to the app:
 - Updating the Account Balance
 - Adding Debits
 - Adding Credits
 
 Example for each method below
 
Updating the Account Balance:
------------------------------------------------------------------------------------------------------------------
Making the Account Balance dynamic:

GIVEN I am on any page displaying the Account Balance
WHEN I view the Account Balance display area
THEN I should see an Account Balance that accurately represents my Debits subtracted from my Credits
AND I should be able to see a negative account balance if I have more Debits than Credits


Viewing the Debits page:
-----------------------------------------------------------------------------------------------------------------
GIVEN I am on the Home Page
WHEN I click on 'Debits'
THEN I should be redirected to the Debits page
AND I should see a title of 'Debits' on the page
Displaying debits:

GIVEN I am on the Debits page
WHEN I view the Debits display area
THEN I should see all of my debits displayed
AND each Debit should display a Debit description
AND each Debit should display a Debit amount
AND each Debit should display a Debit date
Viewing the Account Balance on the Debits page:

GIVEN I am on the Debits page
WHEN I view the Account Balance display area
THEN I should see my Account Balance displayed
Adding debits:

GIVEN I am on the Debits page
WHEN I enter a new Debit description
AND WHEN I enter a new Debit amount
AND WHEN I click 'Add Debit'
THEN I should see my new debit added to the Debits display area with the current date
AND I should see my Account Balance updated to reflect the new Debit
Viewing the Account Balance on the Debits page:

GIVEN I am on the Debits page
WHEN I view the Account Balance display area
THEN I should see my Account Balance displayed



Adding Credits
------------------------------------------------------------------------------------------------------------------
Viewing the Credits page:

GIVEN I am on the Home Page
WHEN I click on 'Credits'
THEN I should be redirected to the Credits page
AND I should see a title of 'Credits' on the page
Displaying debits:

GIVEN I am on the Credits page
WHEN I view the Credits display area
THEN I should see all of my Credits displayed
AND each Credit should display a Credit description
AND each Credit should display a Credit amount
AND each Credit should display a Credit date
Viewing the Account Balance on the Credits page:

GIVEN I am on the Credits page
WHEN I view the Account Balance display area
THEN I should see my Account Balance displayed
Adding Credits:

GIVEN I am on the Credits page
WHEN I enter a new Credit description
AND WHEN I enter a new Credit amount
AND WHEN I click 'Add Credit'
THEN I should see my new credit added to the Credits display area with the current date
AND I should see my Account Balance updated to reflect the new Credit
Viewing the Account Balance on the Credits page:

GIVEN I am on the Credits page
WHEN I view the Account Balance display area
THEN I should see my Account Balance displayed
