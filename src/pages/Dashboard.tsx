import { useState } from "react";
import type { Transaction } from "../types/transaction";

const Dashboard = () => {
    const [transactions] = useState<Transaction[]> ([
        {id: '1', description: 'Sueldo', amount: 2500, category: 'Servicios', date: '2026-02-01'},
        {id: '2', description: 'Renta', amount: -800, category: 'Vivienda', date: '2026-02-05'},
        {id: '3', description: 'Cena', amount: -50, category: 'Comida', date: '2026-02-10'}
    ]);

    const expenses = transactions.filter(t => t.amount < 0);
    const totalBalance = transactions.reduce((acc, curr) => acc + curr.amount, 0);
    return(
        <div style={{padding: '20px', fontFamily: 'Arial, sans-serif'}}>
            <h1>Mi Dashboard Financiero</h1>

            <div style={{display: 'flex', gap: '20px', marginBottom: '20px'}}>

                <div style={{padding: '20px', borderRadius: '12px', border:'2px solid #1890ff', backgroundColor: '#e6f7ff'}}>
                    <h3 style={{margin: 0}}>Saldo Total</h3>
                    <p style={{ fontSize: '24px', fontWeight: 'bold'}}>${totalBalance}</p>
                </div>
                <div style={{padding: '20px', borderRadius: '12px', border: '2px solid #ff4d4f', backgroundColor: '#fff1f0'}}>
                    <h3 style={{margin: 0}}>Gastos del Mes</h3>
                    <p style={{fontSize: '24px', fontWeight: 'bold', color: '#cf1322'}}>{expenses.length} transacciones
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard