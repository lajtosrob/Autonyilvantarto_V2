let carsArray = [];
let carData = {};
let newCarsArray = [];
let id = 1;
let tableHead = "<tr><th>Car ID</th><th>Car Type</th><th>Year of manufacture</th></tr>";
document.getElementById("table").innerHTML = tableHead;

function upload() {

    let carType = document.getElementById("carType").value;
    let carYear = document.getElementById("carYear").value;
    if (carType == "" || isNaN(parseInt(document.getElementById("carYear").value)) || carYear < 1900 || carYear > 2023) {
        alert("Hibás, hiányos adat!");
        document.getElementById("carYear").value = "";
        return;
    }
    else {
        carData = {
            id: id,
            carType: carType,
            carYear: carYear
        }

        carsArray.push(carData);
        document.getElementById("table").innerHTML += "<tr><td>" + id + "</td><td>" + carData.carType + "</td><td>" + carData.carYear + "</td></tr>";
        id++;
        document.getElementById("carType").value = "";
        document.getElementById("carYear").value = "";
    }
    console.log(carsArray.length);

}

function emptyCarList() {
    document.getElementById("table").innerHTML = tableHead;
    carsArray = [];
    id = 1;
}

function deleteCar() {
    var deleteCars = document.getElementById("delete-car").value;
    if (deleteCars < 1 || deleteCars > carsArray.length || isNaN(deleteCars)) {
        alert("Nem megfelelő vagy hibás adat!");
        document.getElementById("delete-car").value = "";
        return;
    }
    else {
        for (var index = 0; index < carsArray.length; index++) {
            if (carsArray[index].id != deleteCars) {
                newCarsArray.push(carsArray[index]);
            }
        }
        carsArray = newCarsArray;
        displayList();
    }
}


function displayList() {
    document.getElementById("table").innerHTML = tableHead;
    carsArray.forEach(listItem => {
        document.getElementById("table").innerHTML += "<tr><td>" + listItem.id + "</td><td>" + listItem.carType + "</td><td>" + listItem.carYear + "</td></tr>";
    });

    console.log(carsArray.length);
}

