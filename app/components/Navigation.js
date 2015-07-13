/**
 * Created by Coty-Saxman on 7/7/2015.
 */
var React = require('react');

var Navigation = React.createClass({
    propTypes: {
        gotoRoster: React.PropTypes.func.isRequired,
        gotoDepthChart: React.PropTypes.func.isRequired
    },
    render: function(){
        return (
            <div class="row-md-12">
                <button className="btn btn-block btn-primary" onClick={this.props.gotoRoster}>Roster</button>
                <button className="btn btn-block btn-primary" onClick={this.props.gotoDepthChart}>Depth Chart</button>
            </div>
        )
    }
});

module.exports = Navigation;