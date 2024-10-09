let studentData = [];

// Fetch data from the JSON file (replace 'data.json' with your JSON file path)
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        studentData = data;  // Store data for later search use
    })
    .catch(error => console.error('Error loading data:', error));

// Function to search by PRN and display results
function searchByPRN() {
    const prnInput = document.getElementById('prnInput').value.trim();
    const tableBody = document.querySelector('#resultsTable tbody');
    tableBody.innerHTML = ''; // Clear previous results

    const filteredData = studentData.filter(student => student.column_2 && student.column_2.toString().includes(prnInput));

    if (filteredData.length === 0) {
        alert("No student found with this PRN");
        return;
    }

    // Display the table if results are found
    document.getElementById('resultsTable').style.display = 'table';

    // Populate table with search results
    filteredData.forEach(student => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${student.column_0 || ''}</td>
            <td>${student["Dr. Babasaheb Ambedkar Technological University "] || ''}</td>
            <td>${student.column_2 || ''}</td>
            <td>${student.column_3 || ''}</td>
            <td>${student.column_4 || ''}</td>
            <td>${student.column_5 || ''}</td>
            <td>${student.column_6 || ''}</td>
            <td>${student.column_7 || ''}</td>
            <td>${student.column_8 || ''}</td>
            <td>${student.column_10 || ''}</td>
            <td>${student.column_11 || ''}</td>
        `;
        
        tableBody.appendChild(row);
    });
}
