import Image from 'next/image';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import TypewriterText from './TypewriterText';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function HomeSection() {
  useEffect(() => {
    AOS.init({ 
      once: true,
      duration: 1500,
      easing: 'ease-out-cubic'
    });
  }, []);

  return (
    <section id="home"  className="min-h-screen flex items-center justify-center bg-white px-4">
      <div data-aos="zoom-in" className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-center gap-20 py-20">
        
        {/* Text content */}
        <div className="text-center md:text-left flex-1 max-w-md">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{"Hello, I'm Bowen Wang"}</h1>
          <div className="min-h-[6rem] flex items-center">
            <TypewriterText 
              texts={[
                "A Full Stack Developer",
                "A Software Engineer",
                "A Problem Solver ",
              ]}
              speed={120}
              deleteSpeed={60}
              pauseTime={3000}
            />
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center md:justify-start gap-4 mt-8">
            <a
              href="https://github.com/bowenwang0815"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-900 text-white p-3 rounded-lg transition-colors duration-400"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://linkedin.com/in/bowenwang0815"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg transition-colors duration-400"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="mailto:bowenwang0815@gmail.com"
              className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-lg transition-colors duration-400"
              aria-label="Email"
            >
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="flex justify-center md:justify-start flex-1 max-w-md">
          <Image
            src="/me.jpg"
            alt="Professional portrait of Bowen Wang"
            width={300}
            height={390}
            className="rounded-[32px] border-4 border-gray-200 shadow-lg object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
