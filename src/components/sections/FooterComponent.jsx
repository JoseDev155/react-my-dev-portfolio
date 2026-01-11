import { ArrowUp } from 'lucide-react';
import PnpmLogo from '@/assets/tech/pnpm.svg?react';
import TailwindLogo from '@/assets/tech/tailwind.svg?react';
import sprite from '@/assets/sprite.svg?url';

export const FooterComponent = () => {
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-col justify-between items-center">
      
      {/* Technologies used for the portfolio */}
      <p className="text-sm text-muted-foreground mb-4">
        Built with:
      </p>

      <div className="flex flex-row items-center p-2 mb-12 gap-6 flex-wrap justify-center">
        <picture 
          className="flex flex-col items-center justify-center drop-shadow-[0_0_15px_rgba(0,122,204,0.5)] animate-slide-up-fade animate-delay-500 hover:scale-110 transition-transform">
          <svg className="w-32 h-32 fill-white">
            <use href={`${sprite}#react`} />
          </svg>
          <span className="text-lg">React</span>
        </picture>
        <picture 
          className="flex flex-col items-center justify-center drop-shadow-[0_0_15px_rgba(0,122,204,0.5)] animate-slide-up-fade animate-delay-500 hover:scale-110 transition-transform">
          <TailwindLogo className="w-32 h-32 fill-white" />
          <span className="text-lg">TailwindCSS</span>
        </picture>
        <picture 
          className="flex flex-col items-center justify-center drop-shadow-[0_0_15px_rgba(0,122,204,0.5)] animate-slide-up-fade animate-delay-500 hover:scale-110 transition-transform">
          <PnpmLogo className="w-32 h-32 fill-white" />
          <span className="text-lg">Pnpm</span>
        </picture>
      </div>

      <p className="text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Jose Eduardo Ramos. Almost all rights reserved.
      </p>
      <a
        href="#overview"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};