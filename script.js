// Validate form input
function validateForm () {
    var name = document.getElementById("name").value;
    var id = document.getElementById("id-number").value;
    var country = document.getElementById("country").value;
    var language = document.getElementById("language").value;

    if (name == "") {
        alert("Names are required");
        return false;
    }
    if (id == "") {
        alert ("ID No. is required");
        return false;
    }
    else if (id < 0) {
        alert ("iD must be a positive number");
    }
    if (language == "") {
        alert("Language is required");
        return false;
    }
    return true;
}

// Function to show data from local storage
function showData () {
    var peoplelist;
    if (localStorage.getItem("peoplelist") == null) {
        peoplelist = [];
    }
    else {
        peoplelist = JSON.parse(localStorage.getItem("peoplelist"));
    }
    var html = "";

    peoplelist.forEach (function (element, index) {
        html += "<tr>";
        html += "<td>" + element.name + "</td>";
        html += "<td>" + element.id + "</td>";
        html += "<td>" + element.country + "</td>";
        html += "<td>" + element.language + "</td>";
        html +=
            "<td><button onclick='editData(" + 
            index +
            ")' class='btn btn-warning m-2'>Edit</button><button onclick='deleteData(" +
            index +
            ")' class='btn btn-danger'>Delete</button></td>";
        html += "</tr>";
    });

    document.querySelector("#crudTable tbody").innerHTML = html;
}

//  Loads all data from local 
document.onload = showData();

// Function to add data to local storage
function AddData () {
    if (validateForm () == true) {
        var name = document.getElementById("name").value;
        var id = document.getElementById("id-number").value;
        var country = document.getElementById("country").value;
        var language = document.getElementById("language").value;

        var peoplelist;
        if (localStorage.getItem("peoplelist") == null) {
            peoplelist = [];
        }
        else {
            peoplelist = JSON.parse(localStorage.getItem("peoplelist"));
        }

        var person = {
            name: name,
            id: id,
            country: country,
            language: language,
        };

        peoplelist.push(person);
        localStorage.setItem("peoplelist", JSON.stringify(peoplelist));
        showData();
        clearData();

        document.getElementById("name").value = '';
        document.getElementById("id-number").value = '';
        document.getElementById("country").value = '';
        document.getElementById("language").value = '';
    }
}

// Function to clear data from form
function deleteData(index) {
    var peoplelist;
    if (localStorage.getItem ("peoplelist") == null) {
        peoplelist = [];
    } else {
        peoplelist = JSON.parse(localStorage.getItem ("peoplelist"));
    }
    peoplelist.splice (index, 1);
    localStorage.setItem ("peoplelist", JSON.stringify (peoplelist));
    showData ();
}

// function to update/edit data
function editData(index) {
    document.getElementById("Submit").style.display = "none";
    document.getElementById("Edit").style.display = "block";

    var peoplelist;
    if (localStorage.getItem("peoplelist") == null) {
        peoplelist = [];
    } else {
        peoplelist = JSON.parse(localStorage.getItem("peoplelist"));
    }

    document.getElementById("name").value = peoplelist[index].name;
    document.getElementById("id-number").value = peoplelist[index].id;
    document.getElementById("country").value = peoplelist[index].country;
    document.getElementById("language").value = peoplelist[index].language;

    document.querySelector(Update).onclick = function () {
        if (validateForm () == true) {
        peoplelist[index].name = document.getElementById("name").value;
        peoplelist[index].id = document.getElementById("id-number").value;
        peoplelist[index].country = document.getElementById("country").value;
        peoplelist[index].language = document.getElementById("language").value;
        }

        localStorage.setItem("peoplelist", JSON.stringify(peoplelist));
        showData();
        clearData();

        document.getElementById("name").value = '';
        document.getElementById("id-number").value = '';
        document.getElementById("country").value = '';
        document.getElementById("language").value = '';

        document.getElementById("Submit").style.display = "block";
        document.getElementById("Update").style.display = "none";
    }
}