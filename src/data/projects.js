const data = [
  {
    title: 'Concert Buddy',
    subtitle: 'A ticket marketplace / friend connection website for upcoming local concerts',
    image: '/images/projects/concertbuddy.jpg',
    link: 'https://gitlab.com/kanye-rest/concert-buddy',
    date: '2022-7-01',
    desc:
      'Developed a Django / React e-commerce application with functionalities such as authentication and friend messaging. '
      + 'Interfaced with Setlist.fm API to provide upcoming concert data for users to find events by location to purchase or sell tickets. '
      + 'Collaborated with 4 engineers to architect the design and features using Domain-Driven Design and an agile workflow.'
  },
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
    date: '2022-5-01',
    desc:
      'Refactored a Django-based monolith application into microservices with modern architecture and React components.'
      + ' Employed RabbitMQ pub/sub and middleware queuing between 3 microservices for efficient backend data communication. '
      + ' Integrated 3 third-party APIs utilizing anti-corruption layers (ACLs) to ensure accurate data mapping.'
  },
];

export default data;
