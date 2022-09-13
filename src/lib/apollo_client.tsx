import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
const createApolloClient = () => {
    return new ApolloClient({
        link: new HttpLink({
            uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
            headers: {
                'x-hasura-admin-secret': 'MyReallySuperSecret',
            },
        }),
        cache: new InMemoryCache(),
    });
};

export default createApolloClient;
