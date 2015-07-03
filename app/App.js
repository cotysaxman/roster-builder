/**
 * Created by Coty-Saxman on 7/3/2015.
 */
var React = require('react');
var Router = require('react-router');
var routes = require('./config/routes');

Router.run(routes, function(Root){
    React.render(<Root />, document.getElementById('app'));
})