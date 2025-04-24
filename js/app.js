
const root = document.getElementById('root');

const App = () => {
  return React.createElement('main', null, [
    React.createElement('section', { key: 1, style: { textAlign: 'center' } }, [
      React.createElement('h1', { key: 'h1' }, 'Hi, I\'m Sonia Kurian'),
      React.createElement('p', { key: 'p' }, 'Java Spring Boot Developer'),
    ]),
    React.createElement('section', { key: 2 }, [
      React.createElement('h2', { key: 'h2' }, 'Contact Me'),
      React.createElement('p', { key: 'email' }, 'Email: soniakurian015@gmail.com'),
      React.createElement('p', { key: 'linkedin' }, 'LinkedIn: linkedin.com/in/sonia-kurian-4a7441197'),
      React.createElement('p', { key: 'github' }, 'GitHub: github.com/soniakurian015/JavaSpringBootProjects'),
    ]),
    React.createElement('section', { key: 3 }, [
      React.createElement('h2', { key: 'projectsHeader' }, 'My Projects'),
      React.createElement('div', { key: 'projects', style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' } }, [
        React.createElement('div', { key: 'project1', className: 'card' }, [
          React.createElement('h3', { key: 'projectTitle1' }, 'Spring Boot Project 1'),
          React.createElement('p', { key: 'projectDescription1' }, 'A project built with Spring Boot for an e-commerce platform.'),
          React.createElement('a', { key: 'projectLink1', href: 'https://github.com/soniakurian015/JavaSpringBootProjects', target: '_blank' }, 'View on GitHub'),
        ]),
        React.createElement('div', { key: 'project2', className: 'card' }, [
          React.createElement('h3', { key: 'projectTitle2' }, 'Spring Boot Project 2'),
          React.createElement('p', { key: 'projectDescription2' }, 'A microservices-based project using Spring Boot and Docker.'),
          React.createElement('a', { key: 'projectLink2', href: 'https://github.com/soniakurian015/JavaSpringBootProjects', target: '_blank' }, 'View on GitHub'),
        ]),
      ]),
    ]),
  ]);
};

ReactDOM.render(React.createElement(App), root);
