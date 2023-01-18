import { useEffect } from 'react'
function ThemeProvider({ children, specifiedTheme }: { children: ReactNode; specifiedTheme: Theme | null }) {


const clientThemeCode = `
;(() => {
  const theme = window.matchMedia(${JSON.stringify(prefersDarkMQ)}).matches
    ? 'dark'
    : 'light';
  const cl = document.documentElement.classList;
  const themeAlreadyApplied = cl.contains('light') || cl.contains('dark');
  if (themeAlreadyApplied) {
    // this script shouldn't exist if the theme is already applied!
    console.warn(
      "Hi there, could you let Matt know you're seeing this message? Thanks!",
    );
  } else {
    cl.add(theme);
  }
  const meta = document.querySelector('meta[name=color-scheme]');
  if (meta) {
    if (theme === 'dark') {
      meta.content = 'dark light';
    } else if (theme === 'light') {
      meta.content = 'light dark';
    }
  } else {
    console.warn(
      "Hey, could you let Matt know you're seeing this message? Thanks!",
    );
  }
})();
`;

useEffect(() => {
  const mediaQuery = window.matchMedia(prefersDarkMQ);
  const handleChange = () => {
    setTheme(mediaQuery.matches ? Theme.DARK : Theme.LIGHT);
  };
  mediaQuery.addEventListener('change', handleChange);
  return () => mediaQuery.removeEventListener('change', handleChange);
}, []);

function NonFlashOfWrongThemeEls({ ssrTheme }: { ssrTheme: boolean }) {
  return <>{ssrTheme ? null : <script dangerouslySetInnerHTML={ __html: clientThemeCode } />}</>;
}
// ...

export { NonFlashOfWrongThemeEls, Theme, ThemeProvider, useTheme };