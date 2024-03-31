import React from 'react'

function ProjectCard1Child(props) {
    const { title, description, imgUrl } = props.country;

    return (
        <>

            {
                <div className="card card-compact w-96 my my-6 shadow-xl ">
                    <figure><img src={imgUrl} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title justify-center text-2xl">{title}</h2>
                        <p>{description}</p>
                    </div>
                </div>
            }
        </>
    )
}

export default ProjectCard1Child