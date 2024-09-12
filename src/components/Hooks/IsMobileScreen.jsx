import { useState, useEffect } from 'react';

const useIsMobile = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to update `isMobile` state based on screen width
    const handleResize = () => {
      setIsMobile(window.innerWidth <= breakpoint);
    };

    // Call the function initially to set the correct value on mount
    handleResize();

    // Add event listener to check for window resize events
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoint]);

  return isMobile;
};

export default useIsMobile;
