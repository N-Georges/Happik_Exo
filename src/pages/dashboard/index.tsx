import Paiement from 'src/components/Paiement';
import Transactions from 'src/components/transaction/Transaction';

export default function Dashboard() {
    return (
        <>
            <Transactions />
            <Paiement />
        </>
    );
}
