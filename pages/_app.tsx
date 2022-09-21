import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {ThemeProvider} from "@mui/material";
import {theme} from "../theme";
import {CacheProvider} from "@emotion/react";
import createEmotionCache from "../createEmotionCache";
import {EmotionCache} from "@emotion/cache/dist/emotion-cache.cjs";
import {store} from "../redux/store";
import {Provider} from "react-redux";

const clientSideEmotionCache = createEmotionCache();

function MyApp({Component, pageProps, emotionCache = clientSideEmotionCache}: AppProps & {
  emotionCache: EmotionCache
}) {
  return (
      <CacheProvider value={emotionCache}>
         <ThemeProvider theme={theme}>
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
         </ThemeProvider>
      </CacheProvider>
  )
}

export default MyApp;