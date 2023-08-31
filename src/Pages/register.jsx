import { useState } from 'react'
import '../Css/Login.css'

function Register() {
  const [count, setCount] = useState(0)

  return (
    <>
            <section class="section section-blue">
    			<div class="container">
    				<div className='login'>

                        <form action="">
                        <div>
                                <label htmlFor="">Prenom:</label>
                                <input type="email" id='input1' className='item-input' placeholder='donner votre prenom'/>
                            </div>
                            <div>
                                <label htmlFor="">nom:</label>
                                <input type="email" id='input1' className='item-input' placeholder='donner votre nom'/>
                            </div>
                            <div>
                                <label htmlFor="">Adresse:</label>
                                <input type="email" id='input1' className='item-input' placeholder='donner votre adresse'/>
                            </div>
                            <div>
                                <label htmlFor="">Email:</label>
                                <select id='input1' className='item-input'>
                                    <option>Utulisateur</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="">Telephone:</label>
                                <input type="email" id='input1' className='item-input' placeholder='donner votre numero telephone'/>
                            </div>
                            <div>
                                <label htmlFor="">Email:</label>
                                <input type="email" id='input1' className='item-input' placeholder='donner votre email'/>
                            </div>
                            <div>
                                <label htmlFor="">Mot de passe :</label>
                                <input type="password" id='input2' className='item-input' placeholder='donner votre password'/>
                            </div>
                            <a href="" className='log'>Inscrire</a>
                            <p className='register'>Si vous avez pas de compte <a href="#">Connectez vous ici</a></p>
                        </form>
                    </div>
    			</div>
    		</section>

    </>
  )
}

export default Register