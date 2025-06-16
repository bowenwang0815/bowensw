import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function ContactSection() {
  return (
    <section id="contact" className="bg-white py-16 flex flex-col items-center">
      <hr className="w-32 border-t-2 border-gray-200 mb-8" />
      <p className="text-lg text-gray-600 mb-6">Let&apos;s connect! Feel free to reach out via email or social media.</p>
      <div className="flex gap-6 mb-4">
        <a href="mailto:bowenwang0815@gmail.com" className="text-2xl text-gray-700 hover:text-blue-600" aria-label="Email">
          <FaEnvelope />
        </a>
        <a href="https://github.com/bowenwang0815" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-700 hover:text-black" aria-label="GitHub">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/bowenwang0815" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-700 hover:text-blue-700" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
      </div>
      <span className="text-sm text-gray-400">© {new Date().getFullYear()} Bowen Wang</span>
    </section>
  );
} 