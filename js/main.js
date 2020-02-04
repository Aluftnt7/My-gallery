console.log('Starting up');



$(document).ready(onInit);

function onInit() {
    console.log('Hi thaere! enjoyyyy');
    // createProjects()
    renderHoverProt()

}


function renderHoverProt() {
    var projects = gProjects

    var strHtml = projects.map(function(project) {
        console.log(project);

        return `
        <div class="col-md-4 col-sm-6 portfolio-item">
        <a class="portfolio-link" data-toggle="modal" href="#portfolioModal2" onClick = "renderModal(${project.id})">
            <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                    <i class="fa fa-plus fa-3x"></i>
                </div>
            </div>
            <img class="img-fluid my-img" src=${project.imgUrl} alt="">
        </a>
        <div class="portfolio-caption">
            <h4>${project.name}</h4>
            <p class="text-muted">${project.title}</p>
        </div>
    </div>
        `
    }).join('')
    $('.my-project').html(strHtml)

}


function renderModal(projectId) {

    console.log(projectId);
    var project = findProjById(projectId)

    var strHtml =

        `<h2>${project.name}</h2>
            <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
            <img class="img-fluid d-block mx-auto" src=${project.imgUrl} alt="">
            <p> ${project.desc}Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate,
                maiores repudiandae, nostrum, reiciendis facere nemo!</p>
            <ul class="list-inline">
                <li>Date: ${project.publishedAt}</li>
                <li>Client: Threads</li>
                <li>Category: Illustration</li>
            </ul>
            <button class="btn btn-primary btn-watch-project" onClick = "moveToUrl(${project.id})"  type="button"> Wanna watch? </button>
            <button class="btn btn-primary" data-dismiss="modal" type="button">
    <i class="fa fa-times"></i>
    Close Project</button>`

    $('.modal-body').html(strHtml)
}