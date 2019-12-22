import React from 'react';
import useForm from './customHooks';
import validate from './validate';

const Form = () => {
	const {inputs, handleInputChange, handleSubmit ,errors} = useForm({email:'',password:''},validate);
	return (
		<form onSubmit={handleSubmit}>
	      <div>
	        <label>Email Address</label>
	        <input type="email" name="email" onChange={handleInputChange} value={inputs.email} required />
	      </div>
	      {errors.email && <p>errors.email</p>}
	      <div>
	        <label>Password</label>
	        <input type="password" name="password" onChange={handleInputChange} value={inputs.password} required/>
	      </div>
	      {errors.password && <p>errors.password</p>}
	      <button type="submit">Submit</button>
	    </form>
	)
}

export default Form;