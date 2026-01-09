import sprite from '@/assets/sprite.svg?url';
import TailwindLogo from '@/assets/icons/tailwind.svg?react';
import GitLogo from '@/assets/icons/git.svg?react';
import VSCodeLogo from '@/assets/icons/vscode.svg?react';
import WindowsLogo from '@/assets/icons/windows.svg?react';
import LinuxLogo from '@/assets/icons/linux.svg?react';
import SpringLogo from '@/assets/icons/spring.svg?react';
import JavaLogo from '@/assets/icons/java.svg?react';
import PythonLogo from '@/assets/icons/python.svg?react';
import PhpLogo from '@/assets/icons/php.svg?react';

export const StackComponent = () => {
  return (
    <section 
      id="stack" 
      className="relative min-h-screen flex flex-col items-center justify-center px-4 py-24"
    >
      <h1 className="text-4xl font-bold mb-8">
        <span className="text-primary">
          Stack & Technologies
        </span>
      </h1>

      {/* Frontend */}
      <div className="w-full md:w-4/7 flex flex-col items-center md:items-center justify-center py-2 z-10">
        
        <h2 className="text-2xl font-semibold mb-4">Frontend</h2>

        <div className="flex flex-row items-center p-2 gap-6 flex-wrap justify-center">
          <picture 
            className="flex flex-col items-center justify-center drop-shadow-[0_0_15px_rgba(0,122,204,0.5)] animate-slide-up-fade animate-delay-500 hover:scale-110 transition-transform">
            <svg className="w-10 h-10 fill-white">
              <use href={`${sprite}#html`} />
            </svg>
            <span className="text-sm">HTML</span>
          </picture>
          <picture className="flex flex-col items-center justify-center drop-shadow-[0_0_15px_rgba(0,122,204,0.5)] animate-slide-up-fade animate-delay-500 hover:scale-110 transition-transform">
            <svg className="w-10 h-10 fill-white">
              <use href={`${sprite}#css`} />
            </svg>
            <span className="text-sm">CSS</span>
          </picture>
          <picture className="flex flex-col items-center justify-center drop-shadow-[0_0_15px_rgba(0,122,204,0.5)] animate-slide-up-fade animate-delay-500 hover:scale-110 transition-transform">
            <TailwindLogo className="w-10 h-10 fill-white" />
            <span className="text-sm">TailwindCSS</span>
          </picture>
          <picture className="flex flex-col items-center justify-center drop-shadow-[0_0_15px_rgba(0,122,204,0.5)] animate-slide-up-fade animate-delay-500 hover:scale-110 transition-transform">
            <svg className="w-10 h-10 fill-gray-900">
              <use href={`${sprite}#javascript`} />
            </svg>
            <span className="text-sm">JavaScript</span>
          </picture>
          <picture className="flex flex-col items-center justify-center drop-shadow-[0_0_15px_rgba(0,122,204,0.5)] animate-slide-up-fade animate-delay-500 hover:scale-110 transition-transform">
            <svg className="w-10 h-10 fill-white">
              <use href={`${sprite}#typescript`} />
            </svg>
            <span className="text-sm">TypeScript</span>
          </picture>
          <picture className="flex flex-col items-center justify-center drop-shadow-[0_0_15px_rgba(0,122,204,0.5)] animate-slide-up-fade animate-delay-500 hover:scale-110 transition-transform">
            <svg className="w-10 h-10 fill-white">
              <use href={`${sprite}#react`} />
            </svg>
            <span className="text-sm">React</span>
          </picture>
        </div>
      </div>

      {/* Backend */}
      <div className="w-full md:w-4/7 flex flex-col items-center md:items-center justify-center py-2 z-10">
        <h2 className="text-2xl font-semibold mb-4">Backend</h2>

        <div className="flex flex-row items-center p-2 gap-6 flex-wrap justify-center">
          <picture 
            className="flex flex-col items-center justify-center drop-shadow-[0_0_15px_rgba(0,122,204,0.5)] animate-slide-up-fade animate-delay-500 hover:scale-110 transition-transform">
            <SpringLogo className="w-10 h-10 fill-white" />
            <span className="text-sm">Spring</span>
          </picture>
          <picture 
            className="flex flex-col items-center justify-center drop-shadow-[0_0_15px_rgba(0,122,204,0.5)] animate-slide-up-fade animate-delay-500 hover:scale-110 transition-transform">
            <JavaLogo className="w-10 h-10 fill-white" />
            <span className="text-sm">Java</span>
          </picture>
          <picture 
            className="flex flex-col items-center justify-center drop-shadow-[0_0_15px_rgba(0,122,204,0.5)] animate-slide-up-fade animate-delay-500 hover:scale-110 transition-transform">
            <PythonLogo className="w-10 h-10 fill-white" />
            <span className="text-sm">Python</span>
          </picture>
          <picture 
            className="flex flex-col items-center justify-center drop-shadow-[0_0_15px_rgba(0,122,204,0.5)] animate-slide-up-fade animate-delay-500 hover:scale-110 transition-transform">
            <PhpLogo className="w-10 h-10 fill-white" />
            <span className="text-sm">PHP</span>
          </picture>
          <picture 
            className="flex flex-col items-center justify-center drop-shadow-[0_0_15px_rgba(0,122,204,0.5)] animate-slide-up-fade animate-delay-500 hover:scale-110 transition-transform">
            <svg className="w-10 h-10 fill-white">
              <use href={`${sprite}#node`} />
            </svg>
            <span className="text-sm">Node.js</span>
          </picture>
        </div>
      </div>

      {/* Tools */}
      <div className="w-full md:w-4/7 flex flex-col items-center md:items-center justify-center py-2 z-10">
        <h2 className="text-2xl font-semibold mb-4">Tools</h2>

        <div className="flex flex-row items-center p-2 gap-6 flex-wrap justify-center">
          <picture 
            className="flex flex-col items-center justify-center drop-shadow-[0_0_15px_rgba(0,122,204,0.5)] animate-slide-up-fade animate-delay-500 hover:scale-110 transition-transform">
            <GitLogo className="w-10 h-10 fill-white" />
            <span className="text-sm">Git</span>
          </picture>
          <picture 
            className="flex flex-col items-center justify-center drop-shadow-[0_0_15px_rgba(0,122,204,0.5)] animate-slide-up-fade animate-delay-500 hover:scale-110 transition-transform">
            <svg className="w-10 h-10 fill-white">
              <use href={`${sprite}#github`} />
            </svg>
            <span className="text-sm">GitHub</span>
          </picture>
          <picture 
            className="flex flex-col items-center justify-center drop-shadow-[0_0_15px_rgba(0,122,204,0.5)] animate-slide-up-fade animate-delay-500 hover:scale-110 transition-transform">
            <VSCodeLogo className="w-10 h-10 fill-white" />
          </picture>
          <picture 
            className="flex flex-col items-center justify-center drop-shadow-[0_0_15px_rgba(0,122,204,0.5)] animate-slide-up-fade animate-delay-500 hover:scale-110 transition-transform">
            <WindowsLogo className="w-10 h-10 fill-white" />
            <span className="text-sm">Windows</span>
          </picture>
          <picture 
            className="flex flex-col items-center justify-center drop-shadow-[0_0_15px_rgba(0,122,204,0.5)] animate-slide-up-fade animate-delay-500 hover:scale-110 transition-transform">
            <LinuxLogo className="w-10 h-10 fill-white" />
            <span className="text-sm">Linux</span>
          </picture>
        </div>
      </div>

    </section>
  )
}
