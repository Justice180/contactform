document.querySelector('.firstname-input').addEventListener('blur', validateFirstName);
document.querySelector('.lastname-input').addEventListener('blur', validateLastName);
document.querySelector('.email-input').addEventListener('blur', validateEmail);
document.querySelector('.message').addEventListener('blur', validateMessage);
document.querySelector('.my-checkbox').addEventListener('blur', validateCheckBoxes)
document.querySelector('.consent').addEventListener('blur', validateConsentBox);

//Add Event Listener
document.querySelector('.button').addEventListener('click', submitForm);

//Inputs Validation
function validateFirstName() {
    const firstName = document.querySelector('.firstname-input');
    const re = /^[a-zA-Z]{2,20}$/;

    if (!re.test(firstName.value.trim())) {
        firstName.classList.add('is-invalid');
        return false;
    } else {
        firstName.classList.remove('is-invalid');
        return true;
    }
}

function validateLastName() {
    const lastname = document.querySelector('.lastname-input');
    const re = /^[a-zA-Z]{2,20}$/;

    if (!re.test(lastname.value.trim())) {
        lastname.classList.add('is-invalid');
        return false;
    } else {
        lastname.classList.remove('is-invalid');
        return true;
    }
}

function validateEmail() {
    const email = document.querySelector('.email-input');
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

    if (!re.test(email.value.trim())) {
        email.classList.add('is-invalid');
        return false;
    } else {
        email.classList.remove('is-invalid');
        return true;
    }
}

function validateMessage() {
    const message = document.querySelector('.message');

    if (message.value.trim().length < 5) {
        message.classList.add('is-invalid');
        return false;
    } else {
        message.classList.remove('is-invalid');
        return true;
    }
}

function validateCheckBoxes() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const check = document.querySelector('.my-checkbox')
    let isChecked = false;

    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            isChecked = true;
        }
    });

    if (!isChecked) {
        check.classList.add('is-invalid')
    } else {
        check.classList.remove('is-invalid')
    }
}

function validateConsentBox() {
    const consent = document.querySelector('.consent'); 
    let isChecking = consent.checked; // Check if the checkbox is checked
  
    if (isChecking) {
      consent.classList.remove('is-invalid');
      return true; // Valid
    } else {
      consent.classList.add('is-invalid');
      return false; // Invalid
    }
}
  
// Form Submission
function submitForm(e) {
    e.preventDefault(); // Prevent default form submission

    const firstNameValid = validateFirstName();
    const lastNameValid = validateLastName();
    const emailValid = validateEmail();
    const messageValid = validateMessage();
    const checkboxValid = validateCheckBoxes()
    const consentValid = validateConsentBox();

    if (!firstNameValid || !lastNameValid || !emailValid || !messageValid || !consentValid) {
        return; // Stop form submission
    } else{
        // Select the element where the alert message will be displayed
        const alertInfo = document.querySelector('.alert-info');

        // Clear any existing alert
        const currentAlert = document.querySelector('.alert');
        if (currentAlert) {
        currentAlert.remove();
        }

        // Create a new div element for the alert
        const div = document.createElement('div');

        // Add multiple classes to the div
        div.classList.add('alert', 'alert-message', 'alert-success');

        // Set the inner HTML of the div
        div.innerHTML = `
        <i class="fa fa-circle-check"></i> Message Sent
        <p>Thanks for contacting the team. We'll be in touch soon.</p>
        `;

        // Select the parent container
        const container = document.querySelector('.messageContainer');

        // Select the reference element before which the new div will be inserted                                   
        const card = document.querySelector('.card');

        container.insertBefore(div, card)

        setTimeout(() => {
        div.remove()
        }, 3000)

        document.getElementById('form').reset()
    }
}