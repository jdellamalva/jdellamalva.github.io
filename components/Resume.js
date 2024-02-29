function Resume({ resumeData = []}){

    const cards = resumeData.map((resumeItem, index) => {
        return <li key={index}>{resumeItem}</li>
    })

    return <div className="card-group">{cards}</div>
}