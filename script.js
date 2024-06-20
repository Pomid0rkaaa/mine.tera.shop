let blocks = document.querySelectorAll(".block");
let items = document.querySelectorAll(".item");
let TIS = document.querySelectorAll(".TIS-3D")


items.classList.add('disabled');

function sortBlocks(){
    blocks.forEach(function(element) {
        element.classList.remove('disabled');
    });

    items.forEach(function(element) {
        element.classList.add('disabled');
    });
}

function sortItems(){
    items.forEach(function(element) {
        element.classList.remove('disabled');
    });
    
    blocks.forEach(function(element) {
        element.classList.add('disabled');
    });
}

function sortTIS(){
    blocks.forEach(function(element) {
        element.classList.add('disabled');
    });

    items.forEach(function(element) {
        element.classList.add('disabled');
    });

    TIS.forEach(function(element) {
        element.classList.remove('disabled');
    });
}

function sortAll(){
    blocks.forEach(function(element) {
        element.classList.remove('disabled');
    });

    items.forEach(function(element) {
        element.classList.remove('disabled');
    });
}