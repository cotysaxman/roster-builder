/**
 * Created by Coty on 7/4/2015.
 */
var React = require('react');

var style = {
    backgroundImage: 'url(http://images.clipartpanda.com/american-football-clipart-black-and-white-jersey-white-md.png)',
    backgroundSize: '120% 100%',
    backgroundPosition: 'center',
    width: '40px',
    height: '60px'
};

var PlayerPosition = React.createClass({
    propTypes: {
        position: React.PropTypes.string.isRequired
    },
    render: function(){
        if(this.props.position==='null'){
            return (
                <div>

                </div>
            )
        } else {
            return (
                <div style={style}>
                    {this.props.position.charAt(0)}
                </div>
            )
        }
    }
});

module.exports = PlayerPosition;