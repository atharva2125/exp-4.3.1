document.addEventListener("DOMContentLoaded", function() {
    const orderDetailsForm = document.getElementById('orderDetails');
    const receiptDiv = document.getElementById('receipt');

    orderDetailsForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('Name').value.trim();
        const email = document.getElementById('email').value.trim();
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const phone = document.getElementById('phone').value.trim();
        const address = document.getElementById('address').value.trim();
        const tagline = document.getElementById('tagline').value.trim();
        const quantity = document.getElementById('quantity').value.trim();

        const isValidEmail = emailPattern.test(email);
        const isNumericQuantity = !isNaN(quantity) && quantity > 0;
        const isValidPhone = phone.length === 10 && !isNaN(phone);

        if (tagline === "") {
            alert("Tagline must be filled out");
            return false;
        }
        if (name === "") {
            alert("Name must be filled out");
            return false;
        }
        if (address === "") {
            alert("Address must be filled out");
            return false;
        }
        if (!isValidEmail) {
            alert("Email address must be valid");
            return false;
        }
        if (!isNumericQuantity) {
            alert("Quantity must be filled out and greater than 0");
            return false;
        }
        if (!isValidPhone) {
            alert("Phone number must be exactly 10 digits");
            return false;
        }

        alert('Order Placed successfully.');
        generateReceipt();
    });

    function generateReceipt() {
        receiptDiv.innerHTML = '';

        const currentDate = new Date().toLocaleDateString('en-IN');

        const name = document.getElementById('Name').value.trim();
        const address = document.getElementById('address').value.trim(); 
        const tagline = document.getElementById('tagline').value.trim();
        const size = document.getElementById('size').value;

        const receiptContent = `
            <h2>Order Receipt</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Address:</strong> ${address}</p>
            <p><strong>Tagline:</strong> ${tagline}</p>
            <p><strong>Size:</strong> ${size}</p>
            <p><strong>Date:</strong> ${currentDate}</p>
        `;
        receiptDiv.innerHTML = receiptContent;
    }
});