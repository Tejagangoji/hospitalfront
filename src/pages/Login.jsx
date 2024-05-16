import React from 'react';
import headerimg from '../ascerts/loginimg.png';
import rate from '../ascerts/rate.png';
import rate1 from '../ascerts/rate1.png';
import logo from '../ascerts/logo.png';
import '../styles/login.css';

export default function Login() {
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
                        <form className='loginforms'>
                            <div className="inputdivslogin">
                                <label className='loginlabels' htmlFor="email">E-mail</label>
                                <input className='logininputs loginipt' type="text" name='email' placeholder='Enter here' />
                            </div>
                            <div className="inputdivslogin">
                                <label className='loginlabels' htmlFor="password">Password</label>
                                <input className='logininputs loginipt' type="text" name='password' placeholder='Enter here' />
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
