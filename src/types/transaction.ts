export type Category = 'Comida' | 'Entretenimiento' | 'Vivienda' | 'Transporte' | 'Servicios';

export interface Transaction {
    id: string;
    description: string;
    amount: number;
    category: Category;
    date: string;
}