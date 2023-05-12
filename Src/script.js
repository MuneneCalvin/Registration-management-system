// Initialize user data array
let users = [];

// Add submit event listener to form
document.getElementById('user-form').addEventListener('submit', function(event) {
    event.preventDefault();

// Get form values
    let firstname = document.getElementById('firstname').value;
    let lastname = document.getElementById('lastname').value;
    let idNumber = document.getElementById('id-number').value;
    let country = document.getElementById('country').value;
    let languages = Array.from(document.getElementById('languages').selectedOptions).map(option => option.value);

  //    Create new user object
    let user = {
    first_name: firstname,
    last_name: lastname,
    idNumber: idNumber,
    country: country,
    languages: languages
};

  // Add user to array
    users.push(user);

    // Clear form inputs
    document.getElementById('firstname').value = '';
    document.getElementById('lastname').value = '';
    document.getElementById('id-number').value = '';
    document.getElementById('country').selectedIndex = 0;
    Array.from(document.getElementById('languages').options).forEach(option => option.selected = false);

  // Update user table
    updateTable();
});

// Function to update user table
function updateTable() {
  // Get table body element
let tbody = document.getElementById('user-table').getElementsByTagName('tbody')[0];

  // Clear existing rows
    tbody.innerHTML = '';

  // Loop through users array and add rows to table
for (let i = 0; i < users.length; i++) {
    let user = users[i];
    
    // Create table row
    let row = document.createElement('tr');
    
    // Add columns to row
    let nameCol1 = document.createElement('td');
    nameCol.textContent = user.firstname;
    row.appendChild(nameCol1);
    let nameCol2 = document.createElement('td');
    nameCol.textContent = user.lastname;
    row.appendChild(nameCol2)

    
    let idNumberCol = document.createElement('td');
    idNumberCol.textContent = user.idNumber;
    row.appendChild(idNumberCol);
    
    let countryCol = document.createElement('td');
    countryCol.textContent = user.country;
    row.appendChild(countryCol);

    let languagesCol = document.createElement('td');
    languagesCol.textContent = user.languages.join(', ');
    row.appendChild(languagesCol);

    // Add row to table
    tbody.appendChild(row);
    }
}
