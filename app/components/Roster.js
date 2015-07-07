/**
 * Created by Coty-Saxman on 7/6/2015.
 */
var React = require('react');
var RosterPositionGroup = require('./RosterPositionGroup');

var Roster = React.createClass({
    getInitialState: function(){
        return {
            depthChart: []
        }
    },
    setDepthChart: function(){
        if(window.ROSTER_BUILDER_DATA && window.ROSTER_BUILDER_DATA.depthChart) {
            this.setState({
                depthChart: window.ROSTER_BUILDER_DATA.depthChart
            });
        } else {
            setTimeout(this.setDepthChart, 100);
            console.log('waiting for data');
        }
    },
    componentDidMount: function(){
        setTimeout(this.setDepthChart, 0);
    },
    render: function(){
        return (
            <div>
                <RosterPositionGroup group={this.state.depthChart.QB} />
            </div>
        )
    }
});

module.exports = Roster;