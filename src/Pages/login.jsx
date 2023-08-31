import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from '../api/axios';
import '../Css/Login.css';

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate();
  const handleLogin = async (event) => {
    event.preventDefault();
    try{
        await axios.post('/login', {email, password}) 
        setEmail("")
        setPassword("")
        navigate("/reservation");
    } catch (e) {
       console.log(e);
  }
}

  return (
    <>
            <section class="section section-blue">
    			<div class="container">
    				<div className='login'>

                        <form onSubmit={handleLogin}>
                            <div>
                                <label htmlFor="">Email:</label>
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id='input1' className='item-input' placeholder='donner votre email'/>
                            </div>
                            <div>
                                <label htmlFor="">Mot de passe :</label>
                                <input type="Password"  value={password} onChange={(e) => setPassword(e.target.value)} id='input2' className='item-input' placeholder='donner votre password'/>
                            </div>
                            <a href="" className='log'>Connexion</a>
                            <center><a href="" id='li' className='items' >Mot de passe oublier</a></center>
                            <p className='register'>Si vous avez pas de compte <a href="">Inscrivez vous ici</a></p>
                        </form>
                    </div>
    			</div>
    		</section>

        
    </>
  )
}

export default Login