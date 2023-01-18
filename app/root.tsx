import type { LoaderFunction } from '@remix-run/node';
import type { Theme } from '~/utils/theme-provider';
import { getThemeSession } from './utils/theme.server';
import { useLoaderData } from '@remix-run/react';
export type LoaderData = {
  theme: Theme | null;
};

export const loader: LoaderFunction = async ({ request }) => {
  const themeSession = await getThemeSession(request);

  const data: LoaderData = {
    theme: themeSession.getTheme(),
  };

  return data;
};
import type {  LinksFunction , MetaFunction } from "@remix-run/node";
import { NonFlashOfWrongThemeEls, ThemeProvider, useTheme } from '~/utils/theme-provider';

import {

  Links,
  LiveReload,
  Meta,
  NavLink,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation, useOutlet } from "react-router-dom";
import Sidebar from './components/Sidebar'
import ThemeToggle from "./components/ThemeToggle";
import stylesUrl from "~/styles/app.css";
import clsx from 'clsx';
import { ThemeProvider, useTheme } from './utils/theme-provider';

import mainStyles from '~/styles/styles.css';
import darkStyles from '~/styles/dark.css';




export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});


export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: stylesUrl },
    {
      rel: 'stylesheet',
      href: mainStyles,
    },
    {
      rel: 'stylesheet',
      href: darkStyles,
      media: '(prefers-color-scheme: dark)',
    },
  ];
};
function NonFlashOfWrongThemeEls({ ssrTheme }: { ssrTheme: boolean }) {
  const [theme] = useTheme();

  return (
    <>
      <meta name="color-scheme" content={theme === 'light' ? 'light dark' : 'dark light'} />
      {/* ... */}
    </>
  );
}


const App = () => {
  const data = useLoaderData<LoaderData>();
  const outlet = useOutlet();
  const [theme] = useTheme();
  return (
    <html lang="en" className={clsx(theme)}>
      <head>
        <Meta />
        <Links />
       
        <script src="https://cdn.tailwindcss.com"></script>
        <NonFlashOfWrongThemeEls ssrTheme={Boolean(data.theme)} />
      </head>
      <body>
        <header>
          <nav className="flex justify-evenly items-center text-xl py-5">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/blogs">Blogs</NavLink>
            <Sidebar />
            <ThemeToggle />
            </nav>
        </header>
        <main className="flex flex-col items-center justify-center h-screen">
        <AnimatePresence exitBeforeEnter initial={false}>
          <motion.main
            key={useLocation().pathname}
            initial={{ x: "100", opacity: 0 }}
            animate={{ x: "0", opacity: 1 }}
            exit={{ x: "-40%", opacity: 0 }}
          >
            {outlet}
          </motion.main>
        </AnimatePresence>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        </main>
      
      </body>
    </html>
  );
}
export default function AppWithProviders() {
  const data = useLoaderData<LoaderData>();

  return (
    <ThemeProvider specifiedTheme={data.theme}>
      <App />
    </ThemeProvider>
  );
}