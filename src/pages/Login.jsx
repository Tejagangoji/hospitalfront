import React, { useState } from 'react';
import headerimg from '../ascerts/loginimg.png';
import rate from '../ascerts/rate.png';
import rate1 from '../ascerts/rate1.png';
import logo from '../ascerts/logo.png';
import '../styles/login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();
    const [login, setlogin] = useState({ email: "", password: "" });
    const chnageHandler = (e) => {
        setlogin({ ...login, [e.target.name]: e.target.value });
    }
    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/login', login).then(res => {localStorage.setItem("usertoken", res.data.token); navigate('/')}).catch((err) => {
            if (err.response.status === 404) {
                alert(err.response.data);
                return navigate('/register');
            }
            else if(err.response.status === 405) {
                alert("incorrect password");
            }
        });
    }
    return (
        <div className='login'>
            <div className="loginwrap">
                <div className='login1'>
                    <img className='groupimg' src={headerimg} alt="" />
                    <img className='rate' src={rate} alt="" />
                    <img className='rate-1' src={rate1} alt="" />
                    <img className='rate-12' src={rate1} alt="" />
                </div>
                <div className="login2">
                    <div className="formswrap">
                        <h2 className='loginlogo'><img className='logoimg' src={logo} alt="" /></h2>
                        <h2 className='loginheader'>Login</h2>
                        <div className="loginlaert">Enter Your credential to login the platform</div>
                        <form onSubmit={submitHandler} className='loginforms'>
                            <div className="inputdivslogin">
                                <label className='loginlabels' htmlFor="email">E-mail</label>
                                <input onChange={chnageHandler} className='logininputs loginipt' type="text" name='email' placeholder='Enter here' />
                            </div>
                            <div className="inputdivslogin">
                                <label className='loginlabels' htmlFor="password">Password</label>
                                <input onChange={chnageHandler} className='logininputs loginipt' type="text" name='password' placeholder='Enter here' />
                            </div>
                            <div className='loginforgot'>forgot password?</div>
                            <input className='logininputs loginsubmit' type="submit" value="Login" />
                        </form>
                        <div className="loginrediect">No Account? <span className='logintoregister'>Sign up</span></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
