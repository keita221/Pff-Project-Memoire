import React from "react";
import '../css/contact.css'
import styleimage from '../assets/image.png'
const Contact = () => {
    return(
       <div className="section">
          <div className="form-parent">
               <div className="formulaire">
                  <h2>Ecrivez-nous</h2>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, dolorem.</p>
                  <form action="">
                        <div>
                            <label htmlFor="">Prenom et Nom</label>
                            <input type="text" className="item-input" placeholder="donner votre nom complet"/>
                        </div>
                        <div>
                            <label htmlFor="">Adresse Email</label>
                            <input type="text" className="item-input" placeholder="donner votre email"/>
                        </div>
                        <div>
                            <label htmlFor="">Telephone</label>
                            <input type="text" className="item-input" placeholder="donner votre telephone"/>
                        </div>
                        <div>
                            <label htmlFor="">Votre Message</label>
                            <textarea name="" id="" cols="30" rows="4" placeholder="ecrivez ici votre message" className="messgae"></textarea>
                        </div>
                        <button className="button">Envoyer</button>
                  </form>
               </div>
               <div className="section-image">
                   <img src={styleimage} alt="" srcset="" />
               </div>
          </div>
       </div>
    )
}

export default Contact