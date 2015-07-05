/**
 * Created by Coty on 7/4/2015.
 */
var axios = require('axios');

function getRoster(team){
    return axios.get('http://roster-builder.comoj.com/get-roster.php?team=' + team);
}

function getPlayer(id){
    return axios.get('http://roster-builder.comoj.com/get-player.php?id=' + id);
}

function loadRoster(team){
    return getRoster(team).then(function(html){
        return parseRoster(html.data, team);
    });
}

function loadPlayer(id){
    return getPlayer(id).then(function(html){
        return parsePlayer(html);
    });
}

function parseRoster(html, team){
    console.log(html);
    var cleanHtmlBody = html.split('***BORDER***')[1];
    var pieces = cleanHtmlBody.split('##BREAK##');
    var coaches = pieces[0];
    var players = pieces[1];
    return axios.all([
        axios.put('https://boiling-fire-929.firebaseio.com/roster-builder/' + team + '/coaches/', coaches),
        axios.put('https://boiling-fire-929.firebaseio.com/roster-builder/' + team + '/depth-chart/', players)
        ]).then(function(data){
            return true;
    });
}

function parsePlayer(html){
    return html;
}

var helpers = {
    roster: function(team){
        return loadRoster(team);
    },
    player(id){
        return loadPlayer(id);
    }
};

module.exports = helpers;