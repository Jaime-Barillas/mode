let beers = [];

function render() {
    let app = document.getElementById('app');
    insertBeerCardss(app, beers);
}

function createBeerCard2(beer) {
    let card = document.createElement('div');
    card.classList.add('card');
    card.classList.add('column');
    card.classList.add('is-one-quarter');
    card.innerHTML = `
  <div class="card-image">
    <figure>
      <img  style="height: 196px;" src="${beer.image_url}" alt="Placeholder image">
    </figure>
  </div>
  <div class="card-content" style="min-height: 506px;">
    <div class="media">
      <div class="media-content">
        <p class="title is-4">${beer.name}</p>
        <p class="subtitle is-6">First Brewed: ${beer.first_brewed}</p>
      </div>
    </div>

    <div class="content">
      ${beer.description}
    </div>
  </div>
  <footer class="card-footer">
    <button id="${beer.id}" class="card-footer-item" onclick="unfavourite(${beer.id})">
      Unfavourite
    </button>
  </footer>
    `;

    return card;
}

function insertBeerCardss(here, beers) {
    let cards = beers.map(b => createBeerCard2(JSON.parse(b)));

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
