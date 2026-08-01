const quickLinks = [
  "Home",
  "Features",
  "Testimonials",
  "Contact",
];

function Footer() {
  return (
    <footer className="border-t border-slate-800 mt-24">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">

          <div>
            <h2 className="text-2xl font-bold text-blue-500">
              CareerCopilot AI
            </h2>

            <p className="text-gray-400 mt-6 leading-7">
              Helping students prepare for interviews, improve resumes and
              achieve their dream careers with AI-powered tools.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li
                  key={index}
                  className="text-gray-400 hover:text-blue-400 cursor-pointer transition"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-5">
              Connect
            </h3>

            <p className="text-gray-400">GitHub</p>
            <p className="text-gray-400">LinkedIn</p>
            <p className="text-gray-400">Email</p>
          </div>

        </div>

        <div className="border-t border-slate-800 mt-12 pt-6 text-center text-gray-500">
          © 2026 CareerCopilot AI. Built with React & Tailwind CSS.
        </div>
      </div>
    </footer>
  );
}

export default Footer;