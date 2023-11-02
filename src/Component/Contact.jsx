import AOS from 'aos'
import 'aos/dist/aos.css'
import React, { useEffect } from 'react'



const Contact = () => {
  useEffect(()=> {
    AOS.init({duration: 4000});
    }, []);

  return (
    <>
      <section>
        
        <div className='m-4'> 
        <span className='rounded colorBlueText colorBlue p-2 fw-semibold' data-aos="fade">🧐 About me</span>
          <div className="mx-auto text-center">
            <h1 className='text-light'>Let Chat</h1>
            <h1></h1>
            <div className="row">
            <div className="col-lg-4"></div>
              <div className="col-lg-2 my-auto colorBlueText">
                <div><i class="bi bi-whatsapp borderColor rounded p-1">WhatsApp</i></div>
              </div>
              <div className="col-lg-2 colorBlueText"> <i class="bi bi-send"></i><br />
              <span>Email</span><br /><span>imbibemedia11@gmail.com</span>
              <i class="fa-solid fa-copy colorBlueText"></i>
              </div>
            </div>
            <div className="col-lg-4"></div>
            <br />
            <button className='btn colorBlueText'>Swipe Up <i class="bi bi-arrow-up"></i></button>
          </div>
        </div>
        </section>  

    </>
  )
}

export default Contact