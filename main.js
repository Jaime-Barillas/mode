function debug(thing) { console.log(thing); return thing; }

function main() {
    console.log("hi");

    let app = document.getElementById('app');
    ajax('?page=1&per_page=20', function() {insertBeerCards(app, this.responseText)});
}

window.addEventListener('load', main);
