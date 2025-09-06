export interface EquipmentItem {
  id: string;
  code: string;
  name: string;
  description: string;
  unit: string;
  price: number;
  category: string;
}

export interface CartItem extends EquipmentItem {
  quantity: number;
}

export type CategoryType = 
  | "Equipo de Generación"
  | "Equipo Ligero" 
  | "Maquinaria Pesada"
  | "Maquinaria Semiligera"
  | "Grúas";

export interface CartActions {
  addToCart: (equipment: EquipmentItem) => void;
  updateQuantity: (id: string, change: number) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  sendWhatsAppMessage: () => void;
}

export interface CartState {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
}