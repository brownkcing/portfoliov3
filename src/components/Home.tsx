export const Home = () => {
  return (
    <section id="home" className="bg-gray-100 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h2>
        <p className="text-xl mb-8">I'm a frontend engineer passionate about creating amazing web experiences.</p>
        <a href="#projects" className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600">View Projects</a>
      </div>
    </section>
  );
};