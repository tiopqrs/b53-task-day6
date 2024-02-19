const projects = [];

function addProject(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const startdate = new Date(document.getElementById("startdate").value);
    const enddate = new Date(document.getElementById("enddate").value);
    const description = document.getElementById("description").value;
    const nodejs = document.getElementById("nodejs");
    const nextjs = document.getElementById("nextjs");
    const reactjs = document.getElementById("reactjs");
    const typescript = document.getElementById("typescript");
    const image = document.getElementById("image").files;

    const imageLink = URL.createObjectURL(image[0]);

    const nodejsv = nodejs.checked;
    const nextjsv = nextjs.checked;
    const reactjsv = reactjs.checked;
    const typescriptv = typescript.checked;

    startdate.setHours(0, 0, 0, 0);
    enddate.setHours(0, 0, 0, 0);

    const oneday = 24 * 60 * 60 * 1000;
    const diff = Math.abs(startdate - enddate);
    const day = Math.abs(diff / oneday);

    const project = {
        name,
        startdate,
        enddate,
        day,
        nodejsv,
        nextjsv,
        reactjsv,
        typescriptv,
        description,
        image: imageLink,
    };

    projects.unshift(project);
    renderProject();
    console.log("projects", projects);
}

function renderProject() {
    let html = '';

    for (let index = 0; index < projects.length; index++) {
        html += `
            <div style="margin-left: 50px; margin-bottom: 50px; padding: 20px; height: auto; width: 300px; box-shadow: 0px 0px 3px 0px black; border-radius: 10px;">
                <div>
                    <a href="detail-project.html" target="_blank">
                        <img src="${projects[index].image}" style="height: 200px; width: 300px; border-radius: 10px; object-fit: cover;"/>
                    </a>
                    <h2 style="margin-bottom: 0px;">${projects[index].name}</h2>
                    <p style="margin-top: 0; color: gray;">Duration: ${projects[index].day} Days</p>    
                    <p>${projects[index].description}</p>
                    
                    <div>
                    ${projects[index].nodejsv ? `<img src="./assets/img/nodejs.png" style="height: 40px;"/>`:''} 
                    ${projects[index].nextjsv ? `<img src="./assets/img/nextjs.png" style="height: 40px;"/>`:''} 
                    ${projects[index].reactjsv ? `<img src="./assets/img/reactjs.png" style="height: 40px;"/>`:''} 
                    ${projects[index].typescriptv ? `<img src="./assets/img/typescript.png" style="height: 40px;"/>`:''} 
                    
                    </div>
                    
                    <div style="display: flex; gap: 10px;">
                        <button class="button-edit">edit</button>
                        <button class="button-delete">delete</button>
                    </div>
                </div>
            </div>
        `;
    }
    document.getElementById("contents").innerHTML = html;
}

renderProject();