// Fetch and display the JSON data
async function loadTips() {
  try {
    const response = await fetch("./data/tips.json");
    const data = await response.json();

    const contentDiv = document.getElementById("strategy-content");
    console.log("Start loadTips");

    // Loop through each tip and build HTML content
    data.AFLFantasyTeamStrategy.forEach((item, index) => {
      // Create and append <h2> for each Tip
      const tipHeading = document.createElement("h2");
      tipHeading.textContent = `${index + 1}. ${item.Tip}`;
      contentDiv.appendChild(tipHeading);

      // Create <ul> for SubTips
      const subTipsList = document.createElement("ul");
      item.SubTips.forEach((subTip) => {
        const listItem = document.createElement("li");
        listItem.textContent = subTip;
        subTipsList.appendChild(listItem);
      });

      contentDiv.appendChild(subTipsList);
      console.log("Finish loadTips");
    });
  } catch (error) {
    console.error("Error loading the tips:", error);
  }
}

// Load the tips when the page loads
document.addEventListener("DOMContentLoaded", loadTips);

// window.onload = () => {
//   loadTips();
//   displayWinningStructure();
// };
