const { useState, useEffect } = React;

function App() {
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    fetch('./data/projectData.json')
      .then(response => response.json())
      .then(data => setProjectData(data))
      .catch(error => alert('Error fetching project data' + error));
  }, []);

  let routes = {
    '#home': Home,
    '#projects': () => <Projects projectData={projectData} />,
    // '#resume': Resume,
  }

  const [hash, setHash] = useState(window.location.hash);

  useEffect(() => {
    const hashChangeHandler = () => setHash(window.location.hash);
    window.addEventListener('hashchange', hashChangeHandler);
    return () => window.removeEventListener('hashchange', hashChangeHandler);
  }, []);

  let Component = routes[hash] || Home; // Default to Home if hash is not in routes

  return (
      <div>
          <Nav />
          <Component />
      </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));