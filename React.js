import React from 'react';
class ColorfulCounter extends React.Component{
state={count:0};
increment=()=>this.setState({count:this.state.count+1});
decrement=()=>this.setState({count:this.state.count-1});
reset=()=>this.setstate({count:0});
render(){
return(
<div style={{textAlign:'center',marginTop:'50px'}}>
<h1 style={{color:'#333'}}>count:{this.state.count}</h1>
<button
onclick={this.increment}
style={styles.incrementButton}
>
+
</button>
<buttononclick={this.decrement}
style={styles.decrementButton}
>
-
</button>
<button
onclick={this.reset}
style={styles.resetButton}
>
reset</button>
</div>
);
}
}
const styles={
incrementButton:{
backgroundColor:'#4CAF50',//Green
color:'White',
padding:'10px 20px',
margin:'0 5px',
border:'none',
borderRadius:'5px',
fontSize:'16px',
cursor:'pointer'
},
decrementButton:{
backgroundColor:'#f44336',//Red
color:'white',
padding:'10px 20px',
margin:'0 5px',
border:'none',
borderRadius:'5px',
fontSize:'16px',
cursor:'pointer'
},
resetBButton:{
backgroundColor:'#2196F3',//Blue
color:'White',
padding:'10px 20px',
margin:'0 5px',
border:'none',
borderRadius:'5px',
fontSize:'16px',
cursor:'pointer'
}
};
export default ColorfulCounter;;