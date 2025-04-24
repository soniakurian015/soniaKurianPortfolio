
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
    ])
  ]);
};

ReactDOM.render(React.createElement(App), root);
