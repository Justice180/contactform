# Form Validation Project

This is a simple form validation project built using JavaScript. It allows users to submit a contact form while validating all the necessary fields such as **First Name**, **Last Name**, **Email**, **Message**, **Checkboxes**, and **Consent**. Upon successful validation, a success message is displayed.

## Features

- **First Name & Last Name**: Validates that the names are between 2 and 20 alphabetic characters.
- **Email**: Validates a standard email format using regex.
- **Message**: Ensures the message is at least 5 characters long.
- **Checkboxes**: Ensures at least one checkbox is selected.
- **Consent**: Requires the user to check the consent box before submission.
- **Alert System**: Displays a success message when the form is submitted successfully.
- **Form Reset**: Resets the form after a successful submission.

## Technologies Used

- **HTML**: Basic structure of the form.
- **CSS**: Styling for the form and invalid inputs.
- **JavaScript**: For form validation and handling user interactions.

## How to Use

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/your-username/form-validation.git
Open the index.html file in your browser.

Fill out the form and test the validation. The form will show an alert if any fields are invalid.

Once all fields are valid, the form will show a success message and reset the form.

Example Usage
Enter valid First Name, Last Name, and Email.

Write a message that is at least 5 characters long.

Select one or more checkboxes.

Ensure the Consent checkbox is checked.

Press the Submit button.

Once all validations pass, a success message will appear with the text:

Message Sent
Thanks for contacting the team. We'll be in touch soon.
Customization
You can modify the validation rules according to your needs:

Change the regex patterns for First Name, Last Name, and Email.

Adjust the minimum message length requirement.

License
This project is open-source and available under the MIT License.
