import AOS from 'aos'
import 'aos/dist/aos.css'
import React, { useEffect } from 'react'


const Technologyandskills = () => {
  useEffect(()=> {
    AOS.init({duration: 1000});
    }, []);

  return (
    <>
      <section>
        <div className="text-white"  data-aos="slide-right">
          <div className="m-4">
            <div>
              <span className="rounded colorBlueText colorBlue p-2 fw-semibold">
                🧑‍💻 Skills · Experience
              </span>
            </div>
            <div className="mx-auto text-center">
              <p className="h1">Technologies and skills</p>
              <br />
              <br />
              <p>
                <small>Technologies I use on a daily basis</small>
              </p>
              <div className="d-flex gap-3 mx-auto w-25 text-center">
              <i class="fa-brands fa-html5 h1 colorBlueText"></i>
              <i class="fa-brands fa-css3-alt h1 colorBlueText"></i>
              <i class="fa-brands fa-js h1 colorBlueText"></i>
              <i class="fa-brands fa-react h1 colorBlueText"></i>
              <i class="fa-brands fa-github h1 colorBlueText"></i>
              <i class="fa-brands fa-git-alt h1 colorBlueText"></i>
              <i class="fa-brands fa-node-js h1 colorBlueText"></i>
              </div>
              {/* <div><small>Other Technologies  with which I have completed projects in </small></div>
              <div className="d-flex gap-3 mx-auto w-25 text-center">
              <i class="fa-brands fa-html5 h1 colorBlueText"></i>
              <i class="fa-brands fa-css3-alt h1 colorBlueText"></i>
              <i class="fa-brands fa-js h1 colorBlueText"></i>
              <i class="fa-brands fa-react h1 colorBlueText"></i>
              <i class="fa-brands fa-github h1 colorBlueText"></i>
              <i class="fa-brands fa-git-alt h1 colorBlueText"></i>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Technologyandskills;
