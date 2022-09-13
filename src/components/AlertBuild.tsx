import { Alert, AlertIcon } from '@chakra-ui/react';

const AlertBuild = () => {
    return (
        <>
            <Alert status="warning" flex="1" w="100vw" h="50px">
                <AlertIcon />
                Cette page est en construction 🛠️ 👷, merci de revenir plus tard 👌
            </Alert>
        </>
    );
};

export default AlertBuild;
