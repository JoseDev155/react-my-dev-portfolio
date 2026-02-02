import CatGif from "@/assets/cat.gif";

export const AboutComponent = () => {
  return (
    <section id="about" className="py-24 px-4 min-h-[45vh] relative">
      
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-primary">About me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">

            <p className="text-muted-foreground">
              Well, I didn't start interested in programming, I started beqcoming interested in electronic. Actually, 
              I'm a big fan of Arduino and I bought a kit to start learning about 
              basic circuits, but there aren't many universities that teach electronic engineering in my 
              country. So, I decided to switch to software development.
            </p>

            <p className="text-muted-foreground">
              I'm a big lover of cats. I have a black cat who's very sleepy, but everyone 
              in the house loves her. I'm also a big fan of coffee.
            </p>

            <p className="text-muted-foreground">
              My hobbies are: going to the gym, watching movies & series, reading, and drawing. In my free time, I like to learn new technologies and improve my skills as a developer through 
              platforms like <span className="font-semibold">Udemy, Platzi, and YouTube tutorials</span>.
            </p>

            <p className="text-muted-foreground">
              I'm also learning about other topics like
              <span className="text-primary font-bold">{" "}Structural Analysis</span>, but 
              I'll talk about that in another section... ;)
            </p>

          </div>

          {/* Image */}
          <div className="grid grid-cols-1 gap-6 p-6 order-first md:order-0">
            
            <div className="flex items-start justify-center p-6 md:justify-end">
              <div className="p-3 card-hover border border-white/30 rounded-2xl bg-primary/10 hover:scale-110 transition-transform">
                <img 
                  className="w-48 h-48 rounded-xl" 
                  src={CatGif} 
                  alt="Cat gif" title="I really love cats ;)" />
              </div>
            </div>
          
          </div>
        </div>
        
      </div>
      
    </section>
  );
};
