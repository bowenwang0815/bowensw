import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" data-aos="fade-up" className="relative min-h-screen flex items-center justify-center bg-white px-4">
      {/* Side images for desktop */}
      <div data-aos="fade-right" className="hidden md:block absolute left-10 top-1/4 z-10">
        <Image
          src="/me2.jpg"
          alt="Bowen left"
          width={180}
          height={220}
          className="rounded-xl border-4 border-gray-200 shadow-lg rotate-[-6deg] bg-white"
        />
      </div>
      <div data-aos="fade-left"className="hidden md:block absolute right-10 bottom-1/4 z-10">
        <Image
          src="/me3.jpg"
          alt="Bowen right"
          width={200}
          height={240}
          className="rounded-xl border-4 border-gray-200 shadow-lg rotate-6 bg-white"
        />
      </div>

      {/* Main content */}
      <div className="w-full max-w-3xl py-20 text-center z-20">
        {/* Top image for mobile */}
        <div className="md:hidden mb-6">
          <Image
            src="/me2.jpg"
            alt="Bowen"
            width={160}
            height={200}
            className="mx-auto rounded-xl border-4 border-gray-200 shadow-lg rotate-[-3deg]"
          />
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-8">About Me</h2>
        <p className="text-lg text-gray-600">
          Hi, I am Bowen. I am a first-generation college student, originally from China. I moved to Southern California when I was nine and have lived here ever since.
          <br /><br />
          I am an upcoming 4th year studying Computer Science and Business Information Management at UC Irvine. I enjoy building software that solves real problems, whether it is through full-stack development, data analysis, or working with nonprofits.
          <br /><br />
          In my free time, I like playing basketball, going to concerts, and traveling. I’m hoping to visit Japan again and explore more historic parts of China.
        </p>

        {/* Bottom image for mobile */}
        <div className="md:hidden mt-6">
          <Image
            src="/me3.jpg"
            alt="Bowen"
            width={160}
            height={200}
            className="mx-auto rounded-xl border-4 border-gray-200 shadow-lg rotate-3"
          />
        </div>
      </div>
    </section>
  );
}