import { useQuery } from '@apollo/client';
import { GetUsersDocument } from 'src/graphql-generated/apollo-hooks';
import UpdateUser from './UpdateUser';

const GetUsers = () => {
    const { loading, error, data } = useQuery(GetUsersDocument);
    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        console.error(error);
        return <div>Error!</div>;
    }
    return (
        <>
            {data.users.map(
                (item: { id: number; first_name: string; last_name: string; email: string }) => (
                    <div key={item.id}>
                        <UpdateUser
                            id={item.id}
                            first_name={item.first_name}
                            last_name={item.last_name}
                            email={item.email}
                        />
                    </div>
                )
            )}
        </>
    );
};

export default GetUsers;
