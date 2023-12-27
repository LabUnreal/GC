// pages/_app.js

import '@styles/globals.css';
import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import ExtendedTheme from "@components/ExtendedTheme";
import Layout from '@components/Layout';
import Navbar from '@components/Navbar';

function MyApp({ Component, pageProps }) {
    return (
        <ChakraProvider theme={ExtendedTheme}>
            <ColorModeProvider
                options={{
                    useSystemColorMode: false,
                }}
            >
                <Layout>
                    <Navbar />
                    <Component {...pageProps} />
                </Layout>
            </ColorModeProvider> 
        </ChakraProvider>
    );
}

export default MyApp;
