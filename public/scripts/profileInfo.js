'use strict';

/*
  Creación del TAG ProfileInfo
*/
var ProfileInfo = React.createClass({
  render: function(){
    return(
      <div>
        <h3>{this.props.name}</h3>
        <img src={this.props.imgURL}/>
      </div>
    );
  }
});
