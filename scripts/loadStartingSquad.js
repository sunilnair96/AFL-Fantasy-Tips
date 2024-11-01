// Function to load the Starting Squad Blueprint data
async function loadStartingSquad() {
  try {
    const response = await fetch("./data/startingSquadBluePrint.csv");
    const data = await response.text();

    const rows = data.split("\n").slice(1); // Skip header row
    const squadData = rows
      .map((row) => {
        const [Position, Type, PricedAt] = row
          .split(",")
          .map((item) => item.trim());
        return { Position, Type, PricedAt };
      })
      .filter((item) => item.Position); // Filter out any empty rows

    displayStartingSquad(squadData);
  } catch (error) {
    console.error("Error loading the Starting Squad data:", error);
  }
}

// Function to display the Starting Squad Blueprint in a table
function displayStartingSquad(squadData) {
  const squadContent = document.getElementById("squad-content");
  const table = document.createElement("table");

  // Table Header
  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");
  headerRow.innerHTML = "<th>Position</th><th>Type</th><th>Priced At</th>";
  thead.appendChild(headerRow);
  table.appendChild(thead);

  // Table Body
  const tbody = document.createElement("tbody");
  squadData.forEach((item) => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${item.Position}</td><td>${item.Type}</td><td>${item.PricedAt}</td>`;
    tbody.appendChild(row);
  });
  table.appendChild(tbody);

  // Append table to the content area
  squadContent.appendChild(table);
}

// Load the Starting Squad data when the page is loaded
document.addEventListener("DOMContentLoaded", loadStartingSquad);
