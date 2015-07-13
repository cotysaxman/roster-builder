/**
 * Created by Coty-Saxman on 7/6/2015.
 */
var React = require('react');
var RosterPositionGroup = require('./RosterPositionGroup');

var Roster = React.createClass({
    render: function(){
        return (
            <table>
                <tr><th>Offense</th></tr>
                <tr>
                    <td><RosterPositionGroup group={"QB"}
                                             team={this.props.team}
                                             roster={this.props.roster}
                                             rosterUpdate={this.props.rosterUpdate} /></td>
                    <td><RosterPositionGroup group={"RB"}
                                             team={this.props.team}
                                             roster={this.props.roster}
                                             rosterUpdate={this.props.rosterUpdate} /></td>
                    <td><RosterPositionGroup group={"FB"}
                                             team={this.props.team}
                                             roster={this.props.roster}
                                             rosterUpdate={this.props.rosterUpdate} /></td>
                    <td><RosterPositionGroup group={"WR"}
                                             team={this.props.team}
                                             roster={this.props.roster}
                                             rosterUpdate={this.props.rosterUpdate} /></td>
                    <td><RosterPositionGroup group={"TE"}
                                             team={this.props.team}
                                             roster={this.props.roster}
                                             rosterUpdate={this.props.rosterUpdate} /></td>
                    <td><RosterPositionGroup group={"OT"}
                                             team={this.props.team}
                                             roster={this.props.roster}
                                             rosterUpdate={this.props.rosterUpdate} /></td>
                    <td><RosterPositionGroup group={"OG"}
                                             team={this.props.team}
                                             roster={this.props.roster}
                                             rosterUpdate={this.props.rosterUpdate} /></td>
                    <td><RosterPositionGroup group={"OC"}
                                             team={this.props.team}
                                             roster={this.props.roster}
                                             rosterUpdate={this.props.rosterUpdate} /></td>
                </tr>
                <tr><th>Defense</th></tr>
                <tr>
                    <td><RosterPositionGroup group={"DT"}
                                             team={this.props.team}
                                             roster={this.props.roster}
                                             rosterUpdate={this.props.rosterUpdate} /></td>
                    <td><RosterPositionGroup group={"DE"}
                                             team={this.props.team}
                                             roster={this.props.roster}
                                             rosterUpdate={this.props.rosterUpdate} /></td>
                    <td><RosterPositionGroup group={"ILB"}
                                             team={this.props.team}
                                             roster={this.props.roster}
                                             rosterUpdate={this.props.rosterUpdate} /></td>
                    <td><RosterPositionGroup group={"OLB"}
                                             team={this.props.team}
                                             roster={this.props.roster}
                                             rosterUpdate={this.props.rosterUpdate} /></td>
                    <td><RosterPositionGroup group={"CB"}
                                             team={this.props.team}
                                             roster={this.props.roster}
                                             rosterUpdate={this.props.rosterUpdate} /></td>
                    <td><RosterPositionGroup group={"FS"}
                                             team={this.props.team}
                                             roster={this.props.roster}
                                             rosterUpdate={this.props.rosterUpdate} /></td>
                    <td><RosterPositionGroup group={"SS"}
                                             team={this.props.team}
                                             roster={this.props.roster}
                                             rosterUpdate={this.props.rosterUpdate} /></td>
                </tr>
                <tr><th>Special Teams</th></tr>
                <tr>
                    <td><RosterPositionGroup group={"LS"}
                                             team={this.props.team}
                                             roster={this.props.roster}
                                             rosterUpdate={this.props.rosterUpdate} /></td>
                    <td><RosterPositionGroup group={"P"}
                                             team={this.props.team}
                                             roster={this.props.roster}
                                             rosterUpdate={this.props.rosterUpdate} /></td>
                    <td><RosterPositionGroup group={"PK"}
                                             team={this.props.team}
                                             roster={this.props.roster}
                                             rosterUpdate={this.props.rosterUpdate} /></td>
                </tr>
            </table>
        )
    }
});

module.exports = Roster;