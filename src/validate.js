 const validate = (inputs) => {
 	//Email errors
    const errors = {};
    if (!inputs.email) {
    	errors.email = 'Check Email';
    } else if (
    	!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(inputs.email)
    ) {
    	errors.email = 'Invalid email address';
    }

    //Password Errors
    if(!inputs.password  || inputs.password.length<6){
    	errors.password = 'Check Password'
    }
    return errors;
}

export default validate;