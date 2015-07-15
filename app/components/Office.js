/**
 * Created by Coty-Saxman on 7/7/2015.
 */
var React = require('react');
var Navigation = require('./Navigation');
var Roster = require('./Roster');
var DepthChart = require('./DepthChart');
var Router = require('react-router');
var ReactFireMixin = require('reactfire');
var Firebase = require('firebase');

var Office = React.createClass({
    mixins: [Router.State, ReactFireMixin],
    propTypes: {
        data: React.PropTypes.object.isRequired
    },
    getInitialState: function(){
        return {
            user: this.getParams().username,
            rosterOrDepthChart: null,
            roster: [],
            depthChart: [],
            salaryCap: {}
        }
    },
    resetUserData: function(){
        this.handleRosterUpdate(this.props.data['teams'][this.getParams().team]['roster']);
        this.handleDepthChartUpdate(this.props.data['teams'][this.getParams().team]['depth-chart']);
        this.handleSalaryCapUpdate(this.props.data['teams'][this.getParams().team]['salary-cap']);
    },
    componentDidMount: function(){
        this.ref = new Firebase('https://boiling-fire-929.firebaseio.com/roster-builder/users/');
        var childRef = this.ref.child(this.getParams().username + '/' + this.getParams().team);
        this.rosterRef = childRef.child('roster');
        this.depthChartRef = childRef.child('depth-chart');
        this.salaryCapRef = childRef.child('salary-cap');
        this.bindAsArray(this.rosterRef, 'roster');
        this.bindAsArray(this.depthChartRef, 'depthChart');
        this.bindAsObject(this.salaryCapRef, 'salaryCap');
    },
    componentWillUnmount: function(){
        this.unbind('roster');
        this.unbind('depthChart');
        this.unbind('salaryCap');
    },
    handleRosterUpdate: function(newRoster){
        this.rosterRef.set(newRoster);
    },
    handleDepthChartUpdate: function(newDepthChart){
        this.depthChartRef.set(newDepthChart);
    },
    handleSalaryCapUpdate: function(newSalaryCap){
        this.salaryCapRef.set(newSalaryCap);
    },
    gotoRoster: function(){
        if(!this.state.roster) this.resetUserData();
        this.setState({
            rosterOrDepthChart: 'roster'
        });
    },
    gotoDepthChart: function(){
        if(!this.state.roster) this.resetUserData();
        this.setState({
            rosterOrDepthChart: 'depth-chart'
        });
    },
    render: function(){
        var rosterOrDepthChart = ()=>{
            if(this.state.rosterOrDepthChart == 'roster'){
                return (
                    <Roster
                        data={this.props.data}
                        username={this.getParams().username}
                        team={this.getParams().team}
                        roster={this.state.roster}
                        rosterUpdate={this.handleRosterUpdate}
                        salaryCap={this.state.salaryCap}
                        salaryCapUpdate={this.handleSalaryCapUpdate} />
                )
            } else if(this.state.rosterOrDepthChart == 'depth-chart'){
                return (
                    <DepthChart
                        data={this.props.data}
                        username={this.getParams().username}
                        team={this.getParams().team}
                        depthChart={this.state.depthChart}
                        depthChartUpdate={this.handleDepthChartUpdate}
                        salaryCap={this.state.salaryCap}
                        salaryCapUpdate={this.handleSalaryCapUpdate} />
                )
            } else {
                return (
                    <div />
                )
            }
        };
        return (
            <div>
                <div>
                    <Navigation
                        data={this.props.data}
                        gotoRoster={this.gotoRoster}
                        gotoDepthChart={this.gotoDepthChart} />
                    <button onClick={this.resetUserData}>Reset Roster/Depth Chart Data</button>
                </div>
                <div>
                    {rosterOrDepthChart()}
                </div>
            </div>
        )
    }
});

module.exports = Office;