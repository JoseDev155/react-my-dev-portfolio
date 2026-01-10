import CatGif from "@/assets/cat.gif";

export const AboutComponent = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      
      <div className="container mx-auto max-w-5xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-primary">About me</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">

            <p className="text-muted-foreground">
              Well, I didn't start interested in the progrmamming, I started interested in the electronic. Actually, 
              I'm a big fan of Arduino and I bought a kit to start learning about 
              basic ciruits, but there aren't many universities that teach electronic engineering in my 
              country. So, I decided to switch to software development.
            </p>

            <p className="text-muted-foreground">
              I'm a big lover of cats, I have one black cat, she's very sleepyhead but all 
              love her in the house. I'm also a big fan of coffee.
            </p>

            <p className="text-muted-foreground">
              My hobbies are: go to the gym, watch movies & series, read and draw. And, 
              In my free time, I like to learn new technologies and improve my skills as a developer in 
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
            <div className="p-6 card-hover">
              
              <div className="flex items-start justify-center md:justify-end">
                <div className="p-3 border border-white/30 rounded-2xl bg-primary/10 hover:scale-110 transition-transform">
                  <img 
                    className="w-48 h-48 rounded-xl" 
                    src={CatGif} 
                    alt="Cat gif" title="I really love the cats ;)" />
                </div>
              </div>
            
            </div>
          </div>

        </div>
      </div>
      
    </section>
  );
};