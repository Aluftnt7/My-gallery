'use strict'

var gNextId = 100
var gProjects = createProjects()


function createProjects() {

    var projects = [

        createProject('Mine-sweeper', 'My first sprint', 'MineSweeper was the first game i\'ve excuted', "img/world-of-minesweeper.png", 121518, ['rasta', 'bobi', 'etc']),
        createProject('Touch-Nums', 'My first game', 'Touch-Nums was the first game i\'ve ectualy managed to work!', "img/touchnums.png", 121518, ['rasta', 'bobi', 'etc'])

    ]

    return projects
}

function createProject(name, title, desc, url, publishedAt, labels) {
    console.log(gNextId, 'id');

    return {
        id: gNextId++,
        name: name,
        title: title,
        desc: desc,
        url: url,
        publishedAt: publishedAt,
        labels: labels
    }
}

function findProjById(id) {
    console.log(id);
    return gProjects.find(function(project) {

        return project.id === id

    })
}