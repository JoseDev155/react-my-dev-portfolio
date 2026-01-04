import { ThemeToggleComponent } from '../components/themes/ThemeToggleComponent';
import { BackgroundComponent } from '../components/themes/BackgroundComponent';

export const HomePage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      
      {/* Theme Toggle */}
      <ThemeToggleComponent />
      
      {/* Background Effects */}
      <BackgroundComponent />

      {/* Navbar */}

      {/* Main Content */}

      {/* Footer */}
    </div>
  );
};
