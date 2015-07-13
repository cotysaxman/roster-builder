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
            depthChart: []
        }
    },
    componentDidMount: function(){
        this.ref = new Firebase('https://boiling-fire-929.firebaseio.com/roster-builder/users/');
        var childRef = this.ref.child(this.getParams().username + '/' + this.getParams().team);
        this.rosterRef = childRef.child('roster');
        this.depthChartRef = childRef.child('depth-chart');
        this.bindAsArray(this.rosterRef, 'roster');
        this.bindAsArray(this.depthChartRef, 'depthChart');
        if(this.state.roster.length == 0) this.handleRosterUpdate(this.props.data['teams'][this.getParams().team]['roster']);
        if(this.state.depthChart.length == 0) this.handleDepthChartUpdate(this.props.data['teams'][this.getParams().team]['depth-chart']);
    },
    componentWillUnmount: function(){
        this.unbind('roster');
        this.unbind('depthChart');
    },
    handleRosterUpdate: function(newRoster){
        this.rosterRef.set(newRoster);
    },
    handleDepthChartUpdate: function(newDepthChart){
        this.depthChartRef.set(newDepthChart);
    },
    gotoRoster: function(){
        this.setState({
            rosterOrDepthChart: 'roster'
        });
    },
    gotoDepthChart: function(){
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
                        rosterUpdate={this.handleRosterUpdate} />
                )
            } else if(this.state.rosterOrDepthChart == 'depth-chart'){
                return (
                    <DepthChart
                        data={this.props.data}
                        username={this.getParams().username}
                        team={this.getParams().team}
                        depthChart={this.state.depthChart}
                        depthChartUpdate={this.handleDepthChartUpdate} />
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
                </div>
                <div>
                    {rosterOrDepthChart()}
                </div>
            </div>
        )
    }
});

module.exports = Office;