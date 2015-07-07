/**
 * Created by Coty-Saxman on 7/3/2015.
 */
var React = require('react');
var RouteHandler = require('react-router').RouteHandler;
var DataLink = require('./DataLink');

var Main = React.createClass({
    render: function(){
        return (
            <div className="main-container">
                <nav className="navbar navbar-default" role="navigation">
                    <div className="col-sm-7 col-sm-offset-2" style={{marginTop: 15}}>
                        NAVIGATION
                    </div>
                </nav>
                <div className="container">
                    <RouteHandler />
                </div>
                <DataLink />
            </div>
        )
    }
});

module.exports = Main;