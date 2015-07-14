/**
 * Created by Coty on 7/3/2015.
 */
var React = require('react');

var ThreePhases = React.createClass({
    render: function(){
        return (
            <div>
                <div>
                    Offense
                </div>
                <div>
                    Defense
                </div>
                <div>
                    Special Teams
                </div>
            </div>
        )
    }
});

module.exports = ThreePhases;