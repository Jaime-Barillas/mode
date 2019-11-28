function ajax(api, callback) {
    var req = new XMLHttpRequest();
    req.addEventListener("load", callback);
    req.open("GET", "https://api.punkapi.com/v2/beers" + api, true)
    req.send();
}

function createBeerCard(beer) {
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
    <button id="${beer.id}" class="card-footer-item" onclick="favourite(${beer.id})">
      Favourite
    </button>
  </footer>
    `;

    return card;
}

function favourite(id) {
    let button = document.getElementById(id);
    button.setAttribute('onclick', `unfavourite(${id})`);
    button.textContent = 'unfavourite';

    let favs = JSON.parse(window.localStorage.getItem('modeFavs') || '[]');
    favs.push(id);
    window.localStorage.setItem('modeFavs', JSON.stringify(favs));
}
function unfavourite(id) {
    let button = document.getElementById(id);
    button.setAttribute('onclick', `favourite(${id})`);
    button.textContent = 'favourite';

    let favs = JSON.parse(window.localStorage.getItem('modeFavs') || '[]');
    favs = favs.filter(beer => beer != id);
    window.localStorage.setItem('modeFavs', JSON.stringify(favs));
}

function insertBeerCards(here, beers) {
    let cards = JSON.parse(beers)
                    .map(createBeerCard)

    for (card of cards) {
        console.log(typeof(card));
        console.log(card);
        here.append(card);
    }
}
