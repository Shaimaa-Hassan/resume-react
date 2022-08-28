import React from 'react';
import pro1 from '../pictures/pro1.png';
import pro2 from '../pictures/pro2.png';
import pro3 from '../pictures/pro3.png';
import pro4 from '../pictures/pro4.png';
import pro5 from '../pictures/pro5.png';
import pro6 from '../pictures/pro6.png';

 function Projects() {
  return (
    <div className='projects'>
      <h2>Projects<br/><small>click on any image to show project page details</small></h2>
      <div className='section'>
    <div className="slider" >
      <a className='spanpro1' href='https://shaimaa-hassan.github.io/project_one/task6.html' target={'_blank'}><img src={pro1} alt=""/></a>
      <a className='spanpro2' href='https://shaimaa-hassan.github.io/project_two/indexp2.html' target={'_blank'}><img src={pro2} alt=""/></a>
      <a className='spanpro3' href='https://shaimaa-hassan.github.io/project_three/trial.html' target={'_blank'}><img src={pro3} alt=""/></a>
      <a className='spanpro4' href='https://shaimaa-hassan.github.io/project_four/trial.html' target={'_blank'}><img src={pro4} alt=""/></a>
      <a className='spanpro5' href='https://shaimaa-hassan.github.io/project-5-Bootstrap/trial.html' target={'_blank'}><img src={pro5} alt=""/></a>
      <a className='spanpro6' href='https://shaimaa-hassan.github.io/Project6-Bootstrap5/trial.html' target={'_blank'}><img src={pro6} alt=""/></a>
  </div>
</div>
      </div>
  )
}
export default Projects