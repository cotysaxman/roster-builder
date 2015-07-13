/**
 * Created by Coty-Saxman on 7/3/2015.
 */
var React = require('react');
var Main = require('../components/Main');
var Home = require('../components/Home');
var Office = require('../components/Office');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

module.exports = (
    <Route name="app" path="/" handler={Main}>
        <Route name="office" path="/office/:username/:team" handler={Office}></Route>
        <DefaultRoute handler={Home} />
    </Route>
);