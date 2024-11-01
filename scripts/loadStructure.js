// Function to fetch and convert CSV data to JSON
async function fetchCSVandConvertToJSON() {
  try {
    const response = await fetch("./data/structure.csv");
    const csvData = await response.text();

    // Split into rows and headers
    const [headerRow, ...rows] = csvData.trim().split("\n");
    const headers = headerRow.split(",");

    // Convert rows to JSON objects
    const jsonData = rows.map((row) => {
      const values = row.split(",");
      const obj = {};
      headers.forEach((header, i) => {
        obj[header.trim()] = values[i].trim();
      });
      return obj;
    });

    return jsonData;
  } catch (error) {
    console.error("Error fetching or converting CSV:", error);
    return [];
  }
}

// Function to build and display the table
async function displayWinningStructure() {
  const data = await fetchCSVandConvertToJSON();
  if (data.length === 0) return;

  const contentDiv = document.getElementById("structure-content");
  const table = document.createElement("table");

  // Specify desired column order with 'Player Type' first
  const columnOrder = ["Player Type", "2023", "2022", "2021", "2020"];

  // Create table header
  const headerRow = document.createElement("tr");
  columnOrder.forEach((key) => {
    const th = document.createElement("th");
    th.textContent = key;
    headerRow.appendChild(th);
  });
  table.appendChild(headerRow);

  // Create table rows
  data.forEach((row) => {
    const tableRow = document.createElement("tr");
    columnOrder.forEach((key) => {
      const td = document.createElement("td");
      td.textContent = row[key];
      tableRow.appendChild(td);
    });
    table.appendChild(tableRow);
  });

  // Append table to content div
  contentDiv.appendChild(table);
}
