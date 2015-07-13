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
                                             data={this.props.data}
                                             team={this.props.team}
                                             roster={this.props.roster}
                                             rosterUpdate={this.props.rosterUpdate} /></td>
                    <td><RosterPositionGroup group={"RB"}
                                             data={this.props.data}
                                             team={this.props.team}
                                             roster={this.props.roster}
                                             rosterUpdate={this.props.rosterUpdate} /></td>
                    <td><RosterPositionGroup group={"FB"}
                                             data={this.props.data}
                                             team={this.props.team}
                                             roster={this.props.roster}
                                             rosterUpdate={this.props.rosterUpdate} /></td>
                    <td><RosterPositionGroup group={"WR"}
                                             data={this.props.data}
                                             team={this.props.team}
                                             roster={this.props.roster}
                                             rosterUpdate={this.props.rosterUpdate} /></td>
                    <td><RosterPositionGroup group={"TE"}
                                             data={this.props.data}
                                             team={this.props.team}
                                             roster={this.props.roster}
                                             rosterUpdate={this.props.rosterUpdate} /></td>
                    <td><RosterPositionGroup group={"OT"}
                                             data={this.props.data}
                                             team={this.props.team}
                                             roster={this.props.roster}
                                             rosterUpdate={this.props.rosterUpdate} /></td>
                    <td><RosterPositionGroup group={"OG"}
                                             data={this.props.data}
                                             team={this.props.team}
                                             roster={this.props.roster}
                                             rosterUpdate={this.props.rosterUpdate} /></td>
                    <td><RosterPositionGroup group={"OC"}
                                             data={this.props.data}
                                             team={this.props.team}
                                             roster={this.props.roster}
                                             rosterUpdate={this.props.rosterUpdate} /></td>
                </tr>
                <tr><th>Defense</th></tr>
                <tr>
                    <td><RosterPositionGroup group={"DT"}
                                             data={this.props.data}
                                             team={this.props.team}
                                             roster={this.props.roster}
                                             rosterUpdate={this.props.rosterUpdate} /></td>
                    <td><RosterPositionGroup group={"DE"}
                                             data={this.props.data}
                                             team={this.props.team}
                                             roster={this.props.roster}
                                             rosterUpdate={this.props.rosterUpdate} /></td>
                    <td><RosterPositionGroup group={"ILB"}
                                             data={this.props.data}
                                             team={this.props.team}
                                             roster={this.props.roster}
                                             rosterUpdate={this.props.rosterUpdate} /></td>
                    <td><RosterPositionGroup group={"OLB"}
                                             data={this.props.data}
                                             team={this.props.team}
                                             roster={this.props.roster}
                                             rosterUpdate={this.props.rosterUpdate} /></td>
                    <td><RosterPositionGroup group={"CB"}
                                             data={this.props.data}
                                             team={this.props.team}
                                             roster={this.props.roster}
                                             rosterUpdate={this.props.rosterUpdate} /></td>
                    <td><RosterPositionGroup group={"FS"}
                                             data={this.props.data}
                                             team={this.props.team}
                                             roster={this.props.roster}
                                             rosterUpdate={this.props.rosterUpdate} /></td>
                    <td><RosterPositionGroup group={"SS"}
                                             data={this.props.data}
                                             team={this.props.team}
                                             roster={this.props.roster}
                                             rosterUpdate={this.props.rosterUpdate} /></td>
                </tr>
                <tr><th>Special Teams</th></tr>
                <tr>
                    <td><RosterPositionGroup group={"LS"}
                                             data={this.props.data}
                                             team={this.props.team}
                                             roster={this.props.roster}
                                             rosterUpdate={this.props.rosterUpdate} /></td>
                    <td><RosterPositionGroup group={"P"}
                                             data={this.props.data}
                                             team={this.props.team}
                                             roster={this.props.roster}
                                             rosterUpdate={this.props.rosterUpdate} /></td>
                    <td><RosterPositionGroup group={"PK"}
                                             data={this.props.data}
                                             team={this.props.team}
                                             roster={this.props.roster}
                                             rosterUpdate={this.props.rosterUpdate} /></td>
                </tr>
            </table>
        )
    }
});

module.exports = Roster;