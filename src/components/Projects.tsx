import budgetBuddie from "/src/assets/img/budgetbuddie.jpg";
import makanWhere from "/src/assets/img/makanwhere.jpg";
import comingSoon from "/src/assets/img/construction.jpg";

export const Projects = () => {
  const project1Desc = () => (
    <>
      <p>A personal finance management.</p>
      <p>
        A React + TypeScript project using Vite, Tailwind CSS, and Radix/UI for
        a responsive UI, with Redux Toolkit for state management + Thunk for
        async behaviour. A mock API layer is constructed to simulate network
        delays via LocalStorage.
      </p>
    </>
  );

  const project2Desc = () => (
    <>
      <p>Food/Restaurant Recommendation</p>
      <p>
        A React + TypeScript project using NextJS, Tailwind CSS, and Radix/UI
        for a responsive UI. With an added ✨ touch from Mistral AI, this app
        will let AI choose/recommend you the best place for your next meal.
      </p>
      <p> 🚧UNDER FINE TUNING🚧 </p>
    </>
  );

  const projects = [
    {
      id: 1,
      title: "BudgetBuddie",
      description: project1Desc(),
      image: budgetBuddie,
      link: "https://budgetbuddie.netlify.app",
    },
    {
      id: 2,
      title: "MakanWhere",
      description: project2Desc(),
      image: makanWhere,
      link: "https://makan-where.netlify.app/",
    },
    {
      id: 3,
      title: "Project 3",
      description: "Coming soon",
      image: comingSoon,
      link: "https://html5up.net/eventually",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 opacity-0 translate-y-10 transition duration-1000 ease-out fade-in-section"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">Portfolios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
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
