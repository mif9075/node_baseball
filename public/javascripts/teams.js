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
        httpRequest.open("GET", `http://lookup-service-prod.mlb.com/json/named.team_all.bam?sport_code=%27mlb%27&active_sw=%27Y%27&all_star_sw=%27N%27`
        )
        httpRequest.send()
        // console.log(` `, httpRequest);
        
    }

    function processContents() {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                let data = httpRequest.responseText
                
                
                if (data) {
                    data = JSON.parse(data)
                    // console.log(data.team_all.queryResults.row);

                    if (data.team_all.queryResults.row) createCards(data.team_all.queryResults.row)
                    
                }
            } else {
                alert("There was a problem with request")
            }
        }
    }


    function createCards(items) {
        let cardDeck = document.querySelector(".card-deck > .card")
        // console.log(items);

        let cards = ``

        

        for (let item in items) {
            if (items.hasOwnProperty(item)) {
                cards += `<div class="card mb-4 shadow-sm">
                <div class="card-header">
                <h4 class="my-0 font-weight-normal">${items[item].name_display_full}</h4>
              </div>
              <div class="card-body">
                <ul class="list-unstyled mt-3 mb-4">
                  <li>${items[item].venue_short}</li>
                  <li>${items[item].address}</li>
                  <li>${items[item].phone_number}</li>
                  <li><a href="http://${items[item].website_url}"</a>${items[item].website_url}</li>
                </ul>
                <button type="button" class="btn btn-lg btn-block btn-outline-primary">Sign up for free</button>
              </div>
              </div>`
                
                }
            }
        
        cardDeck.innerHTML = cards;
        // console.log(cards)
    }

    makeRequest();

}
