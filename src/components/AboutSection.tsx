import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">About Me</h2>
        <div className="flex flex-col items-center sm:flex-row sm:items-start gap-8">
          <Image
            src="/me2.jpg"
            alt="Bowen Wang"
            width={260}
            height={260}
            className="rounded-full border-4 border-gray-200 shadow-lg"
            priority
          />
          <div className="text-lg text-gray-600">
            Hi, I am Bowen. I am a first-generation college student, originally from China. I moved to Southern California when I was nine and have lived here ever since.<br /><br />
            I am currently studying Computer Science and Business Information Management at UC Irvine. I enjoy building software that solves real problems, whether it is through full-stack development, data analysis, or working with nonprofits.<br /><br />
            In my free time, I like playing basketball, going to concerts, and traveling! I am hoping to travel to Japan again and see more of the historic parts of China.
          </div>
        </div>
      </div>
    </section>
  );
} 