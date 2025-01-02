export const Projects = () => {
  return (
    <section id="projects" className="bg-gray-100 py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Add your project cards here */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4">Project 1</h3>
            <p className="text-gray-600 mb-4">A brief description of your project goes here.</p>
            <a href="#" className="text-blue-500 hover:underline">View Project</a>
          </div>
          {/* Repeat the project card for each project */}
        </div>
      </div>
    </section>
  );
};