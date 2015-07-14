/**
 * Created by Coty-Saxman on 7/3/2015.
 */
var React = require('react');
var RouteHandler = require('react-router').RouteHandler;
var DataLink = require('./DataLink');

var Main = React.createClass({
    getInitialState: function(){
        return {
            data: null
        }
    },
    setData: function(data){
        this.setState({
            data: data
        });
        console.log("Data Initialized!");
        console.log(this.state.data);
    },
    render: function(){
        var handler = (<RouteHandler data={this.state.data} />);
        return this.state.data?
            (
                <div>
                    <nav role="navigation">
                        <div style={{marginTop: 15}}>
                            HEADER
                        </div>
                    </nav>
                    <div>
                        {handler}
                    </div>
                </div>
            ) : (
                <div>
                    loading...
                    <DataLink setData={this.setData} />
                </div>
            );
    }
});

module.exports = Main;