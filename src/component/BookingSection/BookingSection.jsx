import React from 'react'

const BookingSection = () => {
  return (
    <div className='book-page'>
        <div className="part1 row">
            <div className="col-md-8">

                <div className="text">
                    <h1 className='text-uppercase fs-1'>Book a table</h1>
                    <p className='fs-6'>Whatever the occasion, we're certain that you can make it special at <br /> CAMP COFFIEE.</p>
                </div>

                <form>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" aria-describedby="name" placeholder='Your Name'/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" placeholder='Your Email'/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Message" className="form-label">Message</label>
                        <input type="text" className="form-control" id="Message" placeholder='Your Message'/>
                    </div>
                    <button type="submit" className="btn btn-dark btn-lg mt-4">Submit</button>
                    </form>
                </div>
        </div>

        <div className="part2">
            <div className='text'>
                <h1 className='fw-bold'>BE PART OF THE CHEWS FAMILY: WE'VE CELEBRATED OUR CUSTOMERS' BIRTHDAYS, ENGAGEMENT PARTIES AND HEN DOS AT HERE CAMP COFFEE.</h1>
            </div>
        </div>

    </div>
  )
}

export default BookingSection