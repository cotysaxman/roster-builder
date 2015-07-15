/**
 * Created by Coty-Saxman on 7/6/2015.
 */
var React = require('react');
var RosterPositionGroup = require('./RosterPositionGroup');

var Roster = React.createClass({
    render: function(){
        var contractVal = parseInt(this.props.salaryCap['Total Salary'], 10);
        var deadMoney = parseInt(this.props.salaryCap['Dead Money'], 10);
        var capTotalSpend = contractVal + deadMoney;
        var adjustedCap = this.props.salaryCap['Adjusted Cap'];
        var capSpace = adjustedCap - capTotalSpend;
        return (
            <div className="roster_parent">
                <table className="roster_table">
                    <caption>Roster</caption>
                    <tr><th colSpan="16">Offense</th></tr>
                    <tr>
                        <th colSpan="6">Offensive Backs</th>
                        <th colSpan="4">Receivers</th>
                        <th colSpan="6">Offensive Linemen</th>
                    </tr>
                    <tr>
                        <td colSpan="2" className="roster_column"><RosterPositionGroup group={"QB"}
                                                 data={this.props.data}
                                                 team={this.props.team}
                                                 roster={this.props.roster}
                                                 rosterUpdate={this.props.rosterUpdate}
                                                 salaryCap={this.props.salaryCap}
                                                 salaryCapUpdate={this.props.salaryCapUpdate} /></td>
                        <td colSpan="2" className="roster_column"><RosterPositionGroup group={"RB"}
                                                 data={this.props.data}
                                                 team={this.props.team}
                                                 roster={this.props.roster}
                                                 rosterUpdate={this.props.rosterUpdate}
                                                 salaryCap={this.props.salaryCap}
                                                 salaryCapUpdate={this.props.salaryCapUpdate} /></td>
                        <td colSpan="2" className="roster_column"><RosterPositionGroup group={"FB"}
                                                 data={this.props.data}
                                                 team={this.props.team}
                                                 roster={this.props.roster}
                                                 rosterUpdate={this.props.rosterUpdate}
                                                 salaryCap={this.props.salaryCap}
                                                 salaryCapUpdate={this.props.salaryCapUpdate} /></td>
                        <td colSpan="2" className="roster_column"><RosterPositionGroup group={"WR"}
                                                 data={this.props.data}
                                                 team={this.props.team}
                                                 roster={this.props.roster}
                                                 rosterUpdate={this.props.rosterUpdate}
                                                 salaryCap={this.props.salaryCap}
                                                 salaryCapUpdate={this.props.salaryCapUpdate} /></td>
                        <td colSpan="2" className="roster_column"><RosterPositionGroup group={"TE"}
                                                 data={this.props.data}
                                                 team={this.props.team}
                                                 roster={this.props.roster}
                                                 rosterUpdate={this.props.rosterUpdate}
                                                 salaryCap={this.props.salaryCap}
                                                 salaryCapUpdate={this.props.salaryCapUpdate} /></td>
                        <td colSpan="2" className="roster_column"><RosterPositionGroup group={"OT"}
                                                 data={this.props.data}
                                                 team={this.props.team}
                                                 roster={this.props.roster}
                                                 rosterUpdate={this.props.rosterUpdate}
                                                 salaryCap={this.props.salaryCap}
                                                 salaryCapUpdate={this.props.salaryCapUpdate} /></td>
                        <td colSpan="2" className="roster_column"><RosterPositionGroup group={"OG"}
                                                 data={this.props.data}
                                                 team={this.props.team}
                                                 roster={this.props.roster}
                                                 rosterUpdate={this.props.rosterUpdate}
                                                 salaryCap={this.props.salaryCap}
                                                 salaryCapUpdate={this.props.salaryCapUpdate} /></td>
                        <td colSpan="2" className="roster_column"><RosterPositionGroup group={"OC"}
                                                 data={this.props.data}
                                                 team={this.props.team}
                                                 roster={this.props.roster}
                                                 rosterUpdate={this.props.rosterUpdate}
                                                 salaryCap={this.props.salaryCap}
                                                 salaryCapUpdate={this.props.salaryCapUpdate} /></td>
                    </tr>
                    <tr><th colSpan="16">Defense</th></tr>
                    <tr>
                        <td></td>
                        <th colSpan="4">Rushmen</th>
                        <th colSpan="4">Linebackers</th>
                        <th colSpan="6">Defensive Backs</th>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td colSpan="2" className="roster_column"><RosterPositionGroup group={"DT"}
                                                 data={this.props.data}
                                                 team={this.props.team}
                                                 roster={this.props.roster}
                                                 rosterUpdate={this.props.rosterUpdate}
                                                 salaryCap={this.props.salaryCap}
                                                 salaryCapUpdate={this.props.salaryCapUpdate} /></td>
                        <td colSpan="2" className="roster_column"><RosterPositionGroup group={"DE"}
                                                 data={this.props.data}
                                                 team={this.props.team}
                                                 roster={this.props.roster}
                                                 rosterUpdate={this.props.rosterUpdate}
                                                 salaryCap={this.props.salaryCap}
                                                 salaryCapUpdate={this.props.salaryCapUpdate} /></td>
                        <td colSpan="2" className="roster_column"><RosterPositionGroup group={"ILB"}
                                                 data={this.props.data}
                                                 team={this.props.team}
                                                 roster={this.props.roster}
                                                 rosterUpdate={this.props.rosterUpdate}
                                                 salaryCap={this.props.salaryCap}
                                                 salaryCapUpdate={this.props.salaryCapUpdate} /></td>
                        <td colSpan="2" className="roster_column"><RosterPositionGroup group={"OLB"}
                                                 data={this.props.data}
                                                 team={this.props.team}
                                                 roster={this.props.roster}
                                                 rosterUpdate={this.props.rosterUpdate}
                                                 salaryCap={this.props.salaryCap}
                                                 salaryCapUpdate={this.props.salaryCapUpdate} /></td>
                        <td colSpan="2" className="roster_column"><RosterPositionGroup group={"CB"}
                                                 data={this.props.data}
                                                 team={this.props.team}
                                                 roster={this.props.roster}
                                                 rosterUpdate={this.props.rosterUpdate}
                                                 salaryCap={this.props.salaryCap}
                                                 salaryCapUpdate={this.props.salaryCapUpdate} /></td>
                        <td colSpan="2" className="roster_column"><RosterPositionGroup group={"FS"}
                                                 data={this.props.data}
                                                 team={this.props.team}
                                                 roster={this.props.roster}
                                                 rosterUpdate={this.props.rosterUpdate}
                                                 salaryCap={this.props.salaryCap}
                                                 salaryCapUpdate={this.props.salaryCapUpdate} /></td>
                        <td colSpan="2" className="roster_column"><RosterPositionGroup group={"SS"}
                                                 data={this.props.data}
                                                 team={this.props.team}
                                                 roster={this.props.roster}
                                                 rosterUpdate={this.props.rosterUpdate}
                                                 salaryCap={this.props.salaryCap}
                                                 salaryCapUpdate={this.props.salaryCapUpdate} /></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th colSpan="8">Special Teams</th>
                        <th colSpan="8">Other</th>
                    </tr>
                    <tr>
                        <td></td>
                        <td colSpan="2" className="roster_column"><RosterPositionGroup group={"LS"}
                                                 data={this.props.data}
                                                 team={this.props.team}
                                                 roster={this.props.roster}
                                                 rosterUpdate={this.props.rosterUpdate}
                                                 salaryCap={this.props.salaryCap}
                                                 salaryCapUpdate={this.props.salaryCapUpdate} /></td>
                        <td colSpan="2" className="roster_column"><RosterPositionGroup group={"P"}
                                                 data={this.props.data}
                                                 team={this.props.team}
                                                 roster={this.props.roster}
                                                 rosterUpdate={this.props.rosterUpdate}
                                                 salaryCap={this.props.salaryCap}
                                                 salaryCapUpdate={this.props.salaryCapUpdate} /></td>
                        <td colSpan="2" className="roster_column"><RosterPositionGroup group={"PK"}
                                                 data={this.props.data}
                                                 team={this.props.team}
                                                 roster={this.props.roster}
                                                 rosterUpdate={this.props.rosterUpdate}
                                                 salaryCap={this.props.salaryCap}
                                                 salaryCapUpdate={this.props.salaryCapUpdate} /></td>
                        <td></td>
                        <td colSpan="2" className="roster_column"><RosterPositionGroup group={"Suspended"}
                                                                           data={this.props.data}
                                                                           team={this.props.team}
                                                                           roster={this.props.roster}
                                                                           rosterUpdate={this.props.rosterUpdate}
                                                                           salaryCap={this.props.salaryCap}
                                                                           salaryCapUpdate={this.props.salaryCapUpdate} /></td>
                        <td colSpan="2" className="roster_column"><RosterPositionGroup group={"Injured Reserve"}
                                                                           data={this.props.data}
                                                                           team={this.props.team}
                                                                           roster={this.props.roster}
                                                                           rosterUpdate={this.props.rosterUpdate}
                                                                           salaryCap={this.props.salaryCap}
                                                                           salaryCapUpdate={this.props.salaryCapUpdate} /></td>
                        <td colSpan="2" className="roster_column"><RosterPositionGroup group={"Retired"}
                                                                           data={this.props.data}
                                                                           team={this.props.team}
                                                                           roster={this.props.roster}
                                                                           rosterUpdate={this.props.rosterUpdate}
                                                                           salaryCap={this.props.salaryCap}
                                                                           salaryCapUpdate={this.props.salaryCapUpdate} /></td>
                        <td colSpan="2" className="roster_column"><RosterPositionGroup group={"Cut"}
                                                                           data={this.props.data}
                                                                           team={this.props.team}
                                                                           roster={this.props.roster}
                                                                           rosterUpdate={this.props.rosterUpdate}
                                                                           salaryCap={this.props.salaryCap}
                                                                           salaryCapUpdate={this.props.salaryCapUpdate} /></td>
                    </tr>
                </table>
                <table className="salary_cap_table">
                    <caption className="center">Salary Cap</caption>
                    <tr className="adjusted_cap">
                        <td className="left">Adjusted Cap Space</td>
                        <td className="right">${adjustedCap}</td>
                    </tr>
                    <tr>
                        <td className="left">Contract Value</td>
                        <td className="right">${contractVal}</td>
                    </tr>
                    <tr>
                        <td className="left">Dead Money Value</td>
                        <td className="right">${deadMoney}</td>
                    </tr>
                    <tr className="total_spend">
                        <td className="left">Total Cap Expenditure</td>
                        <td className="right">${capTotalSpend}</td>
                    </tr>
                    <tr className={capSpace > 0? "pos_cap_space" : "neg_cap_space"}>
                        <td className="left">Remaining Cap Space</td>
                        <td className="right">{capSpace > 0? "$" + capSpace : "-$" + (capSpace*-1)}</td>
                    </tr>
                </table>
            </div>
        )
    }
});

module.exports = Roster;