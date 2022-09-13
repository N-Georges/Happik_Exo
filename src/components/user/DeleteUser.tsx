import { useMutation } from '@apollo/client';
import { Button } from '@chakra-ui/react';
import { DeleteUserDocument, GetUsersDocument } from 'src/graphql-generated/apollo-hooks';
import { RiDeleteBinLine } from 'react-icons/ri';

interface CardProps {
    id: number;
}
const DeleteUser: React.FC<CardProps> = ({ id }) => {
    const [deleteUser] = useMutation(DeleteUserDocument);
    const onDelete = () => {
        deleteUser({
            variables: { id },
            refetchQueries: [
                {
                    query: GetUsersDocument,
                },
            ],
        });
    };
    return (
        <div>
            <Button
                onClick={() => onDelete()}
                w="194px"
                variant="ghost"
                rightIcon={<RiDeleteBinLine />}
                justifyContent="space-between"
                fontWeight="normal"
                colorScheme="red"
                fontSize="sm"
            >
                Supprimer utilisateur
            </Button>
        </div>
    );
};

export default DeleteUser;
