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
                    <td><RosterPositionGroup group={"QB"} /></td>
                    <td><RosterPositionGroup group={"RB"} /></td>
                    <td><RosterPositionGroup group={"FB"} /></td>
                    <td><RosterPositionGroup group={"WR"} /></td>
                    <td><RosterPositionGroup group={"TE"} /></td>
                    <td><RosterPositionGroup group={"OT"} /></td>
                    <td><RosterPositionGroup group={"OG"} /></td>
                    <td><RosterPositionGroup group={"OC"} /></td>
                </tr>
                <tr><th>Defense</th></tr>
                <tr>
                    <td><RosterPositionGroup group={"DT"} /></td>
                    <td><RosterPositionGroup group={"DE"} /></td>
                    <td><RosterPositionGroup group={"ILB"} /></td>
                    <td><RosterPositionGroup group={"OLB"} /></td>
                    <td><RosterPositionGroup group={"CB"} /></td>
                    <td><RosterPositionGroup group={"FS"} /></td>
                    <td><RosterPositionGroup group={"SS"} /></td>
                </tr>
                <tr><th>Special Teams</th></tr>
                <tr>
                    <td><RosterPositionGroup group={"LS"} /></td>
                    <td><RosterPositionGroup group={"P"} /></td>
                    <td><RosterPositionGroup group={"PK"} /></td>
                </tr>
            </table>
        )
    }
});

module.exports = Roster;