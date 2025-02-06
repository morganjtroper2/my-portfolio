export default function Projects() {

  const projects = [
    {
      title: "Tee Box",
      description: "An app for finding and booking golf course, hotel, and flight packages.",
      url: "https://github.com/morganjtroper2/teeoff2",
    },
    {
      title: "StallStarz",
      description: "The Letterboxd of public restrooms.",
      url: "https://github.com/Ddan71117/stallStarz",
    },
    {
      title: "Organizability",
      description: "An organization tool.",
      url: "https://github.com/samvs-tech/Organizability",
    },
  ];

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <div key={index} className="p-6 border rounded shadow-md bg-white">
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <a
              href={project.url}
              className="px-4 py-2 text-white bg-blue-500 rounded shadow-md hover:bg-blue-700 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Code
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}