// import "../styles/globals.css";
// import type { AppProps } from "next/app";

// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />;
// }

import { type AppType } from "next/dist/shared/lib/utils";
// import { Inter } from "@next/font/google";
import { Inter } from "next/font/google";

import "../styles/globals.css";
import { ThemeProvider } from "../context/ThemeContext";

const inter = Inter({
  weight: ["400", "500", "600", "700", "800"],
  style: "normal",
  subsets: ["latin"],
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className={inter.className}>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  );
};

export default MyApp;
