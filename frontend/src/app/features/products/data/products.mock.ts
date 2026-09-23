import { Product } from '../models/product';

export const PRODUCTS_MOCK: Product[] = [
  {
    id: 101,
    sku: 'LAP-1001',
    name: 'Business Laptop Pro',
    category: 'Electronics',
    price: 85000,
    stock: 24,
    active: true,
  },
  {
    id: 102,
    sku: 'MON-2001',
    name: '27-inch Office Monitor',
    category: 'Electronics',
    price: 28000,
    stock: 0,
    active: true,
  },
  {
    id: 103,
    sku: 'CHR-3001',
    name: 'Ergonomic Office Chair',
    category: 'Furniture',
    price: 18500,
    stock: 8,
    active: false,
  },
  {
    id: 104,
    sku: 'KBD-4001',
    name: 'Mechanical Business Keyboard',
    category: 'Accessories',
    price: 7500,
    stock: 35,
    active: true,
  },
  {
    id: 105,
    sku: 'DOC-5001',
    name: 'USB-C Docking Station',
    category: 'Accessories',
    price: 12500,
    stock: 12,
    active: false,
  },
];