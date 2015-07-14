/**
 * Created by Coty-Saxman on 7/6/2015.
 */
var React = require('react');
var RosterPositionGroup = require('./RosterPositionGroup');

var Roster = React.createClass({
    render: function(){
        return (
            <div class="row-md-12">
                <div class="col-md-8">
                    <table>
                        <tr><th>Offense</th></tr>
                        <tr>
                            <td><RosterPositionGroup group={"QB"}
                                                     data={this.props.data}
                                                     team={this.props.team}
                                                     roster={this.props.roster}
                                                     rosterUpdate={this.props.rosterUpdate}
                                                     salaryCap={this.props.salaryCap}
                                                     salaryCapUpdate={this.props.salaryCapUpdate} /></td>
                            <td><RosterPositionGroup group={"RB"}
                                                     data={this.props.data}
                                                     team={this.props.team}
                                                     roster={this.props.roster}
                                                     rosterUpdate={this.props.rosterUpdate}
                                                     salaryCap={this.props.salaryCap}
                                                     salaryCapUpdate={this.props.salaryCapUpdate} /></td>
                            <td><RosterPositionGroup group={"FB"}
                                                     data={this.props.data}
                                                     team={this.props.team}
                                                     roster={this.props.roster}
                                                     rosterUpdate={this.props.rosterUpdate}
                                                     salaryCap={this.props.salaryCap}
                                                     salaryCapUpdate={this.props.salaryCapUpdate} /></td>
                            <td><RosterPositionGroup group={"WR"}
                                                     data={this.props.data}
                                                     team={this.props.team}
                                                     roster={this.props.roster}
                                                     rosterUpdate={this.props.rosterUpdate}
                                                     salaryCap={this.props.salaryCap}
                                                     salaryCapUpdate={this.props.salaryCapUpdate} /></td>
                            <td><RosterPositionGroup group={"TE"}
                                                     data={this.props.data}
                                                     team={this.props.team}
                                                     roster={this.props.roster}
                                                     rosterUpdate={this.props.rosterUpdate}
                                                     salaryCap={this.props.salaryCap}
                                                     salaryCapUpdate={this.props.salaryCapUpdate} /></td>
                            <td><RosterPositionGroup group={"OT"}
                                                     data={this.props.data}
                                                     team={this.props.team}
                                                     roster={this.props.roster}
                                                     rosterUpdate={this.props.rosterUpdate}
                                                     salaryCap={this.props.salaryCap}
                                                     salaryCapUpdate={this.props.salaryCapUpdate} /></td>
                            <td><RosterPositionGroup group={"OG"}
                                                     data={this.props.data}
                                                     team={this.props.team}
                                                     roster={this.props.roster}
                                                     rosterUpdate={this.props.rosterUpdate}
                                                     salaryCap={this.props.salaryCap}
                                                     salaryCapUpdate={this.props.salaryCapUpdate} /></td>
                            <td><RosterPositionGroup group={"OC"}
                                                     data={this.props.data}
                                                     team={this.props.team}
                                                     roster={this.props.roster}
                                                     rosterUpdate={this.props.rosterUpdate}
                                                     salaryCap={this.props.salaryCap}
                                                     salaryCapUpdate={this.props.salaryCapUpdate} /></td>
                        </tr>
                        <tr><th>Defense</th></tr>
                        <tr>
                            <td><RosterPositionGroup group={"DT"}
                                                     data={this.props.data}
                                                     team={this.props.team}
                                                     roster={this.props.roster}
                                                     rosterUpdate={this.props.rosterUpdate}
                                                     salaryCap={this.props.salaryCap}
                                                     salaryCapUpdate={this.props.salaryCapUpdate} /></td>
                            <td><RosterPositionGroup group={"DE"}
                                                     data={this.props.data}
                                                     team={this.props.team}
                                                     roster={this.props.roster}
                                                     rosterUpdate={this.props.rosterUpdate}
                                                     salaryCap={this.props.salaryCap}
                                                     salaryCapUpdate={this.props.salaryCapUpdate} /></td>
                            <td><RosterPositionGroup group={"ILB"}
                                                     data={this.props.data}
                                                     team={this.props.team}
                                                     roster={this.props.roster}
                                                     rosterUpdate={this.props.rosterUpdate}
                                                     salaryCap={this.props.salaryCap}
                                                     salaryCapUpdate={this.props.salaryCapUpdate} /></td>
                            <td><RosterPositionGroup group={"OLB"}
                                                     data={this.props.data}
                                                     team={this.props.team}
                                                     roster={this.props.roster}
                                                     rosterUpdate={this.props.rosterUpdate}
                                                     salaryCap={this.props.salaryCap}
                                                     salaryCapUpdate={this.props.salaryCapUpdate} /></td>
                            <td><RosterPositionGroup group={"CB"}
                                                     data={this.props.data}
                                                     team={this.props.team}
                                                     roster={this.props.roster}
                                                     rosterUpdate={this.props.rosterUpdate}
                                                     salaryCap={this.props.salaryCap}
                                                     salaryCapUpdate={this.props.salaryCapUpdate} /></td>
                            <td><RosterPositionGroup group={"FS"}
                                                     data={this.props.data}
                                                     team={this.props.team}
                                                     roster={this.props.roster}
                                                     rosterUpdate={this.props.rosterUpdate}
                                                     salaryCap={this.props.salaryCap}
                                                     salaryCapUpdate={this.props.salaryCapUpdate} /></td>
                            <td><RosterPositionGroup group={"SS"}
                                                     data={this.props.data}
                                                     team={this.props.team}
                                                     roster={this.props.roster}
                                                     rosterUpdate={this.props.rosterUpdate}
                                                     salaryCap={this.props.salaryCap}
                                                     salaryCapUpdate={this.props.salaryCapUpdate} /></td>
                        </tr>
                        <tr><th>Special Teams</th></tr>
                        <tr>
                            <td><RosterPositionGroup group={"LS"}
                                                     data={this.props.data}
                                                     team={this.props.team}
                                                     roster={this.props.roster}
                                                     rosterUpdate={this.props.rosterUpdate}
                                                     salaryCap={this.props.salaryCap}
                                                     salaryCapUpdate={this.props.salaryCapUpdate} /></td>
                            <td><RosterPositionGroup group={"P"}
                                                     data={this.props.data}
                                                     team={this.props.team}
                                                     roster={this.props.roster}
                                                     rosterUpdate={this.props.rosterUpdate}
                                                     salaryCap={this.props.salaryCap}
                                                     salaryCapUpdate={this.props.salaryCapUpdate} /></td>
                            <td><RosterPositionGroup group={"PK"}
                                                     data={this.props.data}
                                                     team={this.props.team}
                                                     roster={this.props.roster}
                                                     rosterUpdate={this.props.rosterUpdate}
                                                     salaryCap={this.props.salaryCap}
                                                     salaryCapUpdate={this.props.salaryCapUpdate} /></td>
                        </tr>
                    </table>
                </div>
                <div class="col-md-4">
                    <div>Salary Cap</div>
                    <table>
                        <tr>
                            <td>Contract Value</td><td>{parseInt(this.props.salaryCap['Total Salary'], 10)}</td>
                        </tr>
                        <tr>
                            <td>Dead Money Value</td><td>{parseInt(this.props.salaryCap['Dead Money'], 10)}</td>
                        </tr>
                        <tr>
                            <td>Total Cap Expenditure</td><td>{parseInt(this.props.salaryCap['Total Salary'], 10) + parseInt(this.props.salaryCap['Dead Money'], 10)}</td>
                        </tr>
                        <tr>
                            <td>Adjusted Cap Space</td><td>{this.props.salaryCap['Adjusted Cap']}</td>
                        </tr>
                        <tr>
                            <td>Remaining Cap Space</td><td>{this.props.salaryCap['Adjusted Cap'] - (parseInt(this.props.salaryCap['Total Salary'], 10) + parseInt(this.props.salaryCap['Dead Money'], 10))}</td>
                        </tr>
                    </table>
                </div>
            </div>
        )
    }
});

module.exports = Roster;