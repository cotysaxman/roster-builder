/**
 * Created by Coty-Saxman on 7/3/2015.
 */
var React = require('react');
var Router = require('react-router');
var Firebase = require('firebase');
var ThreePhases = require('./ThreePhases');
var FormationMenu = require('./FormationMenu');
var FormationDisplay = require('./FormationDisplay');
var helpers = require('../utils/helpers');

var DepthChart = React.createClass({
    getInitialState: function(){
        return {
            team: 'DAL',
            depthChart: []
        }
    },
    componentDidMount: function(){
        this.ref = new Firebase('https://boiling-fire-929.firebaseio.com/roster-builder/' + this.state.team + '/depth-chart/');
        this.ref.on('value', function(snapshot){
            this.setState({
                depthChart: snapshot.val()
            });
            console.log(this.state.depthChart);
            if(this.state.depthChart == null){
                console.log("Null depth chart");
                var output = helpers.roster(this.state.team);
                console.log(output);
            }
        }.bind(this));
    },
    componentWillUnmount: function(){
        this.childRef.off();
    },
    render: function(){
        return (
            <div className="col-md-12" key={this.state.team}>
                <ThreePhases />
                <FormationMenu />
                <FormationDisplay />
            </div>
        )
    }
});

module.exports = DepthChart;