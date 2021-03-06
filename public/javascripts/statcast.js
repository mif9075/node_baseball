let date = new Date();

let num = date.getFullYear();

window.onload = init;

function init() {
    document.querySelector('#option2019')
        .addEventListener('click', buttonRequest);
    document.querySelector('#option2018')
        .addEventListener('click', buttonRequest);
    document.querySelector('#option2017')
        .addEventListener('click', buttonRequest);
    document.querySelector('#option2016')
        .addEventListener('click', buttonRequest);
    document.querySelector('#option2015')
        .addEventListener('click', buttonRequest);
    sendRequest(num);


function buttonRequest(event){
    num = event.target.innerText;
    sendRequest(num);
}


function sendRequest(num) {

    const xhr = new XMLHttpRequest();
    let url = `http://lookup-service-prod.mlb.com/json/named.psc_leader_hit_hr_dist.bam?season=${num}`;

    xhr.open('GET', url);
    xhr.onload = handleData;
    xhr.send();

    // console.log(url)
}
}

function handleData(event) {
    const person = JSON.parse(event.target.responseText);
    displayTable(person);
}

function displayTable(player){

    clearList();

    if (player.psc_leader_hit_hr_dist.queryResults.totalSize === "0") {
        const noDataTD = document.querySelector('.no_data');
        const noDataData = document.createElement('p');
        noDataData.innerText = "No data for this game type/year combination";
        noDataTD.appendChild(noDataData);

        }else{

        for (let i = 0; i < player.psc_leader_hit_hr_dist.queryResults.row.length; i++) {

        const batterNumTD = document.querySelector('.batter');
        const batterNumData = document.createElement('p');
        batterNumData.innerText = player.psc_leader_hit_hr_dist.queryResults.row[i].batter;
        batterNumTD.appendChild(batterNumData);

        const distanceNumTD = document.querySelector('.distance');
        const distanceNumData = document.createElement('p');
        distanceNumData.innerText = player.psc_leader_hit_hr_dist.queryResults.row[i].distance;
        distanceNumTD.appendChild(distanceNumData);

        const exitNumTD = document.querySelector('.launch_speed');
        const exitNumData = document.createElement('p');
        exitNumData.innerText = player.psc_leader_hit_hr_dist.queryResults.row[i].launch_speed;
        exitNumTD.appendChild(exitNumData);

        const launchNumTD = document.querySelector('.launch_angle');
        const launchNumData = document.createElement('p');
        launchNumData.innerText = player.psc_leader_hit_hr_dist.queryResults.row[i].launch_angle;
        launchNumTD.appendChild(launchNumData);

        const heightNumTD = document.querySelector('.height');
        const heightNumData = document.createElement('p');
        heightNumData.innerText = player.psc_leader_hit_hr_dist.queryResults.row[i].height;
        heightNumTD.appendChild(heightNumData);

        const pitcherNumTD = document.querySelector('.pitcher');
        const pitcherNumData = document.createElement('p');
        pitcherNumData.innerText = player.psc_leader_hit_hr_dist.queryResults.row[i].pitcher;
        pitcherNumTD.appendChild(pitcherNumData);

        const pitchNumTD = document.querySelector('.pitch_speed');
        const pitchNumData = document.createElement('p');
        pitchNumData.innerText = player.psc_leader_hit_hr_dist.queryResults.row[i].pitch_speed;
        pitchNumTD.appendChild(pitchNumData);

        const dateNumTD = document.querySelector('.game_date');
        const dateNumData = document.createElement('p');
        dateNumData.innerText = player.psc_leader_hit_hr_dist.queryResults.row[i].game_date;
        dateNumTD.appendChild(dateNumData);

        }
    }
}

function clearList() {
    event.preventDefault();
    removeAllChildrenOfOl();
}

function removeAllChildrenOfOl() {
    const ol = document.querySelector('.batter');
    while (ol.hasChildNodes()) {
        ol.removeChild(ol.firstChild);
    }

    const ol1 = document.querySelector('.distance');
    while (ol1.hasChildNodes()) {
        ol1.removeChild(ol1.firstChild);
    }
    
    const ol2 = document.querySelector('.launch_speed');
    while (ol2.hasChildNodes()) {
        ol2.removeChild(ol2.firstChild);
    }

    const ol3 = document.querySelector('.launch_angle');
    while (ol3.hasChildNodes()) {
        ol3.removeChild(ol3.firstChild);
    }

    const ol4 = document.querySelector('.height');
    while (ol4.hasChildNodes()) {
        ol4.removeChild(ol4.firstChild);
    }

    const ol5 = document.querySelector('.pitcher');
    while (ol5.hasChildNodes()) {
        ol5.removeChild(ol5.firstChild);
    }

    const ol6 = document.querySelector('.pitch_speed');
    while (ol6.hasChildNodes()) {
        ol6.removeChild(ol6.firstChild);
    }

    const ol7 = document.querySelector('.game_date');
    while (ol7.hasChildNodes()) {
        ol7.removeChild(ol7.firstChild);
    }

    const ol8 = document.querySelector('.no_data');
    while (ol8.hasChildNodes()) {
        ol8.removeChild(ol8.firstChild);
    }

}