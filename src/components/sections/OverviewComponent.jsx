import { ArrowDown } from 'lucide-react';
import sprite from '@/assets/sprite.svg?url';
import profile from '@/assets/icons/avatar.png';

export const OverviewComponent = () => {
  return (
    <section 
      id="overview" 
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-2 py-20 md:py-12"
    >
    
      {/* Profile Picture */}
      <div className="w-full md:w-3/7 flex mx-14 justify-center md:justify-center z-10 animate-fade-in">
        <img 
          className="w-38 h-38 md:w-50 md:h-50 rounded-full drop-shadow-[0_0_15px_rgba(0,122,204,0.5)]" 
          src={profile} 
          alt="Profile" />
      </div>

      {/* Description */}
      <div className="w-full md:w-4/7 flex flex-col items-center md:items-start md:justify-start md:-m-14 z-10">
        <div className="space-y-6 max-w-2xl text-center md:text-left">
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}Jose{" "}Ramos
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-xl font-semibold">
            <span className="text-glow text-primary/90 opacity-0 animate-fade-in-delay-2 block">
              Informatic Systems Engineer
            </span>
          </h2>
          
          <p 
            className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3"
          >
            Full-Stack Developer Jr and enthusiast in modern & old technologies. 
            Specializing in building web applications with Java and React.
          </p>

          {/* Social buttons */}
          <div className="flex gap-4 justify-center md:justify-start pt-2">
            
            <a 
              className="bg-zinc-700 social-button hover:bg-zinc-500 drop-shadow-[0_0_15px_rgba(0,122,204,0.5)]" 
              href="https://github.com/JoseDev155" 
              target="_blank" 
              aria-label="GitHub" 
              title="My GitHub" 
            >
              <svg className="w-6 h-6 fill-white">
                <use href={`${sprite}#github`} />
              </svg>
            </a>

            <a 
              className="bg-blue-200 social-button hover:bg-gray-200 drop-shadow-[0_0_15px_rgba(0,122,204,0.5)]" 
              href="https://www.linkedin.com/in/jose-ramos-dev/" 
              target="_blank" 
              aria-label="LinkedIn" 
              title="My LinkedIn" 
            >
              <svg className="w-6 h-6 fill-white">
                <use href={`${sprite}#linkedin`} />
              </svg>
            </a>

          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
          <ArrowDown className="h-5 w-5 text-primary" />
      </div>
      
    </section>
  );
};