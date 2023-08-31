import React from "react";
import styleimage from '../assets/image.png'
import images from '../assets/route 1.svg'
import images1 from '../assets/route 2.svg'
import images2 from '../assets/route 3.svg'
import images3 from '../assets/route 4.svg'
import icons from '../assets/prev.svg'
import icon from '../assets/right.svg'
import charo from '../assets/charo.avif'
import '../css/reservation.css'

const Reservation = () => {
    return(
        <main>
        <section className=" section section-loading">
          <h1 id='titre'>En un click seulement <br></br>effectuer votre reservation de billiet</h1>
          <div className='form'>
              <form action="">
                <div className='item-ir'>
                  <div className='litte'>
                    <input type="radio" />
                    <label htmlFor="">Aller</label>
                  </div>
                  <div className='litte'>
                    <input type="radio" />
                    <label htmlFor="">Aller et Retour</label>
                  </div>
                </div>
                <div className='item-er'>
                  <div className="long">
                      <label htmlFor="">Depart</label>
                      <select name="" className='nana' id='nana'>
                        <option value="">dakar</option>
                        <option value="">kedougou</option>
                        <option value="">thies</option>
                        <option value="">matam</option>
                        <option value="">mbour</option>
                        <option value="">fatick</option>
                        <option value="">tamba</option>
                        <option value="">kaolack</option>
                        <option value="">saint-louis</option>
                        <option value="">diourbel</option>
                        <option value="">louga</option>
                      </select>
                  </div>
                  <div className="long">
                      <label htmlFor="">Arrivee</label>
                      <select name="" className='nana'id='nana'>
                        <option value="">dakar</option>
                        <option value="">kedougou</option>
                        <option value="">thies</option>
                        <option value="">matam</option>
                        <option value="">mbour</option>
                        <option value="">fatick</option>
                        <option value="">tamba</option>
                        <option value="">kaolack</option>
                        <option value="">saint-louis</option>
                        <option value="">diourbel</option>
                        <option value="">louga</option>
                      </select>
                  </div>
                  <div className="long">
                      <label htmlFor="">Date depart</label>
                      <input type="date" className='nana' />
                  </div>
                  <div className="long">
                      <label htmlFor="">Nombre de passager</label>
                      <input type="number" className='nana' placeholder='nombre de passager' />
                  </div>
                  <div className="style">
                      <a href="" className='btn'>Confirm</a>
                  </div>
                </div> 
              </form>
        </div>
        </section>
        <section class="section section-white">
    			<div class="container">
    				<h3 class="section-title">Choissisez une ligne de transport</h3>

            <div class="activities">
    					<div class="activities-item">
    						<img src={styleimage} className='pite'/>
    						<h4 >Mbour</h4>
    						<p>cite dambel, rue 21 face 64</p>
    					</div>
    					<div class="activities-item">
    						<img src={styleimage} alt="" className='pite'/>
    						<h4>Dakar</h4>
    						<p>cite dambel, rue 21 face 64</p>
    					</div>
    					<div class="activities-item">
    						<img src={styleimage}  className='pite'/>
    						<h4>Tamba</h4>
    						<p>cite dambel, rue 21 face 64</p>
    					</div>
              <div class="activities-item">
    						<img src={styleimage}  className='pite'/>
    						<h4>Kedougou</h4>
    						<p>cite dambel, rue 21 face 64</p>
    					</div>
    				</div>
    			</div>
    		</section>

    		<section class="section section-second">
    			<div class="container">
    				<h3 class="title1">Nos services clientel</h3>

            <div className='clientele'>
                <div className='react react-one'>
                    <img src={images} className="img" srcset="" />
                    <h3 className='fonction'>Resservation de billets de bus</h3>
                    <a href="" className='btn'>Reserver</a>
                </div>
                    <div className='react react-one'>
                    <img src={images1} className="img" srcset="" />
                    <h3 className='fonction'>Demande location de bus et mini-bus</h3>
                    <a href="" className='btn'>Louer</a>
                </div>
                <div className='react react-one'>
                    <img src={images2} className="img" srcset="" />
                    <h3 className='fonction'>Demande d'envoi de colis</h3>
                    <a href="" className='btn'>Envoi</a>
                </div>
                <div className='react react-one'>
                    <img src={images3} className="img" srcset="" />
                    <h3 className='fonction'>Autre type de fonctionalite</h3>
                    <a href="" className='btn'>Chercher</a>
                </div>
            </div>

    			</div>
    		</section>

    		<section class="section section-white">
    			<div class="container">
    				<h3 class="section-title2">Ce qu'ils pensent de nous</h3>

            <div className='sels'>
              <div>
                  <img src={icons} alt="" />
              </div>
              <div className='comments'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab ad molestiae iste dolorum id iure. Totam eveniet voluptate reprehenderit dicta suscipit repudiandae animi magni quae in, fugiat eaque ut veritatis praesentium facilis. Consequuntur excepturi amet alias omnis voluptatibus ut blanditiis mollitia optio nobis, consectetur expedita id dolore fuga incidunt sapiente.
              </div>
              <div>
              <img src={icon} alt="" />
              </div>
            </div>
            <div className='person'>
                <div>
                    <img src={charo} className='radius' />
                </div>
                <div>
                    <p className='charo'>GERALD CHARO KEITA <br />geraldcharokeita221@gmail.com <br />77773773737</p>
                </div>
            </div>
    			</div>
    		</section>
        </main>
    )
}

export default Reservation