document.getElementById("btn1").addEventListener("click", addStudent);

function addStudent() {
    let name = document.getElementById("name").value;
    let city = document.getElementById("city").value;
    let fee = document.getElementById("fee").value;

    let api = "http://localhost:3000/students";
    fetch(api, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: name,
            city: city,
            fee: fee
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to add student');
            }
            alert("Student added successfully");
            return response.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error(error);
        });
}
