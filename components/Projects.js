function Projects({ projectData = []}){

    const cards = projectData.map((project, index) => {
        return <Project key={index} project={project} />
    })

    return <div className="card-group">{cards}</div>
}