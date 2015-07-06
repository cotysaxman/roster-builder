/**
 * Created by Coty-Saxman on 7/6/2015.
 */
var React = require('react');

var RosterPositionGroup = React.createClass({
    propTypes: {
        group: React.PropTypes.array.isRequired
    },
    render: function(){
        var message = this.props.group[0];
        return (
            <div>
                {message}
            </div>
        )
    }
});

module.exports = RosterPositionGroup;