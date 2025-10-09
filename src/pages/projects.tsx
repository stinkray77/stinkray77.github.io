import React from "react";
import { Link } from "gatsby";

const ProjectsPage: React.FC = () => {
  return (
    <body className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        <nav className="border-t pt-4 space-x-4">
          <Link to="/">Home</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/experiences">Experiences</Link>
        </nav>
      </header>

      {/* Body */}
      <main className="flex-1 p-6 bg-gray-100">
        <h2 className="text-xl font-semibold mb-4">Home Page!</h2>
        <p className="mb-2">
          This is a simple Gatsby page using React and Tailwind CSS.
        </p>
        <p>
          The body section grows to fill the available space between header and footer.
        </p>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4 text-center">
        &copy; 2025 My Portfolio
      </footer>
    </body>
  );
};

export default HomePage;

export const Head = () => <title>Home</title>
