import { ThemeToggleComponent } from '../components/themes/ThemeToggleComponent';
import { BackgroundComponent } from '../components/themes/BackgroundComponent';
import { NavbarLayout } from '../layouts/NavbarLayout';
import { OverviewComponent } from '../components/sections/OverviewComponent';

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

      {/* Footer */}
    </div>
  );
};
