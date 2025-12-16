import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 flex flex-col items-center justify-center text-center font-medium"
    >
      <h2 className="text-3xl font-bold text-purple-600 mb-3">
        Contact
      </h2>

      <p className="text-gray-700 mb-2">
        Email: muqadas.shafiq5120@gmail.com
      </p>

      <p className="text-gray-700 mb-6">
        Phone: 0346-7655120
      </p>

      {/* Social Icons */}
      <div className="flex gap-6 text-3xl text-purple-600">
        <a
          href="https://instagram.com/sparking5_120/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-800 transition"
        >
          <FaInstagram />
        </a>

        <a
          href="https://facebook.com/profile.php?id=61580254833884"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-800 transition"
        >
          <FaFacebook />
        </a>

        <a
          href="https://linkedin.com/in/muqadas-shafiq-069a0a342/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-800 transition"
        >
          <FaLinkedin />
        </a>
      </div>
    </section>
  );
};

export default Contact;
