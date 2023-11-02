import './animation.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import React, { useEffect } from 'react'

const Hello = () => {
        useEffect(()=> {
        AOS.init({duration: 1000});
        }, []);


  return (
    <>
    <section  className='animation' data-aos="zoom-out">
        <div className="row mt-4">
            <div className="col-lg-3 mt-5 ms-5">
                <div className='mt-5'>
                    <span className='rounded colorBlueText colorBlue p-2 fw-semibold'>👋 Hello, I'm</span>
                    <br />
                    <span className='h1 fw-bolder text-light'> Adeosun <br /> Samuel</span><br />
                    <span className='text-secondary'>Full Sack Web Developer</span>
                    <div><i class="bi bi-linkedin text-secondary m-2"></i><i class="bi bi-github text-secondary m-2"></i></div>
                </div>
            </div>
            <div className="col-lg-5">
                <img className='w-100' src="../src/assets/AvatarAndIcons.svg" alt="" />
            </div>
            <div className="col-lg-2  my-auto mx-auto text-center">
                <a className='nav-link colorBlueText m-2' href="" ><span className='borderColor p-1 rounded'>Download CV <i class="bi bi-arrow-bar-down"></i></span></a>
                <a className='nav-link colorBlueText m-3' href=""><span className='borderColor p-1  rounded'> Let talk <i class="bi bi-whatsapp"></i></span></a>
            </div>
        </div>
    </section>
    </>
  )
}

export default Hello