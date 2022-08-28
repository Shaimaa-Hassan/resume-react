import React from 'react'

 function Skills() {
  
  return (
    <div className='skills'>
      <h2>skills</h2>
      <div className='flex-skills'>
      <div>
      <div className='total-bar'>
      <span>html</span>
    <div className='bar'>
      <span className='html-bar'></span>
    </div>
    </div>
    <div className='total-bar'>
    <span>css</span>
    <div className='bar-css'>
      <span className='content-bar-css'></span>
    </div>
    </div>
    <div className='total-bar'>
      <span>javascript</span>
    <div className='bar-js'>
      <span className='content-bar-js'></span>
    </div>
    </div>
    <div className='total-bar'>
      <span>bootstrap</span>
    <div className='bar-bs'>
      <span className='content-bar-bs'></span>
    </div>
    </div>
    </div>
    <div className='right-skills'>
      <p>proficient: html css javascript bootstrap react</p>
      <p>moderate: c++, java, python, c, c#</p>
    </div>
    </div>
    </div>
  )
}
export default Skills