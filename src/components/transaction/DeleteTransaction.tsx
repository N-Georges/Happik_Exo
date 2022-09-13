import { useMutation } from '@apollo/client';
import { Button } from '@chakra-ui/react';
import {
    DeleteTransactionsDocument,
    GetTransactionsDocument,
} from 'src/graphql-generated/apollo-hooks';
import { RiDeleteBinLine } from 'react-icons/ri';

interface DeleteProps {
    id: number;
}
const DeleteTransaction: React.FC<DeleteProps> = ({ id }) => {
    const [deleteTransaction] = useMutation(DeleteTransactionsDocument);
    const onDelete = () => {
        deleteTransaction({
            variables: { id },
            refetchQueries: [
                {
                    query: GetTransactionsDocument,
                },
            ],
        });
    };
    return (
        <>
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
                Supprimer transaction
            </Button>
        </>
    );
};

export default DeleteTransaction;
