/**
 * Created by Coty-Saxman on 7/3/2015.
 */
var React = require('react');
var Main = require('../components/Main');
var Home = require('../components/Home');
var DepthChart = require('../components/DepthChart');
var Office = require('../components/Office');
var Roster = require('../components/Roster');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

module.exports = (
    <Route name="app" path="/" handler={Main}>
        <Route name="depth-chart" path="/depth-chart/:team" handler={DepthChart}></Route>
        <Route name="roster" path="/roster/:team" handler={Roster}></Route>
        <Route name="office" path="/office/:team" handler={Office}></Route>
        <DefaultRoute handler={Home} />
    </Route>
);