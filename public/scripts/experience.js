import { printLog } from "./appUtils";

function createExperienceCards(experiences) {
    const container = document.getElementById("experience-container");

    experiences.forEach((exp, index) => {
        // Create card container
        const card = document.createElement("div");
        card.className = `experience-card featured-0-border card p-2 mb-2 bg-body-tertiary`;

        // Add row
        card.innerHTML = `
            <div class="row g-0 justify-content-center">
                <div class="col-10 col-md-2">
                    <div class="org-image my-3">
                        <img class="w-100" src="${exp.logo}" alt="Company Logo">
                    </div>
                    <div class="org-name my-2">
                        <h6>${exp.orgName}</h6>
                    </div>
                </div>
                <div class="col-12 col-md-8">
                    <div class="p-1 text-start">
                        <ul>
                            <h5 class="display-7 featured-0">${exp.title}</h5>
                        </ul>
                        <ul>
                            <h6>
                                <i class="bi bi-calendar-check featured-0"></i>&nbsp;&nbsp;
                                ${exp.duration}
                            </h6>

                             <h6>
                                <i class="bi bi-code-square featured-0"></i>&nbsp;&nbsp;
                                ${exp.type}
                            </h6>
                        </ul>
                        <hr>
                        <ul>
                            ${exp.responsibilities.map(item => `<li>${item}</li>`).join("")}
                        </ul>
                    </div>
                </div>
            </div>
        `;

        // Append card to the container
        container.appendChild(card);
    });
}



function createSkills(skills, type, skillSectionTitle, skillRow) {
    const column = document.createElement("div");
    column.className = "col-12 col-md-3";
    const skillSectionCard = document.createElement("div")
    const cardBody = document.createElement("div");
    const cardTitle = document.createElement("div");
    const skillsData = document.createElement("div");
    skillSectionCard.className = "card bg-transparent text-white border";
    cardBody.className = "card-body";
    cardTitle.className = "card-title";
    skillsData.className = "row row-cols-4 justify-content-center"
    cardTitle.textContent = skillSectionTitle || "Other";

    skills.map((skill) => {
        if (skill.type === type) {
            printLog("Skill", skill);
            const skillCard = document.createElement('div');
            const skillImage = document.createElement('img');
            const skillTitle = document.createElement('p');
            skillCard.className = 'col lang py-1 px-1 m-1 border';
            skillImage.src = skill.img;
            skillImage.style.width = "100%";
            skillImage.style.display = "grid";
            skillImage.style.placeItems = "center";
            skillImage.style.maxWidth = "100%";
            skillImage.style.maxHeight = "100%";
            skillTitle.textContent = skill.name;
            skillTitle.style.marginTop = "7px";
            skillCard.appendChild(skillImage);
            skillCard.appendChild(skillTitle)
            skillsData.appendChild(
                skillCard
            );
        }

    })

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(skillsData);
    skillSectionCard.appendChild(cardBody);
    column.appendChild(skillSectionCard);
    skillRow.appendChild(column);
}


function createEducation(educationList, educationContainer) {
    const educationRow = document.createElement("div");
    educationRow.className = "row justify-content-center";
    educationList.forEach((val, index) => {
        const col = document.createElement("div");
        col.className = "col-md-3";
        col.innerHTML = `
                    <div class="card w-100">
                        <div class="img-container">
                            <img src="${val.img}" class="card-img-top ed-image" alt="...">
                        </div>
                        <div class="card-body text-start">
                            <p class="card-text"><img src="https://img.icons8.com/?size=30&id=2341&format=png&color=000000" alt="" srcset="">&nbsp;&nbsp;<b id="university">${val.uniName}</b></p>
                            <p class="card-text"><img src="https://img.icons8.com/?size=30&id=77565&format=png&color=000000" alt="" srcset="">&nbsp;&nbsp;<b id="degree">${val.degree}</b></p>
                            <p class="card-text"><img src="${val.countryImg}" alt="" srcset="">&nbsp;&nbsp;<b id="country">${val.country}</b></p>
                            <p class="card-text"><i class="bi bi-calendar-check" style="font-size: 25px;"></i>&nbsp;&nbsp;<b id="university">${val.duration}</b></p>
                        </div>
                    </div>
        `;
        educationRow.appendChild(col);
    })
    educationContainer.appendChild(educationRow);
}

export { createExperienceCards, createSkills, createEducation }




