import React, { useState } from 'react'
import ProjectjCard1 from './ProjectjCard1';
import ProjectCard2 from './ProjectCard2';
import ProjectCard3 from './ProjectCard3';

function Projrcts() {
  const [toggle, setUpdateToggle] = useState(1);
  const upToggleTabs = (id) => {
    setUpdateToggle(id);
    console.log(id);
  }


  return (
    <>
      <div className='flex justify-center py-12 mx-10'>

        <div className="tabs gap-1">
          <input type="radio" id="tab-10" name="tab-4" className="tab-toggle" defaultChecked />
          <label htmlFor="tab-10" className="tab tab-pill px-10 pb-12 text-3xl" onClick={() => upToggleTabs(1)}>Tab 1</label>

          <input type="radio" id="tab-11" name="tab-4" className="tab-toggle" />
          <label htmlFor="tab-11" className="tab tab-pill px-10 pb-12 text-3xl" onClick={() => upToggleTabs(2)}>Tab 2</label>

          <input type="radio" id="tab-12" name="tab-4" className="tab-toggle" />
          <label htmlFor="tab-12" className="tab tab-pill px-10 pb-12 text-3xl" onClick={() => upToggleTabs(3)}>Tab 3</label>
        </div>
      </div>
      <div className={toggle === 1 ? 'block' : 'hidden'}> <ProjectjCard1 /></div>
      <div className={toggle === 2 ? 'block' : 'hidden'}> <ProjectCard2 /></div>
      <div className={toggle === 3 ? 'block' : 'hidden'}> <ProjectCard3 /></div>

    </>
  )
}

export default Projrcts