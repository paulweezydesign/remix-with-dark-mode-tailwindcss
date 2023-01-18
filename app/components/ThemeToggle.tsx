import { Theme, useTheme } from '../utils/theme-provider';




const ThemeToggle = () => {
    const [, setTheme] = useTheme();

    const toggleTheme = () => {
      setTheme((prevTheme) => (prevTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT));
    };
    return (
        <button className='px-4 py-4' onClick={toggleTheme}>Toggle</button>
    )
}
export default ThemeToggle