import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface NavigationButtonsProps {
  backPath?: string;
  nextPath?: string;
  nextLabel?: string;
  backLabel?: string;
}

const NavigationButtons = ({ 
  backPath, 
  nextPath, 
  nextLabel = "Next", 
  backLabel = "Back" 
}: NavigationButtonsProps) => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center gap-4 mt-8">
      {backPath && (
        <button
          onClick={() => navigate(backPath)}
          className="romantic-button-outline flex items-center gap-2"
        >
          <ChevronLeft className="w-4 h-4" />
          {backLabel}
        </button>
      )}
      {nextPath && (
        <button
          onClick={() => navigate(nextPath)}
          className="romantic-button flex items-center gap-2"
        >
          {nextLabel}
          <ChevronRight className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};

export default NavigationButtons;
