export const Contact = () => {
  const email = 'cyrilgmarcus@gmail.com'; // Replace with your email address

  return (
    <section id="contact" className="py-20 bg-gray-100 opacity-0 translate-y-10 transition duration-1000 ease-out fade-in-section">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">Contact Me</h2>
        <div className="max-w-lg mx-auto text-center">
          <p className="text-xl mb-8">
            If you have any questions, project ideas, hire me, or just want to say hello, feel free to send me an email.
          </p>
          <a
            href={`mailto:${email}`}
            className="inline-block bg-blue-500 text-white text-lg py-3 px-8 rounded-full hover:bg-blue-600 transition duration-300"
          >
            Send me an email
          </a>
          <p className="text-lg mt-4">{email}</p>
        </div>
      </div>
    </section>
  );
};