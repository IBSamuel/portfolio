import './animation.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import React, { useEffect } from 'react'
const Aboutme = () => {
          useEffect(()=> {
        AOS.init({duration: 3000});
        }, []);

  return (
    <>
    <section className='row m-5 gap-3 animation' data-aos="fade-right">
        <div className="col-lg-3">
            <img className='w-100' src="../src/assets/ProfilePic.png" alt="" />
        </div>
        <div className="col-lg-7 text-white">
        <span className='rounded colorBlueText colorBlue p-2 fw-semibold'>🧐 About me</span>
        <p className='h1'>Adeosun Samuel Oluwatomisin</p>
        <span>👋"Hello, I'm Adeosun Samuel Oluwatomisin, known as 'Imbibe' in the software development world. I am a passionate and innovative software developer currently pursuing a National Innovative Diploma (NID) in the field. With a strong foundation in programming, I have honed my skills in creating cutting-edge solutions and applications. My dedication to learning and problem-solving drives me to stay at the forefront of technology, making me a valuable asset to any team. I am excited to contribute my expertise to projects that push the boundaries of what's possible in the world of software development."

</span>
        </div>
    </section>
    </>
  )
}

export default Aboutme