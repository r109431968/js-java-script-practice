let api = "http://localhost:3000/students";
document.getElementById("display-link").addEventListener("click", (event) => {
    event.preventDefault();
    const studentList = document.getElementById("student-list");

    studentList.innerHTML = "";

    fetch(api)
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }
            return response.json();
        })
        .then(data => {
            if (data.length === 0) {
                studentList.innerHTML = "<p>No student records found.</p>";
                return;
            }

            const table = document.createElement("table");
            table.border = "1";

            const headerRow = table.insertRow();
            ["ID", "Roll No", "Name", "City", "Fees", "Actions"].forEach(header => {
                const th = document.createElement("th");
                th.textContent = header;
                headerRow.appendChild(th);
            });

            data.forEach(student => {
                const row = table.insertRow();
                row.insertCell(0).textContent = student.id;
                row.insertCell(1).textContent = student.rollno;
                row.insertCell(2).textContent = student.name;
                row.insertCell(3).textContent = student.city;
                row.insertCell(4).textContent = student.fee;

                const actionCell = row.insertCell(5);

                const editButton = document.createElement("button");
                editButton.textContent = "Edit";
                editButton.addEventListener("click", () => {
                    handleEdit(student);
                });

                const deleteButton = document.createElement("button");
                deleteButton.textContent = "Delete";
                deleteButton.addEventListener("click", () => {
                    handleDelete(student.id);
                });

                actionCell.appendChild(editButton);
                actionCell.appendChild(deleteButton);
            });

            studentList.appendChild(table);
        })
        .catch(error => {
            studentList.innerHTML = `<p>Error: ${error.message}</p>`;
        });
});

function handleEdit(student) {
    alert(`ID : ${student.id}, RollNo : ${student.rollno}, Name : ${student.name}, City : ${student.city}, Fee : ${student.fee}`);
}

function handleDelete(studentId) {
    const confirmDelete = confirm(`Are you sure you want to delete student with ID: ${studentId}?`);
    if (confirmDelete) {
        fetch(`${api}/${studentId}`, { method: "DELETE" })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Failed to delete student");
                }
                alert("Student deleted successfully");
                document.getElementById("display-link").click();
            })
            .catch(error => {
                alert(`Error: ${error.message}`);
            });
    }
}
