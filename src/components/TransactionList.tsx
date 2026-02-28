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
                    
                        <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                        <span style={{ fontWeight: 'bold' }}>${item.amount}</span>
      
            <button 
                onClick={() => onDeleteTransaction(item.id)}
                style={{ backgroundColor: '#ff4d4f', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer',padding: '5px 10px'}}> Eliminar
            </button>
    </div>
                    </li>
                ))}
            </ul>
    </div>
)
}

export default TransactionList;