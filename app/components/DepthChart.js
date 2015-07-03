/**
 * Created by Coty-Saxman on 7/3/2015.
 */
var React = require('react');
var Router = require('react-router');

var DepthChart = React.createClass({
    getInitialState: function(){
        return {

        }
    },
    render: function(){
        return (
            <div className="col">
                <div className="row">
                    <div className="col-md-4">
                        Offense
                    </div>
                    <div className="col-md-4">
                        Defense
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        Full
                    </div>
                    <div className="col-md-4">
                        Strong
                    </div>
                </div>
                <div id="depth-chart">
                    <div className="row" id="los">
                    </div>
                    <div className="row" id="off-los">
                    </div>
                    <div className="row" id="fb-depth">
                    </div>
                    <div className="row" id="hb-depth">
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = DepthChart;