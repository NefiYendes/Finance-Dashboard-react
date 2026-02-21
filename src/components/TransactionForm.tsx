import { useState } from "react";
import type { ChangeEvent } from "react";
import type { Transaction, Category } from "../types/transaction";

const TransactionForm = () => {
    const [formData, setFormData] = useState ({
    description: '',
    amount: '',
    category: 'Comida' as Category,
    date: new Date().toISOString().split('T')[0],
    type: 'egreso'
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const {name, value} = e.target;
        setFormData(prev =>({
            ...prev,
            [name]: value
        }));
    }

    return (
        <form style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px' }}>
            <input name="description" placeholder="Description" value={formData.description} onChange={handleChange}/>
            <button type="submit">Agregar Transacción</button>
        </form>
    );
};