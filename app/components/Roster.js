/**
 * Created by Coty-Saxman on 7/6/2015.
 */
var React = require('react');
var RosterPositionGroup = require('./RosterPositionGroup');

var Roster = React.createClass({
    render: function(){
        return (
            <div className="roster_parent">
                <div className="roster_table">
                    <table>
                        <tr><th colSpan="8">Offense</th></tr>
                        <tr>
                            <td className="roster_column"><RosterPositionGroup group={"QB"}
                                                     data={this.props.data}
                                                     team={this.props.team}
                                                     roster={this.props.roster}
                                                     rosterUpdate={this.props.rosterUpdate}
                                                     salaryCap={this.props.salaryCap}
                                                     salaryCapUpdate={this.props.salaryCapUpdate} /></td>
                            <td className="roster_column"><RosterPositionGroup group={"RB"}
                                                     data={this.props.data}
                                                     team={this.props.team}
                                                     roster={this.props.roster}
                                                     rosterUpdate={this.props.rosterUpdate}
                                                     salaryCap={this.props.salaryCap}
                                                     salaryCapUpdate={this.props.salaryCapUpdate} /></td>
                            <td className="roster_column"><RosterPositionGroup group={"FB"}
                                                     data={this.props.data}
                                                     team={this.props.team}
                                                     roster={this.props.roster}
                                                     rosterUpdate={this.props.rosterUpdate}
                                                     salaryCap={this.props.salaryCap}
                                                     salaryCapUpdate={this.props.salaryCapUpdate} /></td>
                            <td className="roster_column"><RosterPositionGroup group={"WR"}
                                                     data={this.props.data}
                                                     team={this.props.team}
                                                     roster={this.props.roster}
                                                     rosterUpdate={this.props.rosterUpdate}
                                                     salaryCap={this.props.salaryCap}
                                                     salaryCapUpdate={this.props.salaryCapUpdate} /></td>
                            <td className="roster_column"><RosterPositionGroup group={"TE"}
                                                     data={this.props.data}
                                                     team={this.props.team}
                                                     roster={this.props.roster}
                                                     rosterUpdate={this.props.rosterUpdate}
                                                     salaryCap={this.props.salaryCap}
                                                     salaryCapUpdate={this.props.salaryCapUpdate} /></td>
                            <td className="roster_column"><RosterPositionGroup group={"OT"}
                                                     data={this.props.data}
                                                     team={this.props.team}
                                                     roster={this.props.roster}
                                                     rosterUpdate={this.props.rosterUpdate}
                                                     salaryCap={this.props.salaryCap}
                                                     salaryCapUpdate={this.props.salaryCapUpdate} /></td>
                            <td className="roster_column"><RosterPositionGroup group={"OG"}
                                                     data={this.props.data}
                                                     team={this.props.team}
                                                     roster={this.props.roster}
                                                     rosterUpdate={this.props.rosterUpdate}
                                                     salaryCap={this.props.salaryCap}
                                                     salaryCapUpdate={this.props.salaryCapUpdate} /></td>
                            <td className="roster_column"><RosterPositionGroup group={"OC"}
                                                     data={this.props.data}
                                                     team={this.props.team}
                                                     roster={this.props.roster}
                                                     rosterUpdate={this.props.rosterUpdate}
                                                     salaryCap={this.props.salaryCap}
                                                     salaryCapUpdate={this.props.salaryCapUpdate} /></td>
                        </tr>
                        <tr><th colSpan="8">Defense</th></tr>
                        <tr className="column_shift">
                            <td className="roster_column"><RosterPositionGroup group={"DT"}
                                                     data={this.props.data}
                                                     team={this.props.team}
                                                     roster={this.props.roster}
                                                     rosterUpdate={this.props.rosterUpdate}
                                                     salaryCap={this.props.salaryCap}
                                                     salaryCapUpdate={this.props.salaryCapUpdate} /></td>
                            <td className="roster_column"><RosterPositionGroup group={"DE"}
                                                     data={this.props.data}
                                                     team={this.props.team}
                                                     roster={this.props.roster}
                                                     rosterUpdate={this.props.rosterUpdate}
                                                     salaryCap={this.props.salaryCap}
                                                     salaryCapUpdate={this.props.salaryCapUpdate} /></td>
                            <td className="roster_column"><RosterPositionGroup group={"ILB"}
                                                     data={this.props.data}
                                                     team={this.props.team}
                                                     roster={this.props.roster}
                                                     rosterUpdate={this.props.rosterUpdate}
                                                     salaryCap={this.props.salaryCap}
                                                     salaryCapUpdate={this.props.salaryCapUpdate} /></td>
                            <td className="roster_column"><RosterPositionGroup group={"OLB"}
                                                     data={this.props.data}
                                                     team={this.props.team}
                                                     roster={this.props.roster}
                                                     rosterUpdate={this.props.rosterUpdate}
                                                     salaryCap={this.props.salaryCap}
                                                     salaryCapUpdate={this.props.salaryCapUpdate} /></td>
                            <td className="roster_column"><RosterPositionGroup group={"CB"}
                                                     data={this.props.data}
                                                     team={this.props.team}
                                                     roster={this.props.roster}
                                                     rosterUpdate={this.props.rosterUpdate}
                                                     salaryCap={this.props.salaryCap}
                                                     salaryCapUpdate={this.props.salaryCapUpdate} /></td>
                            <td className="roster_column"><RosterPositionGroup group={"FS"}
                                                     data={this.props.data}
                                                     team={this.props.team}
                                                     roster={this.props.roster}
                                                     rosterUpdate={this.props.rosterUpdate}
                                                     salaryCap={this.props.salaryCap}
                                                     salaryCapUpdate={this.props.salaryCapUpdate} /></td>
                            <td className="roster_column"><RosterPositionGroup group={"SS"}
                                                     data={this.props.data}
                                                     team={this.props.team}
                                                     roster={this.props.roster}
                                                     rosterUpdate={this.props.rosterUpdate}
                                                     salaryCap={this.props.salaryCap}
                                                     salaryCapUpdate={this.props.salaryCapUpdate} /></td>
                        </tr>
                        <tr><th colSpan="8">Special Teams</th></tr>
                        <tr className="column_shift">
                            <td colSpan="2"></td>
                            <td className="roster_column"><RosterPositionGroup group={"LS"}
                                                     data={this.props.data}
                                                     team={this.props.team}
                                                     roster={this.props.roster}
                                                     rosterUpdate={this.props.rosterUpdate}
                                                     salaryCap={this.props.salaryCap}
                                                     salaryCapUpdate={this.props.salaryCapUpdate} /></td>
                            <td className="roster_column"><RosterPositionGroup group={"P"}
                                                     data={this.props.data}
                                                     team={this.props.team}
                                                     roster={this.props.roster}
                                                     rosterUpdate={this.props.rosterUpdate}
                                                     salaryCap={this.props.salaryCap}
                                                     salaryCapUpdate={this.props.salaryCapUpdate} /></td>
                            <td className="roster_column"><RosterPositionGroup group={"PK"}
                                                     data={this.props.data}
                                                     team={this.props.team}
                                                     roster={this.props.roster}
                                                     rosterUpdate={this.props.rosterUpdate}
                                                     salaryCap={this.props.salaryCap}
                                                     salaryCapUpdate={this.props.salaryCapUpdate} /></td>
                        </tr>
                    </table>
                </div>
                <div className="salary_cap_table">
                    <table>
                        <tr>
                            <th colSpan="2" className="center">Salary Cap</th>
                        </tr>
                        <tr>
                            <td className="left">Contract Value</td><td className="right">{parseInt(this.props.salaryCap['Total Salary'], 10)}</td>
                        </tr>
                        <tr>
                            <td className="left">Dead Money Value</td><td className="right">{parseInt(this.props.salaryCap['Dead Money'], 10)}</td>
                        </tr>
                        <tr>
                            <td className="left">Total Cap Expenditure</td><td className="right">{parseInt(this.props.salaryCap['Total Salary'], 10) + parseInt(this.props.salaryCap['Dead Money'], 10)}</td>
                        </tr>
                        <tr>
                            <td className="left">Adjusted Cap Space</td><td className="right">{this.props.salaryCap['Adjusted Cap']}</td>
                        </tr>
                        <tr>
                            <td className="left">Remaining Cap Space</td><td className="right">{this.props.salaryCap['Adjusted Cap'] - (parseInt(this.props.salaryCap['Total Salary'], 10) + parseInt(this.props.salaryCap['Dead Money'], 10))}</td>
                        </tr>
                    </table>
                </div>
            </div>
        )
    }
});

module.exports = Roster;