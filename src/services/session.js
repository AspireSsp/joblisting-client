
exports.setToken = async(token)=>{
    console.log(token);
    const myToken = await localStorage.setItem('myToken', token);
}

exports.getToken = async()=>{
    const myToken = await localStorage.getItem('myToken');
    return myToken;
}

exports.setUser = async(user)=>{
    const myInfo = await localStorage.setItem('myInfo',JSON.stringify(user));
}

exports.getUser = async()=>{
    const myInfo = await localStorage.getItem('myInfo');
    const user = JSON.parse(myInfo);
    return user;
}

exports.logOutUser = async()=>{
    await localStorage.removeItem('myInfo');
    await localStorage.removeItem('myToken');
}

exports.setEmployer = async(user)=>{
    const myInfo = await localStorage.setItem('myEmp',JSON.stringify(user));
}

exports.getEmployer = async()=>{
    const myInfo = await localStorage.getItem('myEmp');
    const user = JSON.parse(myInfo);
    return user;
}

exports.logOutEmployer = async()=>{
    await localStorage.removeItem('myEmp');
}