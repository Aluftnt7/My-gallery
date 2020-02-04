'use strict'

var gNextId = 100
var gProjects = createProjects()


function createProjects() {

    var projects = [

        createProject('Mine-sweeper', 'My first sprint', 'MineSweeper was the first game i\'ve excuted', "img/world-of-minesweeper.png", 121518, ['rasta', 'bobi', 'etc'], 'Mine-sweeper'),
        createProject('Touch-Nums', 'My first game', 'Touch-Nums was the first game i\'ve ectualy managed to work!', "img/touchnums.png", 121518, ['rasta', 'bobi', 'etc']),
        createProject('Book-Shop', 'A platform for book shop owners', 'If you have a book shop and you need to manage you goods - this app is for you!', "img/BOOKSHOP.jpg", 45687, ['rasta', 'bobi', 'etc'], 'Book-shop')

    ]

    return projects
}

function createProject(name, title, desc, imgUrl, publishedAt, labels, url) {
    console.log(gNextId, 'id');

    return {
        id: gNextId++,
        name: name,
        title: title,
        desc: desc,
        imgUrl: imgUrl,
        publishedAt: publishedAt,
        labels: labels,
        url: url
    }
}

function findProjById(id) {
    console.log(id);
    return gProjects.find(function(project) {

        return project.id === id

    })
}


function moveToUrl(id) {
    var proj = findProjById(id)
    var currUrl = proj.url
    window.open(`https:aluftnt7.github.io/${currUrl}/`)

}