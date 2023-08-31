import React from "react";
import about from '../assets/about.svg'
import partenaire from '../assets/partenaire.svg'
import partenaire1 from '../assets/partenaire1.svg'
import partenaire2 from '../assets/partenaire2.svg'
import partenaire3 from '../assets/partenaire3.svg'
import partenaire4 from '../assets/partenaire4.svg'
import '../css/a_propos.css'

const Propos = () => {
    return(
        <>
            <section class="section section-baige">
    			    <div class="container">
    		     
             <div className='item-classe'>

                  <div>
                        <img src={about} alt="" />
                  </div>

                  <div>
                      <h1 className="section-title1">A Propos de nous</h1>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis laborum quasi et 
                        vero aspernatur quam harum nam libero. Error quos ab exercitationem tempore dicta quae
                         dolorem necessitatibus ratione mollitia enim aliquam facere possimus optio obcaecati
                          vitae nobis odit et qui reprehenderit, tenetur doloribus. Quisquam ipsum sapiente 
                          quae, atque necessitatibus tenetur nihil voluptate molestias saepe, nostrum laborum 
                           deleniti repellendus assumenda dolor fugiat. Quod voluptatibus nisi amet totam nam!
                            Temporibus ullam quos tenetur recusandae numquam aperiam nobis, mollitia veritatis
                             unde quo ratione fuga autem ut dolor ex eaque ducimus eum similique nam quibusdam 
                             dolore impedit odit fugit alias! Perferendis, quaerat dolorum.
                      </p>
                      <input type="submit" name="" id="env" className='button' value="Nous Contactez"/>
                  </div>

                 

             </div>

    			</div>
    		</section>

            <section class="section section-white">
                <div class="container">

                <h3 class="section-title2">Quelqu'uns de chers patenaires de travailles</h3>

                  <div className="item-client">
                    <div>
                      <img src={partenaire} alt="" />
                    </div>
                    <div>
                      <img src={partenaire1} alt="" />
                    </div>
                    <div>
                      <img src={partenaire2} alt="" />
                    </div>
                    <div>
                      <img src={partenaire3} alt="" />
                    </div>
                    <div>
                      <img src={partenaire4} alt="" />
                    </div>
                  </div>
                </div>
    		</section>
        </>
    )
}

export default Propos