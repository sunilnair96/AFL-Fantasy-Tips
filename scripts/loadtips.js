// Fetch and display the JSON data
async function loadTips() {
  try {
    const response = await fetch("./data/tips.json");
    const data = await response.json();

    const contentDiv = document.getElementById("strategy-content");

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
    });
  } catch (error) {
    console.error("Error loading the tips:", error);
  }
}

// Load the tips when the page loads
window.onload = () => {
  loadTips();
  displayWinningStructure();
};
