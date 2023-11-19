
  document.addEventListener('DOMContentLoaded', function () {
    const loggedIn = sessionStorage.getItem('loggedIn');
    if (loggedIn !== 'true') {
      window.location.href = 'login.html';
    }
  
    function getCustomerData() {
      const data = sessionStorage.getItem('customerData');
      return data ? JSON.parse(data) : [];
    }
  
    function saveCustomerData(data) {
      sessionStorage.setItem('customerData', JSON.stringify(data));
    }
  
    function generateCustomerRow(customer, index) {
      const newRow = document.createElement('tr');
      newRow.innerHTML = `
        <td>${customer.first_name}</td>
        <td>${customer.last_name}</td>
        <td>${customer.street}</td>
        <td>${customer.address}</td>
        <td>${customer.city}</td>
        <td>${customer.state}</td>
        <td>${customer.email}</td>
        <td>${customer.phone}</td>
        <td>
          <button id="editButton${index}">Edit</button>
          <button id="deleteButton${index}">Delete</button>
        </td>
      `;
      return newRow;
    }
  
    function editCustomer(index) {
      window.location.href = `customer_create_update.html?editIndex=${index}`;
    }
  
    function deleteCustomer(index) {
      const confirmDelete = confirm("Are you sure you want to delete this customer?");
      if (confirmDelete) {
        const customerData = getCustomerData();
        customerData.splice(index, 1);
        saveCustomerData(customerData);
        populateCustomerList();
      }
    }
  
    function populateCustomerList() {
      const customerData = getCustomerData();
      const customerList = document.getElementById('customerList').querySelector('tbody');
      customerList.innerHTML = '';
  
      customerData.forEach((customer, index) => {
        const newRow = generateCustomerRow(customer, index);
        customerList.appendChild(newRow);
      });
    }
    populateCustomerList();
  
    document.getElementById('addNewButton').addEventListener('click', function () {
      window.location.href = 'customer_create_update.html';
    });
  
    document.getElementById('logoutButton').addEventListener('click', function () {
      sessionStorage.removeItem('loggedIn');
      sessionStorage.removeItem('customerData');
      window.location.href = 'login.html';
    });
  });

    
  













    


  