/**
 * Created by Coty-Saxman on 7/7/2015.
 */
var React = require('react');

var Player = React.createClass({
    propTypes: {
        player: React.PropTypes.object.isRequired,
        rosterUpdate: React.PropTypes.func.isRequired,
        roster: React.PropTypes.array.isRequired,
        salaryCap: React.PropTypes.object.isRequired,
        salaryCapUpdate: React.PropTypes.func.isRequired
    },
    getInitialState: function(){
        return {
            windowOpen: false
        }
    },
    eightFractionChar(num){
        switch(num){
            case('1'):
                return "\u215B";
            case('2'):
                return "\u00BC";
            case('3'):
                return "\u215C";
            case('4'):
                return "\u00BD";
            case('5'):
                return "\u215D";
            case('6'):
                return "\u00BE";
            case('7'):
                return "\u215E";
            default:
                return "";
        }
    },
    yearsString: function(num){
        if(num == 'R') return "rookie";
        else return this.orderString(num) + "-year";
    },
    orderString: function(num){
        num = parseInt(num, 10);
        var suffix = "th";
        if(num > 3 && num < 21) return num + suffix;
        var onesDigit = num%10 + "";
        switch(onesDigit){
            case '1': suffix = "st";
                break;
            case '2': suffix = "nd";
                break;
            case '3': suffix = "rd";
                break;
        }
        return num + suffix;
    },
    positionString: function(pos){
        switch(pos){
            case 'QB': return 'quarterback';
            case 'RB': return 'running back';
            case 'FB': return 'fullback';
            case 'WR': return 'wide receiver';
            case 'TE': return 'tight end';
            case 'OT': return 'offensive tackle';
            case 'OG': return 'offensive guard';
            case 'OC': return 'offensive center';
            case 'DT': return 'defensive tackle';
            case 'DE': return 'defensive end';
            case 'CB': return 'cornerback';
            case 'FS': return 'free safety';
            case 'SS': return 'strong safety';
            case 'ILB': return 'inside linebacker';
            case 'OLB': return 'outside linebacker';
            case 'LS': return 'long snapper';
            case 'P': return 'punter';
            case 'PK': return 'place kicker';
            default: return 'player';
        }
    },
    teamString: function(tm){
        switch(tm){
            case 'ARZ': return 'Arizona Cardinals';
            case 'ATL': return 'Atlanta Falcons';
            case 'BAL': return 'Baltimore Ravens';
            case 'BUF': return 'Buffalo Bills';
            case 'CAR': return 'Carolina Panthers';
            case 'CHI': return 'Chicago Bears';
            case 'CIN': return 'Cincinnati Bengals';
            case 'CLE': return 'Cleveland Browns';
            case 'DAL': return 'Dallas Cowboys';
            case 'DEN': return 'Denver Broncos';
            case 'DET': return 'Detroit Lions';
            case 'GB': return 'Green Bay Packers';
            case 'HOU': return 'Houston Texans';
            case 'IND': return 'Indianapolis Colts';
            case 'JAX': return 'Jacksonville Jaguars';
            case 'KC': return 'Kansas City Chiefs';
            case 'MIA': return 'Miami Dolphins';
            case 'MIN': return 'Minnesota Vikings';
            case 'NE': return 'New England Patriots';
            case 'NO': return 'New Orleans Saints';
            case 'NYG': return 'New York Giants';
            case 'NYJ': return 'New York Jets';
            case 'OAK': return 'Oakland Raiders';
            case 'PHI': return 'Philadelphia Eagles';
            case 'PIT': return 'Pittsburgh Steelers';
            case 'SD': return 'San Diego Chargers';
            case 'SEA': return 'Seattle Seahawks';
            case 'SF': return 'San Francisco 49ers';
            case 'STL': return 'St Louis Rams';
            case 'TB': return 'Tampa Bay Buccaneers';
            case 'TEN': return 'Tennessee Titans';
            case 'WAS': return 'Washington Redskins';
            default: return 'team that eventually signs him';
        }
    },
    calyearString: function(yr){
        return ((parseInt(yr, 10) < 50)? "20":"19") + yr;
    },
    heightString: function(ht){
        return ht.charAt(0) + '\'' + parseInt('' + ht.charAt(1) + ht.charAt(2), 10) + this.eightFractionChar(ht.charAt(3)) + '"';
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
            textAlign: "center",
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
            width: "29%",
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
            width: "29%",
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
            width: "29%",
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
            width: "29%",
            height: "12%",
            border: "1px solid black",
            textAlign: "right",
            fontSize: "1.6em",
            paddingRight: "1%"
        };
        return (
            <div>
                <div className="popup_background" onClick={event=>this.hidePopup(event)}>
                </div>
                <div className="popup_player_window">
                    <div className="player_tabs">
                        <div className="player_tab">
                            <input type="radio" id="player_info_tab" name="player_tab_group" value="info" defaultChecked />
                            <label htmlFor="player_info_tab">Main</label>
                            <div className="player_content">
                                <div style={headerStyle}></div>
                                <div style={bodyStyle}>
                                    <div style={imgBoxStyle}></div>
                                    <div style={infoBoxStyle}>
                                        <div style={numBox}>#{p['Number']}</div><div style={nameBox}>{p['Name'].toUpperCase()}</div><div style={posBox}>{p['Position']}</div>
                                        <div style={htBox}>{this.heightString(p['Height'])}</div><div style={wtBox}>{p['Weight']} lbs.</div><div style={ageBox}>{p['Age']}yrs</div>
                                    </div>
                                    <div style={curSalLabelBox}>Current Salary Cap Number</div><div style={curSalBox}>${p['Current Salary']}</div>
                                    <div style={curDMLabelBox}>Current Year Penalty if Cut</div><div style={curDMBox}>${p['June 1st Dead Money']}</div>
                                    <div style={futDMLabelBox}>Carryover Cap Penalty if Cut</div><div style={futDMBox}>${p['Future Dead Money']}</div>
                                    <div style={totDMLabelBox}>Total Cap Penalty if Cut</div><div style={totDMBox}>${p['Total Dead Money']}</div>
                                </div>
                                <div style={footerStyle} onClick={this.cutPlayer}>CLICK TO CUT</div>
                            </div>
                        </div>
                        <div className="player_tab">
                            <input type="radio" id="player_bio_tab" value="bio" name="player_tab_group" />
                            <label htmlFor="player_bio_tab">Bio</label>
                            <div className="player_content">
                                <div style={headerStyle}></div>
                                <div style={bodyStyle}>
                                    <p>
                                        {p['Name']} is a {this.yearsString(p['NFL Exp'])} {this.positionString(p['Position'])} for the {this.teamString(p['Team'])} wearing number {p['Number']}.
                                    </p><p>
                                        The {this.heightString(p['Height'])}, {p['Weight']}-pounder was born {p['DOB']}. He is currently {p['Age']} years old.
                                    </p><p style={{display: p['NFL Entry'].indexOf('CFA') != -1? "block":"none"}}>
                                        He entered the league as an undrafted free agent in {this.calyearString(p['NFL Entry'].split(' ')[0])} after signing with the {this.teamString(p['Original Team'].split(' ')[0])}.
                                    </p><p style={{display: p['NFL Entry'].split(' ').length == 3? "block":"none"}}>
                                        He was drafted in the {this.orderString(parseInt(p['NFL Entry'].split(' ')[1], 10))} round with the
                                        {" " + this.orderString(parseInt(p['NFL Entry'].split(' ')[2], 10))}-overall pick of the
                                        {" " + this.calyearString(p['NFL Entry'].split(' ')[0])} NFL Draft by the {this.teamString(p['Original Team'].split(' ')[0])}.
                                    </p>
                                </div>
                                <div style={footerStyle}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    },
    cutPlayer: function(){
        var newRoster = this.props.roster;
        this.props.rosterUpdate(newRoster);
        var newSalCap = this.props.salaryCap;
        newSalCap['Dead Money'] = parseInt(newSalCap['Dead Money'], 10) + (parseInt(this.props.player['June 1st Dead Money'], 10) || 0);
        newSalCap['Total Salary'] = parseInt(newSalCap['Total Salary'], 10) - (parseInt(this.props.player['Current Salary'], 10) || 0);
        this.props.salaryCapUpdate(newSalCap);
        this.hidePopup();
    },
    showPopup: function(){
        this.setState({
            windowOpen: true
        });
    },
    hidePopup: function(event){
        if(!event || (event && event.target.className == "popup_background")) {
            this.setState({
                windowOpen: false
            });
        }
    },
    render: function(){
        var p = this.props.player;
        return (
            <div>
                {this.state.windowOpen? this.popupDiv() : null}
                <div onClick={this.showPopup}>
                    {p['Name']}
                </div>
            </div>
        )
    }
});

module.exports = Player;