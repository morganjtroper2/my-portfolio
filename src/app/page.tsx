export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4 text-center">
      <h1 className="text-5xl font-bold text-blue-600">Welcome to Morgan&rsquo;s Portfolio</h1>
      <p className="mt-4 text-lg text-gray-600 max-w-2xl">
        A showcase of my projects, skills, and experience. Explore my work and get in touch!
      </p>
      <div className="mt-6 flex gap-4">
        {/* View Projects Button */}
        <a
          href="/projects"
          className="rounded bg-blue-500 px-6 py-3 text-white shadow-md hover:bg-blue-700 transition"
        >
          View Projects
        </a>

        {/* Contact Me Button with Email Link */}
        <a
          href="mailto:webmaster@motroper.net"
          className="rounded border border-blue-500 px-6 py-3 text-blue-500 shadow-md hover:bg-blue-500 hover:text-white transition"
        >
          Contact Me
        </a>
      </div>
    </main>
  );
}