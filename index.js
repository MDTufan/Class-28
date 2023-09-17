
document.getElementById('section-container').addEventListener('click', function () {
    
    document.getElementById('output').innerText = 'Sectoion Container is clicked';
    console.log('Section Container is clicked');
})

document.getElementById('ul-item').addEventListener('click', function () {

    document.getElementById('output').innerText = 'Ul Item is clicked';
    console.log('Ul Item is clicked');
})





document.getElementById('list-item-03').addEventListener('click', function (event) {

    event.stopImmediatePropagation();
    document.getElementById('output').innerText = 'List-Item-03 is clicked';
    console.log('List-Item-03 is clicked');
})

