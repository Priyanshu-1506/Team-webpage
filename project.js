
function searchStudents() {
    
    let input = document.getElementById("searchInput").value.toLowerCase();

    // Saare student cards ko pakdo
    let cards = document.getElementsByClassName("student-data");

    
    let noResult = document.querySelector(".no-result");

    let matchFound = 0;

    
    for (let i = 0; i < cards.length; i++) {
        let cardText = cards[i].innerText.toLowerCase();

        
        if (cardText.includes(input)) {
            cards[i].style.display = "block";
            matchFound++;
        } else {
            cards[i].style.display = "none";
        }
    }

    
    if (matchFound === 0) {
        noResult.style.display = "block";
    } else {
        noResult.style.display = "none";
    }
}



function joinTeam(name) {
    
    alert("Your request to join " + name + " has been sent!");
}



let form = document.getElementById("projectForm");

form.addEventListener("submit", function(event) {
    
    event.preventDefault();


    let title = document.getElementById("projectName").value;
    let desc = document.getElementById("projectDescription").value;
    let skills = document.getElementById("projectSkills").value;

    let container = document.querySelector(".project-container");


    container.innerHTML += `
        <div class="project-data">
            <p>New Idea</p>
            <h3>${title}</h3>
            <p>${desc}</p>
            <p><b>Required:</b> ${skills}</p>
            <button onclick="joinTeam('${title}')">Request to Join</button>
        </div>
    `;

    
    let msg = document.getElementById("successMsg");
    msg.innerText = "Project uploaded successfully!";
    msg.style.color = "green";

    
    form.reset();
});