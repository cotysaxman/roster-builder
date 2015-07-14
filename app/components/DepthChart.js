/**
 * Created by Coty-Saxman on 7/3/2015.
 */
var React = require('react');
var ThreePhases = require('./ThreePhases');
var FormationMenu = require('./FormationMenu');
var FormationDisplay = require('./FormationDisplay');

var DepthChart = React.createClass({
    render: function(){
        return (
            <div>
                <ThreePhases />
                <FormationMenu />
                <FormationDisplay />
            </div>
        )
    }
});

module.exports = DepthChart;