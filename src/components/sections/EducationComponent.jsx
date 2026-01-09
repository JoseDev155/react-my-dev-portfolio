import UnicaesLogo from '@/assets/unicaes-logo.png';

export const EducationComponent = () => {
  return (
    <section id="education" className="py-24 px-4 relative">
    
      <div className="container mx-auto max-w-5xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Education
        </h1>
        
        {/* Education Items */}
        <div className="grid grid-cols-1 gap-12 items-center">
          
          {/* Engineering */}
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full fill-white bg-primary/10">
                <img src={UnicaesLogo} alt="UNICAES Logo" className="h-8 w-8 text-primary fill-white" />
              </div>
              <div className="text-left">
                <h2 className="font-semibold text-lg">Catholic University of El Salvador (UNICAES)</h2>
                <h3 className="text-muted-foreground italic">
                  Informatic Systems Engineering
                </h3>
                <p className="text-gray-400 text-sm italic">(2021 - Present)</p>
              </div>
            </div>
          </div>

          {/* English */}
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <img src={UnicaesLogo} alt="UNICAES Logo" className="h-8 w-8 text-primary fill-white" />
              </div>
              <div className="text-left">
                <h2 className="font-semibold text-lg">Catholic University of El Salvador (UNICAES)</h2>
                <h3 className="text-muted-foreground italic">English B1</h3>
                <p className="text-gray-400 text-sm italic">
                  18/20 levels completed in the English program at UNICAES. My English skills are mostly written.
                </p>
              </div>
            </div>
          </div>
        
        </div>
    
      </div>
    
    </section>
  );
};