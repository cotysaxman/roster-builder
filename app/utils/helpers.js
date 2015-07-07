/**
 * Created by Coty on 7/4/2015.
 */
var axios = require('axios');

function getDepthChart(team){
    return axios.get('http://roster-builder.comoj.com/get-depthchart.php?team=' + team);
}

function getRoster(team){
    return axios.get('http://roster-builder.comoj.com/get-roster.php?team=' + team);
}

function getPlayer(id){
    return axios.get('http://roster-builder.comoj.com/get-player.php?id=' + id);
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