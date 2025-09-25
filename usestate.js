import React,{useState}from'react';
function SimpleForm(){
const[formData,setForm]=useState({name:",email:"});
const[submitted,setSubmitted]=useState(false);
const handlesubmit=(e)=>{
e.preventDefault();
setSubmitted(true);
};
const handleChange=(e)=>{
setFormData({...formData,[e.target.name]:e.target.value});
};
const handleChange=(e)=>{
setFormData({...formData,[e.target.name]:e.target.value});
};
if(submitted){
return(
<div style={{padding:'20px',textAlign:'center'}}>
<h2>Thank you for submitting!</h2>
<p>We received your details.</p>
<button
onClick={()=>setSubmitted(false)}
style={{padding:'8px 16px',marginTop:'10px'}}
>
submit Again
</button>
</div>
);
}
return(
<form onSubmit={handleSubmit}style={{padding:'20px'}}>
<input
type="text"
name="name"
value={formData.name}
onChange={handleChange}
placeholder="your Name"
required
style={{display:'block',margin:'10px 0',padding:'8px',width:'100%'}}
/>
<input
type="email"
name="email"
value={formData.email}
onChange={handleChange}
placeholder="YOur Email"
required
style={{display:'block',margin:'10px 0',padding:'8px',width:'100%'}}
/>
<inputtype="email"
name="email"
value={formData.email}
onChange={handleChange}
placeholder="your Email"
required
style={{display:'block',margin:'10px 0',padding:'8px',width:'100%'}}
/>
<button type="submit"style={{padding:'8px 16px',marginTop:'10px'}}>
submit
</button>
</form>
);
}
export default SimpleForm;