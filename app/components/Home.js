/**
 * Created by Coty-Saxman on 7/3/2015.
 */
var React = require('react');
var TeamSelect = require('./TeamSelect');

var Home = React.createClass({
    propTypes: {
        data: React.PropTypes.object.isRequired
    },
    render: function(){
        return (
            <h2 className="text-center">
                Roster Builder. Select a team.
                <TeamSelect data={this.props.data} />
            </h2>
        )
    }
});

module.exports = Home;