'use strict'

/*
  Datos fijos para ejemplo de parametros
*/
var DATA = {
    name: 'John Smith',
    imgURL: 'http://lorempixel.com/200/200/',
    hobbyList: ['coding', 'writing', 'skiing']
}


////////////////////
/*
  TAG General
*/
var App = React.createClass({
  render: function(){
    return (
      /*TAGS HERE*/
      <div>
        <ProfileInfo
            name = {this.props.profileData.name}
            imgURL = {this.props.profileData.imgURL} />
        <Hobbies
            hobbyList = {this.props.profileData.hobbyList}/>
      </div>
    );
  }
});

ReactDOM.render(<App profileData={DATA} />, document.getElementById('content'));
