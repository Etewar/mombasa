function randint(minv, maxv) {
    return Math.floor(Math.random() * (maxv - minv + 1)) + minv;
}

function setup() {
    if (document.getElementById('usingECheck').checked == true) {
        var letters = ['A', 'B', 'C', 'D', 'E'];
    }
    else {
        var letters = ['A', 'B', 'C', 'D'];
    }

    i = randint(0, letters.length-1);
    document.getElementById('mombasa').innerHTML = ('Mombasa ' + letters[i] + randint(1, 2));
    letters.splice(i, 1);

    i = randint(0, letters.length-1);
    document.getElementById('stlouis').innerHTML = ('Saint-Louis ' + letters[i] + randint(1, 2));
    letters.splice(i, 1);

    i = randint(0, letters.length-1);
    document.getElementById('capetown').innerHTML = ('Cape Town ' + letters[i] + randint(1, 2));
    letters.splice(i, 1);

    i = randint(0, letters.length-1);
    document.getElementById('cairo').innerHTML = ('Cairo ' + letters[i] + randint(1, 2));
    letters.splice(i, 1);

    var list_of_players = ["Blue", "Yellow", "Green", "Purple"];
    var colors = {"Blue": '#4da2da', "Yellow": '#f1c40f', "Green": '#27ae60', "Purple": '#9921cc'}
    var shadows = {"Blue": '0vh 0vh 0.01vh black', "Yellow": '0vh 0vh 0.01vh white', "Green": '0vh 0vh 0.01vh black', "Purple": '0vh 0vh 0.01vh white'} 
    player = randint(0, 3)
    document.getElementById('firstPlayer').innerHTML = "First player: " + list_of_players[player]
    document.getElementById('firstPlayer').style.color = colors[list_of_players[player]]
    //document.getElementById('firstPlayer').style.textShadow = shadows[list_of_players[player]]
}