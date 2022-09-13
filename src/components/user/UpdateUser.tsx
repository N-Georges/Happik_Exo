import { useMutation } from '@apollo/client';
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
        <div>
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
                <input
                    placeholder="firstname"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                />
                <input
                    placeholder="lastname"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                />
                <input
                    placeholder="email"
                    value={_email}
                    onChange={(e) => set_Email(e.target.value)}
                />
                <button type="submit">update</button>
            </form>
        </div>
    );
};

export default UpdateUser;
