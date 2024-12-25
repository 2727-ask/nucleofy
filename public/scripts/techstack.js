import { printLog } from "./appUtils";



function techStack(selector, stacktitle, technologies, client_side_skills) {
    const flexBox = document.createElement("div");
    flexBox.className = "d-flex justify-content-center gap-1";
    const title = document.createElement("p");
    title.className = "m-2"
    title.innerText = stacktitle;
    selector.appendChild(title);
    const skills = findTechnologies(technologies, client_side_skills);

    skills.forEach(element => {
        const service_container = document.createElement("div");
        service_container.className = "services-grid__service-container";
        const img = document.createElement('img');
        const text = document.createElement('div');
        text.className = "services-grid__service-name mt-1";
        img.className = "services-grid__service-icon";
        img.src = element.img;
        text.innerText = element.name;
        service_container.appendChild(img);
        service_container.appendChild(text);
        flexBox.appendChild(service_container);
    });

    printLog(flexBox);
    

    selector.appendChild(flexBox);
}

function findTechnologies(inputTechnologies, client_side_skills) {
    return client_side_skills.filter(skill => inputTechnologies.includes(skill.name));
}


export { techStack }