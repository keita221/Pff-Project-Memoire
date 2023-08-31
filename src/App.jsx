import { useState } from 'react'
import './App.css'
import reactimage from './assets/logo.png'
import 'bootstrap/dist/css/bootstrap.css'
import { Link, Route, Routes } from 'react-router-dom'
import Reservation from './Pages/reservation'
import Location from './Pages/location'
import Envoi from './Pages/envoi_colis'
import Propos from './Pages/a_propos'
import Contact from './Pages/contact'
import Login from './Pages/login'
import Register from './Pages/register'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className="className">
         <div className="container">
             <div className="head">
                <div className="logo">
                    <img src={reactimage} className='image' width='150px' height='70px'/>
                </div>
                <div className="liens">
                    <ul className='item-liens'>
                      <li><Link to="/reservation" rel="stylesheet" className='item'>Reservation</Link></li>
                      <li><Link to="/location" rel="stylesheet" className='item'>Location</Link></li>
                      <li><Link to="/envoi_colis" rel="stylesheet" className='item'>Envoi colis</Link></li>
                      <li><Link to="/a_propos" rel="stylesheet" className='item'>A Propos</Link></li>
                      <li><Link to="/contact" rel="stylesheet" className='item'>Contact</Link></li>
                    </ul>
                </div>
                <div className='syteme'>
                      <div><Link to="/login" className="button">Login</Link></div>
                      <div><Link to="/register" className='button'>Register</Link></div>
                </div>
             </div>
         </div>
      </header>

      <div className="route">
        <Routes>
           <Route path='/login' element={<Login />} />
           <Route path='/register' element={<Register />} />
           <Route path='/reservation' element={<Reservation />} />
           <Route path='/location' element={<Location />} />
           <Route path='/envoi_colis' element={<Envoi />} />
           <Route path='/a_propos' element={<Propos />} />
           <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>

        <footer>
        <div className="container">
          <div className='footer-item'>
            <div>
              <div>
                <img src={reactimage} className='image' width='150px' height='70px'/>
              </div>
              <p className='item-pied'>adipisicing elit. Optio ratione itaque sequi rem vel ipsa numquam at nam unde explicabo!</p>
              <p className='item-pie'>Copyright Satyam Studio</p>
            </div>
            <div>
              <h4 className='item-h4'>Get in Touch</h4>
              <p className='item-pied'> 8819 Ohio St. South Gate, CA 90280.</p>
              <p className='item-pied'>charodesignestudio@gmail.com</p>
              <p className='item-pied'>+221 337899087.</p>
            </div>
            <div>
              <div className='item-p'>
                <p className='ronded'><a href="" className='rond'>FB</a></p>
                <p className='ronded'><a href="" className='rond'>IN</a></p>
                <p className='ronded'><a href="" className='rond'>LN</a></p>
                <p className='ronded'><a href="" className='rond'>YB</a></p>
              </div>
              <p className='item-pied'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, assumenda?.</p>
              <p className='item-pie'>telecharger l'application sur</p>
            </div>
            <div>
              <h4 className='item-h4'>Join a Newsletter</h4>
              <div>
                <label htmlFor="">your email</label>
                <input type="text" className='nana' placeholder='ecrire ici...'/>
              </div><br />
                <input type="submit" name="" id="env" className='button'/>
            </div>
          </div>
        </div>
        </footer>
        <div className="pied-footer">
                    <div className="container">
                        <div className="foot">
                            <div className='item-pied'>@ Charo Design Studio</div>
                            <div className='item-pied'>@ Aout / 2023</div>
                            <div className='item-pied'>geraldcharokeita221@gmail.com</div>
                        </div>
                    </div>
        </div>
    </>
  )
}

export default App
