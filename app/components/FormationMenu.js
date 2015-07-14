/**
 * Created by Coty on 7/3/2015.
 */
var React = require('react');

var FormationMenu = React.createClass({
    formations: ['Full', 'Custom'],
    render: function(){
        var formationHtml = this.formations.map(function(fmtn, index){
            return <div id={fmtn} key={index}>{fmtn}</div>
        });
        return (
            <div>
                {formationHtml}
            </div>
        )
    }
});

module.exports = FormationMenu;