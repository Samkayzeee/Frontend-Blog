let regexValidate = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const Validation = (values) => {
    let errors = {}
    if (!values.fullname) {
        errors.fullname ="Name is required"
    }
    else {
        errors.fullname = null
    }
    if (!values.email) {
        errors.email ="Email is required"
    }
    else {
        errors.email = null
    }
    if (!values.username) {
        errors.username = "Username is required"
    }
    if (!values.password) {
        errors.password ="Password is required"
    } else if (values.password.length < 8) {
        errors.password = "Pasword must have 8 characters"
    }
    else {
        errors.password = null
    }
    if ( values.confirm != values.password) {
        errors.confirm = "Password does not match"
    } if (!regexValidate.test(values.email)){
        errors.email = "Email is invalid"
    }
  return errors
   
}

export default Validation;
