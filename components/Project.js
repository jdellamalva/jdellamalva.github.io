function Project({ project }) {
    return (
        <div className="card" style={{width: '18rem'}}>
            <img src={project.imageSrc} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <a href={project.link} target="_blank" className="btn btn-primary">GitHub</a>
            </div>
        </div>
    );
}