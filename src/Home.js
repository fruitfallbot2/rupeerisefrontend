import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Home = ()=> {

    return (
        <div>
            <center>
                <p style={{fontSize:'5rem', padding:'1rem'}}>Rupee-Rise</p>
                <button style={{fontSize:'4rem',display:"inline", border:'solid black 0.2rem', borderRadius:'5px', margin:'1rem', padding:'1rem'}}>Login</button>
                <button style={{fontSize:'4rem',display:"inline", border:'solid black 0.2rem', borderRadius:'5px', margin:'1rem', padding:'1rem'}}>SignUp</button>
                <br/><br/><br/><br/><br/>
                    <Link to='/aboutus'><button className="pages">About us</button></Link>
                    <Link to='/contactus'><button className="pages">Contact us</button></Link>
                    <Link to='/privacypolicy'><button className="pages">Privacy policy</button></Link>
                    <Link to='/termsandconditions'><button className="pages">Terms&Conditions</button></Link>
                    <Link to='/cancellationrefundpolicies'><button className="pages">Cancellation/Refund Policies</button></Link>
                    

            </center>
        </div>
    )
};

export default Home;