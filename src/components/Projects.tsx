export const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Project 1',
      description: 'A brief description of Project 1',
      image: '/path/to/project1-image.jpg',
      link: 'https://project1.com',
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'A brief description of Project 2',
      image: '/path/to/project2-image.jpg',
      link: 'https://project2.com',
    },
    // Add more projects as needed
  ];

  return (
    <section id="projects" className="py-20 opacity-0 translate-y-10 transition duration-1000 ease-out fade-in-section">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};