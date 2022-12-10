import React from 'react'
import { useNavigate } from 'react-router'

import jumbotron from '../../assets/bg.jpg'
import gambar5 from '../../assets/gambar5.jpg'
import gambar6 from '../../assets/gambar6.jpg'
import gambar1 from '../../assets/gambar1.jpg'
import gambar3 from '../../assets/gambar3.jpg'
import gambar7 from '../../assets/gambar7.jpg'

import MenuList from '../../component/MenuList/MenuList'

const MainPage = () => {
    const navigate = useNavigate()

    const handleMenu= () =>{
        navigate('/menu')
    }

    const handleBook= () =>{
        navigate('/book')
    }
  return (
    <>
    <div className='main'>
        <div className='jumbotron'>
            <img className='img-fluid' src={jumbotron} alt="" />
            <div className='venue'>
                <h1>Camp Coffee.</h1>
                <p>1445 Floral Ave. New York City, United States</p>
            </div>
        </div>
        <div className="tagline">
            <h2 className='coffee'>“A cup of coffee can be an inspiration,  </h2>
            <h2 style={{paddingLeft: '10px'}}>that he never lies in the name of taste. Coffee always has a story, that black isn't always dirty, </h2>
            <h2 style={{paddingLeft: '10px'}}>that bitter taste doesn't always bring sadness either.”</h2>
        </div>

        <div className="menu-list container-fluid">
            <h1 className='text-center text-uppercase mb-5'>our menu</h1>
            <div className='row'>
                <div className="col-md">
                    <MenuList title="Cappucino" desc="The top layer is milk foam and decorated with cocoa powder" price='$4.00'/>
                    <MenuList title="Mocha" desc="The uniqueness of this type of coffee drink is the combination of chocolate mixed with espresso and milk." price='$4.00'/>
                </div>
                <div className="col-md">
                    <MenuList title="Cold Brew" desc="The aroma of coffee and the resulting taste is distinctive, namely not too bitter and not too sour" price='$6.00'/>
                    <MenuList title="Americano" desc="This drink can be served hot or cold." price='$5.00'/>
                </div>
                
            </div>

            <div className="button ms-2">
                <button className='btn btn-dark ms-5 mt-5 btn-lg' onClick={handleMenu}>view the menu</button>
            </div>
            
        </div>

        <div className="philosophy">
            <div className="row mt-5">
                <div className="col-md mt-5">
                    <img className='img-fluid' src={gambar5} alt="" />
                </div>
                <div className="section2 col-md d-flex flex-column ms-md-5 mt-5 justify-content-center">
                    <h2 className='fs-1'>We Care</h2>
                    <p className='fs-5'>Our philosophy is to be part of the neighborhood and give back to our community. </p>
                    <p className='fs-5'>We publish monthly sourdough recipe booklets both online and in-store, organize workshops and evening courses, and even rent out our shop for local artists and musicians.</p>

                </div>
            </div>

        </div>

        <div className="recipes">
            <div className="row ps-5">
                <div className="section1 col-md">
                    <div>
                        <h4 className='fs-2'>Recipes</h4>
                        <p className='fs-6'>Sourdough can be intimidating for a novice baker, but it doesn't have to be.
                        Every month, we combine some of our favorite sourdough recipes together.</p>
                    </div>
                    <div>
                        <h4 className='fs-2'>Hand Crafted</h4>
                        <p className='fs-6'>Want to learn more about coffee and the secrets of the best coffee making?
                        Join our quarterly Hand Crafted courses in our store.</p>
                    </div>
                    <div>
                        <h4 className='fs-2'>Community</h4>
                        <p className='fs-6'>Looking for a venue to host an event?
                            CAMPOS welcomes creative souls from all walks of life.</p>
                    </div>
                </div>

                <div className="section2 col-md">
                    <img src={gambar1} className=' float-end' />
                </div>
            </div>
        </div>

        <div className="gallery">
            <div className="row">
                <div className="col-md">
                    <img src={gambar6} class="img-thumbnail" />
                </div>

                <div className="col-md">
                    <img src={gambar3} class="img-thumbnail" />
                </div>

                <div className="col-md">
                    <img src={gambar7} class="img-thumbnail" />
                </div>

            </div>
        </div>

        <div className="book-table">
            <div className='detail'>
                <h1 className='text-uppercase'>book a table</h1>
                <p>Breakfast, lunch, or weekend nongki, we're always open for reservations.</p>
                <div>
                    <button className='btn btn-light' onClick={handleBook}>Book a table</button>
                </div>
                
            </div>
        </div>

        
    </div>
    </>
    
  )
}

export default MainPage