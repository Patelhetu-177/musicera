function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
          <p className="mb-4">
            MusicEra is a premier site dedicated to teaching the art and
            science of music. We nurture talent from the ground up, fostering a
            vibrant community of musicians.
          </p>
        </div>

        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/course"
                className="hover:text-white transition-colors duration-300"
              >
                Courses
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-white transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a
              href="https://github.com/Patelhetu-177"
              className="hover:text-white transition-colors duration-300"
            >
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/hetu-patel-61a8b1288/"
              className="hover:text-white transition-colors duration-300"
            >
              Linkedin
            </a>
            <a
              href="https://www.instagram.com/hetu_patel_1707/"
              className="hover:text-white transition-colors duration-300"
            >
              Instagram
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
          <p>Gandhinagar, India</p>
          <p>Gandhinagar 382421</p>
          <p>Email: hetup1707@gmail.com</p>
        </div>
      </div>

      <p className="text-center text-xs pt-8">
        © 2024 MusicEra. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
