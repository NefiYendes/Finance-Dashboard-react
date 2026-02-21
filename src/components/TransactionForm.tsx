import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import type { Transaction, Category } from "../types/transaction";
interface Props {
  onAddTransaction: (transaction: Transaction) => void;
};
const TransactionForm = ({ onAddTransaction }: Props) => {
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
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        
        const parsedAmount = parseFloat(formData.amount);

        const finalAmount = formData.type.toLowerCase() === 'egreso'
        ? -Math.abs(parsedAmount)
        : Math.abs(parsedAmount);

        const newTransaction: Transaction = {
        id: crypto.randomUUID(),
        description: formData.description,
        amount: finalAmount,
        category: formData.category,
        date: formData.date,
    };
    onAddTransaction(newTransaction);
    }

    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px' }}>

            <input name="description" placeholder="Description" value={formData.description} onChange={handleChange}/>
            <input name="amount" type="number" placeholder="Monto" value={formData.amount} onChange={handleChange}/>

            <select name="type" value={formData.type} onChange={handleChange}>
                <option value="empty">Selecciona una opcion</option>
                <option value="egreso">Egreso</option>
                <option value="ingreso">Ingreso</option>
            </select>

            <select name="category" value={formData.category} onChange={handleChange}>
                <option value="empty">Selecciona una opcion</option>
                <option value="comida">Comida</option>
                <option value="servicios">Servicios</option>
                <option value="vivienda">Vivienda</option>
                <option value="entretenimiento">Entretenimiento</option>
                <option value="transporte">Transporte</option>
            </select>

            <input name="date" type="date" value={formData.date} onChange={handleChange} />
            <button type="submit">Agregar Transacción</button>
        </form>
    );
};

export default TransactionForm