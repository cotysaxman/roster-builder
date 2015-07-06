/**
 * Created by Coty on 7/3/2015.
 */
var React = require('react');
var OffenseFormationDiagram = require('./FormationDiagrams/OffenseFormationDiagram');
var DefenseFormationDiagram = require('./FormationDiagrams/DefenseFormationDiagram');
var SpecialTeamsFormationDiagram = require('./FormationDiagrams/SpecialTeamsFormationDiagram');

var FormationDisplay = React.createClass({
    type: 'offense', //offense, defense, st
    render: function(){
        switch(this.type){
            case('offense'):
                return <OffenseFormationDiagram />;
            case('defense'):
                return <DefenseFormationDiagram />;
            case('st'):
                return <SpecialTeamsFormationDiagram />;
            default:
                return null;
        }
    }
});

module.exports = FormationDisplay;