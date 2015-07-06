/**
 * Created by Coty-Saxman on 7/6/2015.
 */
var React = require('react');
var Firebase = require('firebase');
var helpers = require('../utils/helpers');

var DataLink = React.createClass({
    componentDidMount: function() {
        window.ROSTER_BUILDER_DATA = window.ROSTER_BUILDER_DATA || {};
        window.ROSTER_BUILDER_DATA.team = 'DAL';
        window.ROSTER_BUILDER_DATA.roster = [];
        window.ROSTER_BUILDER_DATA.depthChart = [];
        window.ROSTER_BUILDER_DATA.players = [{}];
        //players
        this.pRef = new Firebase('https://boiling-fire-929.firebaseio.com/roster-builder/players/');
        this.pRef.on('value', function (snapshot) {
            window.ROSTER_BUILDER_DATA.players = snapshot.val();
        }.bind(this));
        //depth chart
        this.dcRef = new Firebase('https://boiling-fire-929.firebaseio.com/roster-builder/' + window.ROSTER_BUILDER_DATA.team + '/depth-chart/');
        this.dcRef.on('value', function (snapshot) {
            window.ROSTER_BUILDER_DATA.depthChart = snapshot.val();
            if (window.ROSTER_BUILDER_DATA.depthChart == null) {
                helpers.depthChart(window.ROSTER_BUILDER_DATA.team);
            }
        }.bind(this));
        //roster
        this.rRef = new Firebase('https://boiling-fire-929.firebaseio.com/roster-builder/' + window.ROSTER_BUILDER_DATA.team + '/roster/');
        this.rRef.on('value', function (snapshot) {
            window.ROSTER_BUILDER_DATA.roster = snapshot.val();
            if (window.ROSTER_BUILDER_DATA.roster == null) {
                helpers.roster(window.ROSTER_BUILDER_DATA.team);
            } else {
                for(var i = 0; i < window.ROSTER_BUILDER_DATA.roster.length; i++){
                    var playerId = window.ROSTER_BUILDER_DATA.roster[i];
                    if(!window.ROSTER_BUILDER_DATA.players[playerId]){
                        helpers.player(playerId);
                        console.log('fetching ' + playerId);
                    }
                }
            }
        }.bind(this));
    },
    componentWillUnmount: function(){
        this.dcRef.off();
        this.rRef.off();
        this.pRef.off();
    },
    render: function(){
        return (
            <div style={{display: 'none'}}>
                Firebase Data Integration
            </div>
        )
    }
});

module.exports = DataLink;