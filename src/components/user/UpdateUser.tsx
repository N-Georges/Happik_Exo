import { useMutation } from '@apollo/client';
import { Button, Flex, Input } from '@chakra-ui/react';
import React, { useState } from 'react';
import { GetUsersDocument, UpdateUserDocument } from 'src/graphql-generated/apollo-hooks';

interface CardProps {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
}

const UpdateUser: React.FC<CardProps> = ({ id, first_name, last_name, email }) => {
    const [firstname, setFirstname] = useState(first_name);
    const [lastname, setLastname] = useState(last_name);
    const [_email, set_Email] = useState(email);
    const [updateUser] = useMutation(UpdateUserDocument);

    return (
        <>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    updateUser({
                        variables: {
                            id,
                            first_name: firstname,
                            last_name: lastname,
                            email: _email,
                        },
                        refetchQueries: [
                            {
                                query: GetUsersDocument,
                            },
                        ],
                    });
                }}
            >
                <Flex gap={2} mb={2} mt={10}>
                    <Input
                        placeholder="lastname"
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                    />
                    <Input
                        placeholder="firstname"
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)}
                    />
                    <Input
                        placeholder="email"
                        value={_email}
                        onChange={(e) => set_Email(e.target.value)}
                    />
                </Flex>
                <Button type="submit" w="100%" mb={5}>Update</Button>
            </form>
        </>
    );
};

export default UpdateUser;
