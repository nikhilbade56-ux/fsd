import React,{useState}from'react';
import'./app.css';
function App(){
const[formData,setFormData]=useState({
name:",
email:",
message:"
});
const handlechange=(e)=>{
const{name,value}=e.target;
setFormData(prevState=>({
...prevstate,
[name]:value
}));
};
const handlesubmit=(e)=>{
e.preventDefault();
alert('form submitted:\nName:${formData.name}\nEmail:${formData.email}\nMessage:
${formData.message}');
setFormData({name:",email:",message:"});
};
return(
<div className="form-container">
<h2>Contact Form</h2>
<form onsubmit={handlesubmit}>
<label>Name:</label>
<input
type="text"
name="name"
value={formData.name}
onchange={handleChange}
required
/>
<label>Email:</label>
<inputtype="email"
name="email"
value={formData.email}
onchange={handlechange}
required
/>
<label>Message:</label>
<textarea
name="message"
value={formData.message}
onchange={handleChange}
required></textarea>
<button type="submit">submit</button>
</form>
</div>
);
}
export default App;