import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="row ps-5 mt-5">
            <div className="section1 col-md-4">
                <h1 className='fs-2'>Camp Coffee.</h1>
                <p className='fs-6 mt-4 pt-3'>1445 Floral Ave. New York City,<br /> United States</p>
                <p className='fs-6'>MONDAY - FRIDAY <br /> 6:00 AM TO 9:00 PM</p>
                <p className='fs-6'>SATURDAY - SUNDAY<br /> 10:00 AM TO 8:00 PM</p>
            </div>

            <div className="section2 col-md-4 ">
                <p>Office: 56C Gimblinton Street, New York City,<br /> United States</p>
                <p>Contact : 4400 - 88 - 823</p>

            </div>
        </div>
    </div>
  )
}

export default Footer