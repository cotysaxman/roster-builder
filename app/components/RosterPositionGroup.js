/**
 * Created by Coty-Saxman on 7/6/2015.
 */
var React = require('react');
var Player = require('./Player');

var RosterPositionGroup = React.createClass({
    propTypes: {
        group: React.PropTypes.string.isRequired
    },
    render: function(){
        var posPlayers = [];
        var fullRoster = window.ROSTER_BUILDER_DATA[window.ROSTER_BUILDER_DATA.team].roster;
        for(var i = 0; i < fullRoster.length; i++){
            var player = window.ROSTER_BUILDER_DATA.players[fullRoster[i]];
            if(player['Position'] == this.props.group){
                posPlayers.push(player);
            }
        }
        var list = posPlayers.map(function(player, index){
            return <li className="list-group-item"><Player key={index} player={player} /></li>
        });
        return (
            <ul className="list-group">
                {list}
            </ul>
        )
    }
});

module.exports = RosterPositionGroup;