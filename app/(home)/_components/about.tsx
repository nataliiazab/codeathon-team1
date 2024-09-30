const About: React.FC = () => {
  return (
    <section className="py-8 px-4 md:py-16 md:px-6 bg-gray-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between max-w-5xl">
        {/* Image Section */}
        <div className="flex-shrink-0 flex justify-center items-center w-full md:w-1/2 mb-6 md:mb-0">
          <img
            src="https://images.squarespace-cdn.com/content/v1/5e53da2e922842434f3d7d88/1605192011248-JOC4WFHFT3U5CVF7S2UR/2020+BIG+logo+transparent.png?format=1000w"
            alt="Our Company Logo"
            className="w-40 h-auto sm:w-48 md:w-64"
            aria-label="Our Company Logo"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-1/2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6 md:mb-8 text-gray-900 tracking-tight leading-snug">
            Our Values
          </h2>
          <ul className="list-disc list-inside text-base sm:text-lg text-gray-700 space-y-3 sm:space-y-4">
            {[
              "Compassion",
              "Collaboration",
              "Unlocking potential in others",
              "Making good things happen",
              "Bringing purpose to all that we do",
            ].map((value, index) => (
              <li
                key={index}
                className="relative flex items-center before:content-['✓'] before:text-teal-600 before:text-lg sm:before:text-xl before:mr-3 sm:before:mr-4 hover:text-teal-800 transition-colors duration-300 ease-in-out"
              >
                {value}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
