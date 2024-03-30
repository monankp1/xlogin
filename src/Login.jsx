import React,{useState} from 'react'

const Login = () => {

    const [data, setData] = useState({userName: '', password: ''});
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isValid, setIsValid] = useState(true);

    const handleChange = (e) => {
        setData({
            ...data, 
            [e.target.name] : e.target.value 
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(data.userName === 'user' && data.password === 'password'){
            setIsValid(true);
            setIsLoggedIn(true);
        } else {
            setIsValid(false);
        }
    };

  return (
    <div>
        <h1>Login Page</h1>
        
        <form onSubmit={handleSubmit}>
            {isLoggedIn? (
                <p>Welcome, user!</p>
            ):(
                isValid? (
                    <>
                        <label>Username:</label>
                        <input type='text' name='userName' value={data.userName} placeholder='username' onChange={handleChange} required/>
                        <br />
                        <label>Password:</label>
                        <input type='password'name='password' value={data.password} placeholder='password' onChange={handleChange} required/>
                        <br />
                        <button type='submit'>Submit</button>
                    </>
                ) : (
                    <>
                        <p>Invalid username or password</p>
                        <label>Username:</label>
                        <input type='text' name='userName' value={data.userName} onChange={handleChange} required/>
                        <br />
                        <label>Password:</label>
                        <input type='password'name='password' value={data.password} onChange={handleChange} required/>
                        <br />
                        <button type='submit'>Submit</button>
                    </>
                )
            )}
            
        </form>
        
    </div>
  )
}

export default Login