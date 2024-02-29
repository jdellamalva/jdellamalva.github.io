function Projects({ projectData = []}){

    const [expandedProject, setExpandedProject] = useState(null)

    const cards = projectData.map((project, index) => {
        const isExpanded = expandedProject === index;
        return (
            expandedProject === null || isExpanded ? (
            <ProjectCard 
                key={project.id}
                project={project}
                isExpanded={isExpanded}
                onExpand={() => setExpandedProject(isExpanded ? null : index)} 
            />
        ) : null
        );
    })

    return (
        <div
            className="card-group projects"
            style={{ 
                position: 'relative', 
                display: 'flex', 
                flexWrap: 'wrap', 
                justifyContent: 'flex-start', 
                alignItems: 'flex-start', 
                padding: '20px', 
                gap: '20px',
            }}
        >
            {cards}
        </div>
    );
};