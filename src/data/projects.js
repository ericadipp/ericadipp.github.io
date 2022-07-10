const data = [
  {
    title: 'CarCar',
    subtitle: 'The premiere solution for automobile dealership management!',
    image: '/images/projects/carcarpic.jpg',
    link: 'https://gitlab.com/Josiah.Pederson/project-beta',
    date: '2022-6-01',
    desc:
      'Built a full-stack Django / React application with REST API architecture, 16+ React components and authentication features.'
      + ' Designed the microservice-based application utilizing 7 Docker containers to ensure data integrity and horizontal scalability.'
      + ' Developed an understanding of database communication by using polling techniques to share data between microservices'
  },
  {
    title: 'Conference GO',
    subtitle: 'Resource for in-person and virtual conference planner for attendees and presenters',
    image: '/images/projects/conferencego1.jpg',
    link: 'https://gitlab.com/ericadippold/fearless-frontend',
    date: '2022-6-01',
    desc:
      'Refactored a Django-based monolith application into microservices with modern architecture and React components.'
      + ' Employed RabbitMQ pub/sub and middleware queuing between 3 microservices for efficient backend data communication. '
      + ' Integrated 3 third-party APIs utilizing anti-corruption layers (ACLs) to ensure accurate data mapping.'
  },
];

export default data;
