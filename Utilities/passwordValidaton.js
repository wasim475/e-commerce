const passwordValidaton = (password)=>{
    const pattern = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return pattern.test(password)
}

module.exports = passwordValidaton;