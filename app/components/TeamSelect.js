/**
 * Created by Coty-Saxman on 7/7/2015.
 */
var React = require('react');
var Router = require('react-router');
var helpers = require('../utils/helpers');

var TeamSelect = React.createClass({
    mixins: [Router.Navigation],
    propTypes: {
        data: React.PropTypes.object.isRequired
    },
    handleSubmit: function(){
        var username = this.refs.username.getDOMNode().value;
        var team = this.refs.teamSelect.getDOMNode().value;
        this.props.data['team'] = team;

        //DOWNLOAD CODE//
        var roster = (this.props.data['teams'][team].roster);
        console.log(roster);
        //if(!roster){
        //    helpers.roster(team);
        //    console.log("downloading team: " + team);
        //} else for(var i = 0; i < roster.length; i++){
        //    var id = roster[i];
        //    if(!this.props.data.players[id] ||
        //        !this.props.data.players[id]['Current Salary'] ||
        //        !this.props.data.players[id]['Img URL'] ||
        //        !this.props.data.players[id]['key']){
        //        helpers.player(id);
        //        console.log("downloading player: " + id);
        //    }
        //}
        this.transitionTo('office', {username: username, team: team});
    },
    render: function(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <select id="teamSelectDropdown" ref="teamSelect">
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
                    <div>
                        <input type="text" ref="username" />
                    </div>
                    <div>
                        <button type="submit">To the Office</button>
                    </div>
                </form>
            </div>
        )
    }
});

module.exports = TeamSelect;