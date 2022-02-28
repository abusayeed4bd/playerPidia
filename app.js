// load player
const loadPlalyers = () => {
    document.getElementById('players-container').innerHTML = '';
    const inputValue = document.getElementById('search-input').value;

    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${inputValue}`;

    fetch(url)
        .then(response => response.json())
        .then(data => displayPlayer(data.player));

    // clear input value
    document.getElementById('search-input').value = '';

    // document.getElementById('loading').style.visibility = 'visible';
}

// display player

const displayPlayer = players => {

    // document.getElementById('loading').style.visibility = 'hidden';

    const playersContainer = document.getElementById('players-container');

    for (const player of players) {

        const div = document.createElement('div');
        div.classList.add('col-md-6');
        div.classList.add('d-flex');
        div.classList.add('justify-content-center');
        div.classList.add('col-lg-4');
        div.classList.add('col-sm-12');


        div.classList.add('mb-5');

        div.innerHTML = `
        <div class="card text-center border-0" style="width: 18rem;">
                    <img src="${player.strThumb}"
                        class="card-img-top img-fluid" alt="${player.strPlayer}'s photo">
                    <div class="card-body">
                        <h2 class="card-title">${player.strPlayer}</h2>
                        <h4>${player.strNationality}</h4>
                        <p>${player.dateBorn}</p>
                        <button id="details-btn" class="btn">See Details</button>
                    </div>
                </div>
        `;
        playersContainer.appendChild(div);
    }
}