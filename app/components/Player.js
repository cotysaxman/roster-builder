/**
 * Created by Coty-Saxman on 7/7/2015.
 */
var React = require('react');

var Player = React.createClass({
    propTypes: {
        player: React.PropTypes.object.isRequired
    },
    popupDiv: function(){
        var p = this.props.player;
        var headerStyle = {
            position: "absolute",
            left: "0%",
            top: "0%",
            width: "100%",
            height: "10%",
            backgroundColor: "#000000"
        };
        var bodyStyle = {
            position: "absolute",
            left: "0%",
            top: "10%",
            width: "100%",
            height: "80%",
            backgroundColor: "#FFFFFF"
        };
        var footerStyle = {
            position: "absolute",
            left: "0%",
            top: "90%",
            width: "100%",
            height: "10%",
            backgroundColor: "#FF0000"
        };
        var imgBoxStyle = {
            position: "absolute",
            left: "1%",
            top: "1%",
            width: "23%",
            height: "48%",
            backgroundImage: "url(" + p['Img URL'] + ")",
            backgroundPosition: "center",
            backgroundSize: "100%",
            border: "1px solid black"
        };
        var infoBoxStyle = {
            position: "absolute",
            left: "26%",
            top: "1%",
            width: "73%",
            height: "48%",
            border: "1px solid black"
        };
        var numBox = {
            position: "absolute",
            left: "1%",
            top: "1%",
            width: "17%",
            height: "48%",
            border: "1px solid black",
            textAlign: "center",
            fontSize: "2em",
            lineHeight: "2em"
        };
        var nameBox = {
            position: "absolute",
            left: "19%",
            top: "1%",
            width: "62%",
            height: "48%",
            border: "1px solid black",
            textAlign: "center",
            fontSize: (p['Name'].length > 16 ? "1.2em" :
                       p['Name'].length > 14 ? "1.4em" :
                       p['Name'].length > 12 ? "1.6em" :
                       p['Name'].length > 10 ? "1.8em" :
                                               "2.0em"),
            lineHeight: (p['Name'].length > 16 ? "320%" :
                         p['Name'].length > 14 ? "285%" :
                         p['Name'].length > 12 ? "250%" :
                         p['Name'].length > 10 ? "225%" :
                                                 "205%"),
            fontStyle: "bold"
        };
        var posBox = {
            position: "absolute",
            left: "82%",
            top: "1%",
            width: "17%",
            height: "48%",
            border: "1px solid black",
            textAlign: "center",
            fontSize: "2em",
            lineHeight: "2em"
        };
        var htBox = {
            position: "absolute",
            left: "1%",
            top: "51%",
            width: "32%",
            height: "48%",
            border: "1px solid black",
            textAlign: "center",
            fontSize: "2em",
            lineHeight: "2em"
        };
        var wtBox = {
            position: "absolute",
            left: "34%",
            top: "51%",
            width: "32%",
            height: "48%",
            border: "1px solid black",
            textAlign: "center",
            fontSize: "2em",
            lineHeight: "2em"
        };
        var ageBox = {
            position: "absolute",
            left: "67%",
            top: "51%",
            width: "32%",
            height: "48%",
            border: "1px solid black",
            textAlign: "center",
            fontSize: "2em",
            lineHeight: "2em"
        };
        var curSalLabelBox = {
            position: "absolute",
            left: "1%",
            top: "51%",
            width: "69%",
            height: "12%",
            border: "1px solid black",
            textAlign: "left",
            fontSize: "1.6em"
        };
        var curSalBox = {
            position: "absolute",
            right: "1%",
            top: "51%",
            width: "28%",
            height: "12%",
            border: "1px solid black",
            textAlign: "right",
            fontSize: "1.6em",
            paddingRight: "1%"
        };
        var curDMLabelBox = {
            position: "absolute",
            left: "1%",
            top: "63%",
            width: "69%",
            height: "12%",
            border: "1px solid black",
            textAlign: "left",
            fontSize: "1.6em"
        };
        var curDMBox = {
            position: "absolute",
            right: "1%",
            top: "63%",
            width: "28%",
            height: "12%",
            border: "1px solid black",
            textAlign: "right",
            fontSize: "1.6em",
            paddingRight: "1%"
        };
        var futDMLabelBox = {
            position: "absolute",
            left: "1%",
            top: "75%",
            width: "69%",
            height: "12%",
            border: "1px solid black",
            textAlign: "left",
            fontSize: "1.6em"
        };
        var futDMBox = {
            position: "absolute",
            right: "1%",
            top: "75%",
            width: "28%",
            height: "12%",
            border: "1px solid black",
            textAlign: "right",
            fontSize: "1.6em",
            paddingRight: "1%"
        };
        var totDMLabelBox = {
            position: "absolute",
            left: "1%",
            top: "87%",
            width: "69%",
            height: "12%",
            border: "1px solid black",
            textAlign: "left",
            fontSize: "1.6em"
        };
        var totDMBox = {
            position: "absolute",
            right: "1%",
            top: "87%",
            width: "28%",
            height: "12%",
            border: "1px solid black",
            textAlign: "right",
            fontSize: "1.6em",
            paddingRight: "1%"
        };
        return (
            <div>
                <div className="popup_background" onClick={()=>window.ROSTER_BUILDER_DATA.eraseElement(this.props.player['Name'])}>
                </div>
                <div className="popup_player_window" onClick={event=>event.stopPropagation()}>
                    <div style={headerStyle}></div>
                    <div style={bodyStyle}>
                        <div style={imgBoxStyle}></div>
                        <div style={infoBoxStyle}>
                            <div style={numBox}>#{p['Number']}</div><div style={nameBox}>{p['Name'].toUpperCase()}</div><div style={posBox}>{p['Position']}</div>
                            <div style={htBox}>{p['Height'].charAt(0)}'{parseInt("" + p['Height'].charAt(1) + p['Height'].charAt(2), 10)}"</div><div style={wtBox}>{p['Weight']}lbs</div><div style={ageBox}>{p['Age']}yrs</div>
                        </div>
                        <div style={curSalLabelBox}>Current Salary Cap Number</div><div style={curSalBox}>${p['Current Salary']}</div>
                        <div style={curDMLabelBox}>Current Year Penalty if Cut</div><div style={curDMBox}>${p['June 1st Dead Money']}</div>
                        <div style={futDMLabelBox}>Carryover Cap Penalty if Cut</div><div style={futDMBox}>${p['Future Dead Money']}</div>
                        <div style={totDMLabelBox}>Total Cap Penalty if Cut</div><div style={totDMBox}>${p['Total Dead Money']}</div>
                    </div>
                    <div style={footerStyle}></div>
                </div>
            </div>
        )
    },
    showPopup: function(){
        var p = this.props.player;
        window.ROSTER_BUILDER_DATA.eraseElement = function(name){
            document.getElementById(name + "hide_div").innerHTML = "";
            console.log("erased");
        };
        var element = document.getElementById(p['Name'] + "hide_div");
        if(!element){
            element = document.createElement("div");
            element.id = p['Name'] + "hide_div";
            document.body.appendChild(element);
        }
        React.render(this.popupDiv(), element);
    },
    render: function(){
        var p = this.props.player;
        return (
            <div onClick={this.showPopup}>
                {p.Name}
            </div>
        )
    }
});

module.exports = Player;