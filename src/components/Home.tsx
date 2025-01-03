export const Home = () => {
  return (
    <section id="home" className="relative bg-[url('/src/assets/img/background2.jpeg')] bg-cover bg-center h-screen flex items-center justify-center animate-fade-in">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Hi, I'm Cyril
        </h1>
        <p className="text-xl md:text-3xl text-white mb-2">
        A curious cat 🤔
        </p>
        <p className="text-sm md:text-sm text-white mb-8">
        and a software engineer
        </p>
        <a
          href="#projects"
          className="inline-block bg-white text-gray-800 py-3 px-8 rounded-full font-semibold tracking-wide uppercase hover:bg-gray-200 transition duration-300"
        >
          View Projects
        </a>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <a
          href="#about"
          className="text-white hover:text-gray-300 transition duration-300"
        >
          <svg
            className="w-8 h-8 mx-auto"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
      </div>
    </section>
  );
};