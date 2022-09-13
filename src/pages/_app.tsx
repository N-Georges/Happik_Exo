import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import createApolloClient from 'src/lib/apollo_client';
import { ChakraProvider } from '@chakra-ui/react';
import Layout from 'src/components/layout';
export default function MyApp({ Component, pageProps }: AppProps) {
    const client = createApolloClient();
    return (
        <ChakraProvider>
            <ApolloProvider client={client}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ApolloProvider>
        </ChakraProvider>
    );
}
