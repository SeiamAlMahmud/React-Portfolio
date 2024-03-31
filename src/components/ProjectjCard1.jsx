import React from 'react'
import ProjectCard1Child from './ProjectCard1Child'
import projImg1 from "../assets/img/project-img1.png"
import projImg2 from "../assets/img/project-img2.png"
import projImg3 from "../assets/img/project-img3.png"
function ProjectjCard1() {
    const projects = [
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg2,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg3,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg2,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg3,
        },
    ];



    return (
        <>
            <div className='flex justify-center items-center text-center px-1 py-10'>
                <div className="flex flex-col lg:grid lg:grid-cols-2 xl:grid xl:grid-cols-3 lg:gap-5 justify-center items-center gap-2 w-4/5">
                {
                    projects.map((event, index) => {
                        return (
                            <ProjectCard1Child key={index} country={event} />
                        )
                    })
                }
            </div>
        </div >
        </>
    )
}

export default ProjectjCard1