import Image from 'next/image';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import TypewriterText from './TypewriterText';

export default function HomeSection() {
  useEffect(() => {
    AOS.init({ once: true });
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
              speed={80}
              deleteSpeed={40}
              pauseTime={2500}
            />
          </div>
        </div>

        {/* Image */}
        <div className="flex justify-center md:justify-start flex-1 max-w-xs">
          <Image
            src="/me.jpg"
            alt="Professional portrait of Bowen Wang"
            width={200}
            height={260}
            className="rounded-[32px] border-4 border-gray-200 shadow-lg object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
