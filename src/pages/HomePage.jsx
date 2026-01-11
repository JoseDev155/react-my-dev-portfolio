import { ThemeToggleComponent } from '@/components/themes/ThemeToggleComponent';
import { BackgroundComponent } from '@/components/themes/BackgroundComponent';
import { NavbarLayout } from '@/layouts/NavbarLayout';
import { OverviewComponent } from '@/components/sections/OverviewComponent';
import { StackComponent } from '@/components/sections/StackComponent';
import { EducationComponent } from '../components/sections/EducationComponent';
import { AboutComponent } from '@/components/sections/AboutComponent';
import { FooterComponent } from '../components/sections/FooterComponent';

export const HomePage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      
      {/* Theme Toggle */}
      <ThemeToggleComponent />
      
      {/* Background Effects */}
      <BackgroundComponent />

      {/* Navbar */}
      <NavbarLayout />

      {/* Main Content */}
      <main>
        <OverviewComponent />
        <StackComponent />
        <EducationComponent />
        <AboutComponent />
      </main>

      {/* Footer */}
      <FooterComponent />
    </div>
  );
};
