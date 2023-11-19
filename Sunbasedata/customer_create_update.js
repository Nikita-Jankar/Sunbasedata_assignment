document.getElementById('createUpdateForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const customerData = {
      first_name: document.getElementById('firstName').value,
      last_name: document.getElementById('lastName').value,
      street: document.getElementById('street').value,
      address: document.getElementById('address').value,
      city: document.getElementById('city').value,
      state: document.getElementById('state').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value,
    };
    const existingData = sessionStorage.getItem('customerData');
    const allCustomers = existingData ? JSON.parse(existingData) : [];
    allCustomers.push(customerData);
    sessionStorage.setItem('customerData', JSON.stringify(allCustomers));
    window.location.href = 'customer_list.html';
  });
  
  document.getElementById('backButton').addEventListener('click', function () {
    window.location.href = 'customer_list.html';
  });