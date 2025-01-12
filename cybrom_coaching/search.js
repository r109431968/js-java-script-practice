document.getElementById("search-link").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("search-box").style.display = "block";
});

document.getElementById("search-btn").addEventListener("click", function() {
    const query = document.getElementById("search").value;
    const studentList = document.getElementById("student-list");

    studentList.innerHTML = "";

    if (!query) {
        studentList.innerHTML = "<p>Please enter an ID to search.</p>";
        return;
    }

    const api = "http://localhost:3000/students";
    fetch(api)
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }
            return response.json();
        })
        .then(data => {
            const filteredStudents = data.filter(student =>
                student.id.toString().includes(query)
            );

            if (filteredStudents.length === 0) {
                studentList.innerHTML = "<p>No matching records found.</p>";
                return;
            }

            const table = document.createElement("table");
            table.border = "1";

            const headerRow = table.insertRow();
            ["ID", "Name", "City", "Fees"].forEach(header => {
                const th = document.createElement("th");
                th.textContent = header;
                headerRow.appendChild(th);
            });

            filteredStudents.forEach(student => {
                const row = table.insertRow();
                row.insertCell(0).textContent = student.id;
                row.insertCell(1).textContent = student.name;
                row.insertCell(2).textContent = student.city;
                row.insertCell(3).textContent = student.fee;
            });

            studentList.appendChild(table);
        })
        .catch(error => {
            studentList.innerHTML = `<p>Error: ${error.message}</p>`;
        });
});
