/**
 * Created by Coty on 7/4/2015.
 */
var axios = require('axios');

//var serverRoot = 'http://roster-builder.comoj.com/';
var serverRoot = 'http://nflrosterbuilder.byethost7.com/';

function getDepthChart(team){
    return axios.get(serverRoot + 'get-depthchart.php?team=' + team);
}

function getRoster(team){
    return axios.get(serverRoot + 'get-roster.php?team=' + team);
}

function getPlayer(id){
    return axios.get(serverRoot + 'get-player.php?id=' + id);
}

var helpers = {
    roster: function(team){
        return getRoster(team);
    },
    depthChart: function(team){
        return getDepthChart(team);
    },
    player: function(id){
        return getPlayer(id);
    }
};

module.exports = helpers;