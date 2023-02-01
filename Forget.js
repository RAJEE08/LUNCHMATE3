import { Link } from "react-router-dom";
import "./form.css";

export const Forget = () =>{
    return(
        <div className="Page">
            <div className="Form">
                <form>
                    <div className='Email2'>
                        <div className="Titlefp">
                            <label id="ex">!<br/></label>
                            <label id='title1'>Forget<br/>
                            <label id='title2'></label>Password</label><br/><br/><br/>
                        </div>
                        <input type='text' id='tb1' placeholder='  Email' required/> <br/> <br/> <br/>
                        <Link to="/NewPassword"><input type='button' id='li2' value='Next'/></Link><br/><br/>
                    </div>
                </form>
            </div>
        </div>
    )
}