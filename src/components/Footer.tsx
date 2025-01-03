export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-lg">&copy; {new Date().getFullYear()} Cyril Marcus</p>
        <div className="mt-4">
          <a href="https://github.com/brownkcing" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 mx-2">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/cyril-ms/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 mx-2">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};