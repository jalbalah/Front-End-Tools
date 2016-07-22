var NewDOMTag = React.createClass({
  render: function(){
    return(
      <div>
        Hello World
      </div>
    );
  }
});
ReactDOM.render(
  <div>
    Welcome<br/>
    <NewDOMTag />
  </div>,
  document.getElementById('content')
); 
// other JS
//console.log("hello jsx files");