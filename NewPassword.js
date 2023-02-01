import { Link } from "react-router-dom";
import "./form.css";

export const NewPassword = () =>{
    return(
        <div className="Page">
            <div className="Form">
                <form>
                    <div className="Email3">
                        <label id='title2'>Set New Password</label><br/> <br/>
                        <div className="Fm">
                            <input type='text' id='tb2' placeholder='  New Password' required/> <br/> <br/> <br/>
                            <input type='password' id='tb2' placeholder='  Confirm Password' required/> <br/>
                        </div>
                        <Link to="/LogIn"><input type='button' id='li3' value='Submit'/></Link><br/><br/>
                        </div>
                </form>
            </div>
        </div>
    )
}