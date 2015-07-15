/**
 * Created by Coty-Saxman on 7/6/2015.
 */
var React = require('react');
var Player = require('./Player');

var RosterPositionGroup = React.createClass({
    propTypes: {
        data: React.PropTypes.object.isRequired,
        group: React.PropTypes.string.isRequired,
        team: React.PropTypes.string.isRequired,
        roster: React.PropTypes.array.isRequired,
        rosterUpdate: React.PropTypes.func.isRequired,
        salaryCap: React.PropTypes.object.isRequired,
        salaryCapUpdate: React.PropTypes.func.isRequired
    },
    render: function(){
        var posPlayers = [];
        var fullRoster = this.props.roster;
        for(var i = 0; i < fullRoster.length; i++){
            var player = this.props.data.players[fullRoster[i]];
            if(player['Status'] == this.props.group ||
                (player['Position'] == this.props.group && (player['Status'] == "" || player['Status'] == "Franchise Player"))){
                posPlayers.push(player);
            }
        }
        var list = posPlayers.map((player, index)=>{
            return <div className="player center" key={index}><Player player={player} rosterUpdate={this.props.rosterUpdate} roster={this.props.roster} salaryCap={this.props.salaryCap} salaryCapUpdate={this.props.salaryCapUpdate} /></div>
        });
        return (
            <div>
                <div className="center"><b>{this.props.group} ({posPlayers.length})</b></div>
                {list}
            </div>
        )
    }
});

module.exports = RosterPositionGroup;