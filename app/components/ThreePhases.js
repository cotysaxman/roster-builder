/**
 * Created by Coty on 7/3/2015.
 */
var React = require('react');

var ThreePhases = React.createClass({
    render: function(){
        return (
            <div className="row">
                <div className="col-md-4">
                    Offense
                </div>
                <div className="col-md-4">
                    Defense
                </div>
                <div className="col-md-4">
                    Special Teams
                </div>
            </div>
        )
    }
});

module.exports = ThreePhases;