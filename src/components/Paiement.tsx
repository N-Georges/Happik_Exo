/* eslint-disable react/no-children-prop */
import { Flex } from '@chakra-ui/react';
import AddTransaction from './transaction/AddTransaction';
import CreditCard from './CreditCard';
import SendMoneyList from './SendMoneyList';
import Searchbar from './Searchbar';
import { Notification } from './Notification';
const Paiement = () => {
    return (
        <Flex
            w={['100%', '100%', '30%']}
            bgColor="#F5F5F5"
            p="3%"
            flexDir="column"
            overflow="auto"
            minH="100vh"
            minW={[null, null, '300px', '300px', '100px']}
        >
            {/* SearchBar + BadgeNotification */}
            <Flex alignContent="center">
                <Searchbar />
                <Notification />
            </Flex>
            {/* CreditCard + Sold */}
            <CreditCard />
            {/* UserList for Send Money */}
            <SendMoneyList />
            {/* Form for Send Money */}
            <AddTransaction />
        </Flex>
    );
};

export default Paiement;
