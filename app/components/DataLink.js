/**
 * Created by Coty-Saxman on 7/6/2015.
 */
var React = require('react');
var Firebase = require('firebase');

var DataLink = React.createClass({
    componentDidMount: function() {
        window.ROSTER_BUILDER_DATA = window.ROSTER_BUILDER_DATA || {};
        window.ROSTER_BUILDER_DATA.roster = [];
        window.ROSTER_BUILDER_DATA.depthChart = [];
        window.ROSTER_BUILDER_DATA.players = [{}];
        //data
        this.dataRef = new Firebase('https://boiling-fire-929.firebaseio.com/roster-builder/');
        this.dataRef.on('value', function (snapshot) {
            window.ROSTER_BUILDER_DATA = snapshot.val();
        }.bind(this));
    },
    componentWillUnmount: function(){
        this.dataRef.off();
    },
    render: function(){
        return (
            <div style={{display: 'none'}}>
                Firebase Data Integration
            </div>
        )
    }
});

module.exports = DataLink;