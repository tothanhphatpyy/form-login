
const Login = (userName, passWord) => {
    if( userName === 'admin' && passWord ==='admin')
        return true;
    else
       return false;
}

exports.login = Login;