function ProjectCard({ project, isExpanded, onExpand }) {

    const handleCardClick = () => {
        onExpand();
    };

    const expandedStyle = {
        position: 'absolute',
        top: '20px',
        left: '20px',
        maxWidth: 'calc(100% - 40px)',
        maxHeight: 'calc(100% - 40px)',
        zIndex: 1000,
        overflow: 'hidden',
        transition: 'all 0.3s ease-in-out',
        transform: 'none',
        boxShadow: 'none',
    };

    const collapsedStyle = {
        maxWidth: '400px',
        maxHeight: '600px',
        overflow: 'hidden',
        border: 'none',
        transition: 'all 0.3s ease-in-out',
    };

    return (
        <div className="card project-card" style={isExpanded ? expandedStyle : collapsedStyle} onClick={handleCardClick}>
            {isExpanded ? (
                <iframe src={project.media} title={project.title} style={{border: 'none'}}></iframe>
                ) : (
                <img src={project.imageSrc} alt={project.title} />
            )}

            <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text" style={{
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 3,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                }}>{project.description}</p>
                <a href={project.link} target="_blank" className="btn btn-primary">GitHub</a>
            </div>
        </div>
    );
}