/**
 * Created by Coty on 7/4/2015.
 */
var React = require('react');
var PlayerPosition = require('./PlayerPosition');
var ReactFireMixin = require('reactfire');
var Firebase = require('firebase');

var OffenseFormationDiagram = React.createClass({
    width: 21,
    height: 5,
    formation: 'Full',
    mixins: [ReactFireMixin],
    getInitialState: function(){
        return {
            data: []
        }
    },
    componentDidMount: function(){
        this.ref = new Firebase('https://boiling-fire-929.firebaseio.com/roster-builder/formations/offense/');
        this.childRef = this.ref.child(this.formation);
        this.childRef.on('value', function(snapshot){
            this.setState({
                data: snapshot.val()
            });
        }.bind(this));
    },
    componentWillUnmount: function(){
        this.childRef.off();
    },
    render: function(){
        var diagramArray = new Array(this.height);
        for(var i = 0; i < this.height; i++){
            diagramArray[i] = new Array(this.width);
            for(var j = 0; j < this.width; j++){
                diagramArray[i][j] = "null";
            }
        }
        for(var i = 0; i < this.state.data.length; i++){
            var n = this.state.data[i];
            var pos = n.position;
            var loc = n.location;
            diagramArray[loc[1]][loc[0]] = pos;
        }
        var rowProcessor = function(row, index){
            return row.map(function(posName, i){
                return (
                    <td style={{width: "40px", height: "60px"}} key={index + "" + i}>
                        <PlayerPosition position={posName} />
                    </td>
                )
            });
        };
        var output = diagramArray.map(function(row, index){
            return (
                <tr id={"formation-row-" + index} key={index}>
                    {rowProcessor(row, index)}
                </tr>
            )
        });
        return (
            <div className="row-md-12" key={this.state.data}>
                <table>
                    <tbody>
                        {output}
                    </tbody>
                </table>
            </div>
        )
    }
});

module.exports = OffenseFormationDiagram;