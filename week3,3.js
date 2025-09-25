import React from 'react';
import UserGreeting from'./UserGreeting';
import Userinfo from'./Userinfo';
import'./App.css';
function App(){
const user={
name:"NIKHIL',
age:24
};
return{
<div className="app-container">
<div className="card">
<h2>sharing Data Using props</h2>
<UserGreeting name={user.name}/>
<Userinfo name={user.name}age={user.age}/>
</div>
</div>
);
}
export default App;