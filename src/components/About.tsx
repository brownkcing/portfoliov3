import meImage from '/src/assets/img/me.jpg'

export const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-100 opacity-0 translate-y-10 transition duration-1000 ease-out fade-in-section">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex justify-center">
            <img src={meImage} alt="cyril" className="w-64 h-64 rounded-full object-cover shadow-lg" />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">I'm Cyril</h3>
            <p className="text-lg mb-4">
              A Software Engineer (by choice) and what started as a hobby eventually grew into a passion and a career.
            </p>
            <p className="text-lg mb-4">
              Started as a self-taught frontend developer, and over time, I’ve gone from just a code monkey,
              to actively solving problems; a Software Engineer.
            </p>
            <p className="text-lg mb-4">
              While proficient in front-end, I'm somewhat good in back-end as well.
              Strenghtening these two aspect, while paving my way to DevOps 👀
            </p>
            <p className="text-lg">
              I also dwell in anime and games 🎮. A little bit of travelling here and there too.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
