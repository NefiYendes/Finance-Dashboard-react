import type { Transaction } from "../types/transaction";

interface Props {
    transactions: Transaction[];
    onDeleteTransaction: (id: string)=> void;
};

const TransactionList = ({transactions, onDeleteTransaction}:Props) =>{
return (
    <div style={{ marginTop: '20px' }}>
      <h3>Historial de Actividad</h3>
     {transactions.length === 0 && <p>No hay moviemientos disponibles aun.</p>}
     <ul style={{ listStyle: 'none', padding: 0 }}>
                {transactions.map((item) => (
                    <li key={item.id} style={{ borderBottom: '1px solid #ddd', padding: '10px 0' }}>
                        <span>{item.description}</span>
                       
                    </li>
                ))}
            </ul>
    </div>
)
}

export default TransactionList;