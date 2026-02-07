import { ReactNode } from 'react';
import FloatingHearts from './FloatingHearts';

interface PageWrapperProps {
  children: ReactNode;
  showHearts?: boolean;
}

const PageWrapper = ({ children, showHearts = true }: PageWrapperProps) => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {showHearts && <FloatingHearts />}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-8">
        {children}
      </div>
    </div>
  );
};

export default PageWrapper;
