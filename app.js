const form = document.getElementById("teamForm");
const teamList = document.getElementById("teamList");

let teams = JSON.parse(localStorage.getItem("teams")) || [];

function renderTeams() {
  teamList.innerHTML = "";
  teams.forEach((t) => {
    const li = document.createElement("li");
    li.textContent = `${t.name} - ${t.captain} - ${t.phone}`;
    teamList.appendChild(li);
  });
}

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const newTeam = {
    name: document.getElementById("teamName").value,
    captain: document.getElementById("captain").value,
    phone: document.getElementById("phone").value
  };

  teams.push(newTeam);
  localStorage.setItem("teams", JSON.stringify(teams));

  form.reset();
  renderTeams();
});

renderTeams();