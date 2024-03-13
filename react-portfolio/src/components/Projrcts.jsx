import React from 'react'

function Projrcts() {

    const projects = [
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: "projImg1",
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: "projImg2",
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: "projImg3",
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: "projImg1",
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: "projImg2",
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: "projImg3",
        },
      ];

  return (
    <div className='flex justify-center py-12 mx-10'>
   
   <div className="tabs gap-1">
	<input type="radio" id="tab-10" name="tab-4" className="tab-toggle" defaultChecked />
	<label htmlFor="tab-10" className="tab tab-pill px-10 pb-12 text-3xl">Tab 1</label>

	<input type="radio" id="tab-11" name="tab-4" className="tab-toggle" />
	<label htmlFor="tab-11" className="tab tab-pill px-10 pb-12 text-3xl">Tab 2</label>

	<input type="radio" id="tab-12" name="tab-4" className="tab-toggle" />
	<label htmlFor="tab-12" className="tab tab-pill px-10 pb-12 text-3xl">Tab 3</label>
</div>
    
    </div>
  )
}

export default Projrcts