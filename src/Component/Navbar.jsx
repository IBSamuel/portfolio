// import React from 'react'




import React, { useEffect, useState } from 'react';
import "./Navbar.css"

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0.009);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>    
   <nav className={scrolled ? 'navbar scrolled navbar-expand-lg colorBlue rounded' : 'navbar'}>
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img className='logoSize' src="../src/assets/Imbibe Logo Transparent.png" alt="" /></a>
    <span class="navbar-toggler border-0" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText me-3" aria-expanded="false" aria-label="Toggle navigation">
    <i class="bi bi-toggles2 colorBlueText me-5"></i>
    </span>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2">

      </ul>
      <div class="body">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item me-5">
          <a class="nav-link active text-light buleHover me-5" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item me-5">
          <a class="nav-link me-5 text-light buleHover" href="#">About me</a>
        </li>
        <li class="nav-item me-5">
          <a class="nav-link text-white buleHover me-5" href="#">Skills</a>
        </li>
        <li class="nav-item me-5">
          <a class="nav-link me-5 text-light buleHover" href="#">Contact</a>
        </li>
      </ul>
      </div>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar