/**
 * Created by Coty-Saxman on 7/7/2015.
 */
var React = require('react');
var Router = require('react-router');

var Navigation = React.createClass({
    mixins: [Router.Navigation],
    gotoRoster: function(){
        this.transitionTo('roster');
    },
    gotoDepthChart: function(){
        this.transitionTo('depth-chart');
    },
    render: function(){
        return (
            <div class="row-md-12">
                <button className="btn btn-block btn-primary" onClick={this.gotoRoster}>Roster</button>
                <button className="btn btn-block btn-primary" onClick={this.gotoDepthChart}>Depth Chart</button>
            </div>
        )
    }
});

module.exports = Navigation;