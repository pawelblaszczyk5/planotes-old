import { useEffect, useState } from 'react';

export const useMedia = (mediaQuery: string) => {
  const [matches, setMatches] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const mediaQueryListChangeHandler = ({ matches }: MediaQueryListEvent) => {
      setMatches(matches);
    };
    const mediaQueryList = window.matchMedia(mediaQuery);

    setMatches(mediaQueryList.matches);
    mediaQueryList.addEventListener('change', mediaQueryListChangeHandler);

    return () => {
      mediaQueryList.removeEventListener('change', mediaQueryListChangeHandler);
    };
  }, [mediaQuery]);

  return matches;
};
