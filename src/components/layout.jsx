import { Flex } from '@chakra-ui/react';
import SideBar from './SideBar';
export default function Layout({ children }) {
    return (
        <>
            <Flex h="100vh" maxW="100vw" flexDir={['column', 'column', 'row']}>
                <SideBar />
                {children}
            </Flex>
        </>
    );
}
