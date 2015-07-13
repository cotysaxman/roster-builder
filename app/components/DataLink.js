/**
 * Created by Coty-Saxman on 7/6/2015.
 */
var React = require('react');
var Firebase = require('firebase');

var DataLink = React.createClass({
    propTypes: {
        setData: React.PropTypes.func.isRequired
    },
    componentDidMount: function() {
        //data
        this.dataRef = new Firebase('https://boiling-fire-929.firebaseio.com/roster-builder/');
        this.dataRef.on('value', function (snapshot) {
            this.props.setData(snapshot.val());
            this.dataRef.off();
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