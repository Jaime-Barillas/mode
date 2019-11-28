var allbeers;
var beers;

function makeCard(beer) {
    let card = document.createElement('div');
    card.classList.add('card');
    card.classList.add('column');
    card.classList.add('is-full');
    card.innerHTML =
`
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image">
          <img src="${beer.image_url}" style="height: 48px;" alt="Placeholder image">
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-4">${beer.name}</p>
        <p class="subtitle is-6">${beer.tagline}</p>
      </div>
    </div>
  </div>
`;
    return card;
}

function insertCards(here, beers) {
    let cards = beers.map(makeCard);

    for (card of cards) {
        here.append(card);
    }
}

function main() {
    console.log("hi");

    let app = document.getElementById('app');
    ajax('?page=1&per_page=80', function() {
        beers = Array.from(JSON.parse(this.responseText));
        allbeers = beers.slice();
        insertCards(app, beers);
    });
}

function search(name) {
    beers = allbeers.filter(beer => beer.name
                                        .toLowerCase()
                                        .includes(name.toLowerCase()));
    let app = document.getElementById('app');
    app.innerHTML = '';
    insertCards(app, beers);
}

window.addEventListener('load', main);
