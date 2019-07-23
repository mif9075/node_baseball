window.onload = function () {
    init()
}

function init(){
    
    let httpRequest

    function makeRequest() {
        httpRequest = new XMLHttpRequest()

        if(!httpRequest) {
            alert("Giving up! Cannot create an XMLHTTP instance")
        }

        httpRequest.onreadystatechange = processContents
        httpRequest.open("GET", `https://erikberg.com/mlb/standings.json`
        )
        httpRequest.send()
        console.log(` `, httpRequest);

    }

    function processContents() {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                let data = httpRequest.responseText
                // console.log(` `, data);
                // console.log(data);
                
                if (data) {
                    data = JSON.parse(data)
                    // console.log(` `, data.data.games.game);

                    if (data.data.games.game) createCards(data.data.games.game)
                    
                }
            } else {
                alert("There was a problem with request")
            }
        }
    }



    function createCards(items) {
        let cardDeck = document.querySelector(".container > .content")
        // console.log(items);

        let cards = ``

        for (let item in items) {
            if (items.hasOwnProperty(item)) {
                // console.log(items[item].time);
                cards += `<div class="col-md-4">
                <div class="card-header">
                <p class="my-0 font-weight-normal">${items[item].time} ${items[item].ampm} ${items[item].time_zone}</p>
                </div>
                <div class="card-body">
                    
                    <h6>${items[item].away_team_name}</br>${items[item].away_win}-${items[item].away_loss}</h6>
                    <h6>${items[item].home_team_name}</br>${items[item].home_win}-${items[item].home_loss}</h6>
                    <hr>
                    
                    <p>At 
                    ${items[item].venue}
                    </p>
                    
                  </div>
                </div>
              </div>`
            }
        }
        cardDeck.innerHTML = cards;
        // console.log(cards)
    }

    makeRequest();
    
}