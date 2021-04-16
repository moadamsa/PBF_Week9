import React, {Component} from 'react';
import './Login.css';

class Login  extends Component {
    
    render() { 
        return (
            <div className="Login">
                <h2>Form Login</h2>
                    <form>
                        <div className="imgcontainer">
                                <label><b>Tugas Pertemuan Ke Tiga</b></label>
                        </div>

                    <div className="container">
                        <label><b>Username</b></label>
                        <input type="text" placeholder="Enter Username" name="uname" required/>

                        <label><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="psw" required/>
                    
                        <button type="submit">Login</button>
                        <input type="checkbox" defaultChecked/> Remember me
                </div>
                    <div className="container" style={{backgroundColor: '#f1f1f1'}}>
                        <button type="button" className="cancelbtn">Cancel</button>
                        <span className="psw">Forgot password?</span>
                    </div>
                 </form>
            </div>
         );
    }
}
 
export default Login ;