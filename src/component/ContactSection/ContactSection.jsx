import React from 'react'
import img from '../../assets/gambar2.jpg'

const ContactSection = () => {
  return (
    <div className='contact-page'>
        <div className="row ps-sm-5 ms-md-5">
            <div className="col-md-8 ps-5">
                <h1 className='text-uppercase'>Contact US</h1>
                <div className="row mt-2">
                    <div className="col-4 d-flex flex-column">
                        <div className='mt-5 mb-5'>
                            <h6 className='text-uppercase'>cafe</h6>
                            <p>4400-88-022</p>
                        </div>
                        <div className='mb-5'>
                            <h6 className='text-uppercase'>Email</h6>
                            <p>Campcoffie@gmail.com</p>
                        </div>
                        <div>
                            <h6 className='text-uppercase'>Bookings</h6>
                            <p>Bookings.com</p>
                        </div>
                    </div>
                    
                    <div className="col d-flex flex-column ps-5">
                        <div className='mt-5 mb-5'>
                            <h6 className='text-uppercase'>press</h6>
                            <p>Press@campcoffe</p>
                        </div>
                        <div className='mb-5'>
                            <h6 className='text-uppercase'>event</h6>
                            <p>Event@campcoffie</p>
                        </div>
                        <div>
                            <h6 className='text-uppercase'>Marketing</h6>
                            <p>Marketing@camcoffie</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col mt-5">
                <img src={img} className="img-thumbnail mt-5"/>

            </div>
        </div>
    </div>
  )
}

export default ContactSection