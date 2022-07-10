const projects = [
  {
    company: 'Concert Buddy',
    position: 'Full-Stack Software Engineer',
    link: 'https://gitlab.com/kanye-rest/concert-buddy',
    daterange: '2022',
    points: [
      'Developed a Django / React e-commerce application with functionalities such as firebase authentication and friend messaging.',
      'Interfaced with Setlist.fm API to provide upcoming concert data for users to find events by location to purchase or sell tickets.',
      'Collaborated with 4 engineers to architect the design and features using Domain-Driven Design and an agile workflow.',
    ],
  },
    {
      company: 'CarCar',
      position: 'Full-Stack Software Engineer',
      link: 'https://gitlab.com/Josiah.Pederson/project-beta',
      daterange: '2022',
      points: [
        'Built a full-stack Django / React application with REST API architecture, 16+ React components and authentication features.',
        'Designed the microservice-based application utilizing 7 Docker containers to ensure data integrity and horizontal scalability.',
        'Developed an understanding of database communication by using polling techniques to share data between microservices.',
      ],
    },
    {
      company: 'Conference GO',
      position: 'Full-Stack Software Engineer',
      link: 'https://gitlab.com/ericadippold/fearless-frontend',
      daterange: '2022',
      points: [
        'Refactored a Django-based monolith application into microservices with modern architecture and React components.',
        'Employed RabbitMQ pub/sub and middleware queuing between 3 microservices for efficient backend data communication.',
        'Integrated 3 third-party APIs utilizing anti-corruption layers (ACLs) to ensure accurate data mapping.',
      ],
    },
  ];

  export default projects;
