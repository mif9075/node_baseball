//Adding leading zeroes to day and month
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
        httpRequest.open("GET", 'https://erikberg.com/mlb/standings.json'
        )
        httpRequest.send()
        console.log(` `, httpRequest);
        
        

    }


    function processContents() {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                let data = httpRequest.responseText
                console.log(data);
                
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
        let cardDeck = document.querySelector(".container-standing > .content-standing")
        // console.log(items);

        let cards = ``

        

        for (let item in items) {
            if (items.hasOwnProperty(item)) {
                if ((items[item].status.status === 'Preview') || (items[item].status.status === 'Pre-Game')) {
                // console.log(items[item].status.status);
                cards += `<div class="col-md-4">
                <div class="card-header">
                <p class="my-0 font-weight-normal">${items[item].time} ${items[item].ampm} ${items[item].time_zone}</p>
                </div>
                <div class="card-body">
                    
                    <h6>${items[item].away_team_name}</br>${items[item].away_win}-${items[item].away_loss}</h6>
                    <h6>${items[item].home_team_name}</br>${items[item].home_win}-${items[item].home_loss}</h6>
                    <hr>
                    <h6>${items[item].away_name_abbrev}: ${items[item].away_probable_pitcher.last}, ${items[item].away_probable_pitcher.first}
                    
                    ${items[item].away_probable_pitcher.s_wins}-${items[item].away_probable_pitcher.s_losses}, ${items[item].away_probable_pitcher.s_era} ERA
                    </h6>
                    <h6>${items[item].home_name_abbrev}: ${items[item].home_probable_pitcher.last}, ${items[item].home_probable_pitcher.first}
        
                    ${items[item].home_probable_pitcher.s_wins}-${items[item].home_probable_pitcher.s_losses}, ${items[item].home_probable_pitcher.s_era} ERA
                    </h6>
                    <p>At 
                    ${items[item].venue}
                    </p>
                    
                  </div>
                </div>
              </div>`
                } else if (items[item].status.status === 'Final') {

                cards += `<div class="col-md-4">
                <div class="card-header">
                <p class="my-0 font-weight-normal">${items[item].time} ${items[item].ampm} ${items[item].time_zone}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SCORE
                </p>
                </div>
                <div class="card-body">
                    
                    <h6>${items[item].away_team_name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${items[item].linescore.r.away}</br>${items[item].away_win}-${items[item].away_loss}</h6>
                    <h6>${items[item].home_team_name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${items[item].linescore.r.home}</br>${items[item].home_win}-${items[item].home_loss}</h6>
                    <hr>
                    <h6>W: ${items[item].winning_pitcher.last}, ${items[item].losing_pitcher.first}
                    
                    ${items[item].winning_pitcher.wins}-${items[item].winning_pitcher.losses}, ${items[item].winning_pitcher.era} ERA
                    </h6>
                    <h6>L: ${items[item].losing_pitcher.last}, ${items[item].losing_pitcher.first}
        
                    ${items[item].losing_pitcher.wins}-${items[item].losing_pitcher.losses}, ${items[item].losing_pitcher.era} ERA
                    </h6>
                    <p>At 
                    ${items[item].venue}
                    </p>
                    
                  </div>
                </div>
              </div>`

                } else {
                    cards += `<div class="col-md-4">
                <div class="card-header">
                <p class="my-0 font-weight-normal">${items[item].time} ${items[item].ampm} ${items[item].time_zone}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SCORE</p>
                </div>
                <div class="card-body">
                    
                    <h6>${items[item].away_team_name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${items[item].linescore.r.away}</br>${items[item].away_win}-${items[item].away_loss}</h6>
                    <h6>${items[item].home_team_name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${items[item].linescore.r.home}</br>${items[item].home_win}-${items[item].home_loss}</h6>
                    <hr>
                    
                    <p>At 
                    ${items[item].venue}
                    </p>
                    
                  </div>
                </div>
              </div>`
                }
            }
        }
        cardDeck.innerHTML = cards;
        // console.log(cards)
    }

    makeRequest();
    
}