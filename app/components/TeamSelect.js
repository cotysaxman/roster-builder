/**
 * Created by Coty-Saxman on 7/7/2015.
 */
var React = require('react');
var Router = require('react-router');
var helpers = require('../utils/helpers');

var TeamSelect = React.createClass({
    mixins: [Router.Navigation],
    onSelect: function(event){
        var team = event.target.value;
        window.ROSTER_BUILDER_DATA.team = team;

        //DOWNLOAD CODE//
        var roster = (window.ROSTER_BUILDER_DATA['teams'][team].roster);
        for(var i = 0; i < roster.length; i++){
            var id = roster[i];
            if(!window.ROSTER_BUILDER_DATA.players[id]){
                helpers.player(id);
                console.log("downloading player: " + id);
            }
        }

        this.transitionTo('office', {team: window.ROSTER_BUILDER_DATA.team});
    },
    render: function(){
        return (
            <div class="col-md-3">
                <select id="teamSelectDropdown" onChange={this.onSelect}>
                    <option value="ARZ">Arizona Cardinals</option>
                    <option value="ATL">Atlanta Falcons</option>
                    <option value="BAL">Baltimore Ravens</option>
                    <option value="BUF">Buffalo Bills</option>
                    <option value="CAR">Carolina Panthers</option>
                    <option value="CHI">Chicago Bears</option>
                    <option value="CIN">Cincinnati Bengals</option>
                    <option value="CLE">Cleveland Browns</option>
                    <option value="DAL">Dallas Cowboys</option>
                    <option value="DEN">Denver Broncos</option>
                    <option value="DET">Detroit Lions</option>
                    <option value="GB">Green Bay Packers</option>
                    <option value="HOU">Houston Texans</option>
                    <option value="IND">Indianapolis Colts</option>
                    <option value="JAX">Jacksonville Jaguars</option>
                    <option value="KC">Kansas City Chiefs</option>
                    <option value="MIA">Miami Dolphins</option>
                    <option value="MIN">Minnesota Vikings</option>
                    <option value="NE">New England Patriots</option>
                    <option value="NO">New Orleans Saints</option>
                    <option value="NYG">New York Giants</option>
                    <option value="NYJ">New York Jets</option>
                    <option value="OAK">Oakland Raiders</option>
                    <option value="PHI">Philadelphia Eagles</option>
                    <option value="PIT">Pittsburgh Steelers</option>
                    <option value="SD">San Diego Chargers</option>
                    <option value="SF">San Francisco 49ers</option>
                    <option value="SEA">Seattle Seahawks</option>
                    <option value="STL">St. Louis Rams</option>
                    <option value="TB">Tampa Bay Buccaneers</option>
                    <option value="TEN">Tennessee Titans</option>
                    <option value="WAS">Washington Redskins</option>
                </select>
            </div>
        )
    }
});

module.exports = TeamSelect;