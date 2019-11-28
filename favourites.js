let beers = [];

function render() {
    let app = document.getElementById('app');
    insertBeerCardss(app, beers);
}

function insertBeerCardss(here, beers) {
    let cards = beers.map(b => createBeerCard(JSON.parse(b)));

    for (card of cards) {
        here.append(card);
    }
}

function main() {
    console.log("hi");

    let favs = JSON.parse(window.localStorage.getItem('modeFavs') || '[]');

    for (id of favs) {
        ajax('/' + id, function() {
            let len = this.responseText.length;
            //beers.push(this.responseText.substring(1, len - 1));
            beers.push(JSON.stringify(JSON.parse(this.responseText)[0]));
            render();
        });
    }

    //ajax('?page=1&per_page=20', function() {insertBeerCards(app, this.responseText)});
}

window.addEventListener('load', main);
