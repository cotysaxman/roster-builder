/**
 * Created by Coty-Saxman on 7/7/2015.
 */
var React = require('react');

var Player = React.createClass({
    propTypes: {
        player: React.PropTypes.object.isRequired
    },
    getInitialState: function(){
        return {
            windowOpen: false
        }
    },
    showPopup: function(){
        this.setState({
            windowOpen: true
        })
    },
    closePopup: function(){
        this.setState({
            windowOpen: false
        })
    },
    render: function(){
        var p = this.props.player;
        var classes = this.state.windowOpen ? "" : "hide";
        return (
            <div onClick={this.showPopup}>
                {p.Name}<br />
                {p.Position} #{p.Number}<br />
                {p.Height}, {p.Weight}<br />
                ${p['Current Salary']}<br />
                {p['Spotrac URL']}
                <div id={p['Name'] + "hide_div"} className={classes}>
                    <div className="popup_background" onClick={this.closePopup}>
                        <div className="popup_player_window">
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = Player;