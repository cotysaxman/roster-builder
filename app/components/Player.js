/**
 * Created by Coty-Saxman on 7/7/2015.
 */
var React = require('react');

var Player = React.createClass({
    propTypes: {
        player: React.PropTypes.object.isRequired
    },
    showPopup: function(){
        var p = this.props.player;
        document.getElementById(p['Name'] + "pubg").style.display = "block";
        document.getElementById(p['Name'] + "pufg").style.display = "block";
    },
    clickHandler: function(){
        this.showPopup();
    },
    render: function(){
        var p = this.props.player;
        return (
            <div onClick={this.clickHandler}>
                {p.Name}<br />
                {p.Position} #{p.Number}<br />
                {p.Height}, {p.Weight}<br />
                ${p['Current Salary']}<br />
                {p['Spotrac URL']}
                <div id={p['Name'] + "pubg"} className="popup_background" style={{display: "none"}}></div>
                <div id={p['Name'] + "pufg"} className="popup_player_window" style={{display: "none"}}></div>
            </div>
        )
    }
});

module.exports = Player;