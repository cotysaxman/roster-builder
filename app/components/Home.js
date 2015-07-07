/**
 * Created by Coty-Saxman on 7/3/2015.
 */
var React = require('react');
var TeamSelect = require('./TeamSelect');

var Home = React.createClass({
    render: function(){
        window.ROSTER_BUILDER_DATA = window.ROSTER_BUILDER_DATA || {};

        return (
            <h2 className="text-center">
                Roster Builder. Select a team.
                <TeamSelect />
            </h2>
        )
    }
});

module.exports = Home;