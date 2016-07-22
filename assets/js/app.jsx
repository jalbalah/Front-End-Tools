var Autoencoder = React.createClass({
  render: function(){
    return(
      <div>
        Hello Worlddd
      </div>
    );
  }
});
var Settings = React.createClass({
  render: function(){
    <table>
      <tr>
        <td>Visible units: <input type="text" value="2"></input></td>
      </tr><tr>
        <td>Hidden units: <input type="text" value="2"></input></td>
      </tr><tr>
        <td>Label units: <input type="text" value="3"></input></td>
      </tr>
    </table>
  }
});
var Graph = React.createClass({
  componentDidMount: function() {
    var thisDOM = ReactDOM.findDOMNode(this); // set el height and width etc.
    console.log(thisDOM);
    console.log(this.props);
  },
  render: function(){
    var x =[0,1,2];
    var cnv = 2;
    return(
      <canvas id="myCanvas" width={620} height={420} style={{border: '1px solid'}}></canvas>
    );
  }
});
var GraphObj = React.createClass({
  render: function(){
    return(
      <div></div>
    );
  }
});
ReactDOM.render(
  <div>
    Helloooo0<br/>
    <Graph/>
    <Autoencoder />
  </div>,
  document.getElementById('content')
);
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.fillStyle = "#FF0000";
//ctx.font = "20px "
ctx.fillRect(10,10,10,10);
var x, y;
for(x = 0; x < c.width; x++){
  if(x % 40 == 0)
    ctx.fillText(x.toString(),x,10);
}
for(y = 0; y < c.width; y++){
  if(y % 40 == 0)
    ctx.fillText(y.toString(),y,10);
}