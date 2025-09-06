"use client";
import { useState, useMemo, useCallback } from "react";
import { EquipmentItem, CartItem, CartActions, CartState } from "@/types/equipment";

export const useCart = (): CartState & CartActions => {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Memoized calculations
  const totalItems = useMemo(() => 
    cart.reduce((sum, item) => sum + item.quantity, 0), 
    [cart]
  );

  const totalPrice = useMemo(() => 
    cart.reduce((total, item) => total + (item.price * item.quantity), 0), 
    [cart]
  );

  // Memoized cart actions
  const addToCart = useCallback((equipment: EquipmentItem) => {
    setCart(prev => {
      const existingItem = prev.find(item => item.id === equipment.id);
      if (existingItem) {
        return prev.map(item =>
          item.id === equipment.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...equipment, quantity: 1 }];
    });
  }, []);

  const updateQuantity = useCallback((id: string, change: number) => {
    setCart(prev => 
      prev.map(item => {
        if (item.id === id) {
          const newQuantity = item.quantity + change;
          return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
        }
        return item;
      }).filter(item => item.quantity > 0)
    );
  }, []);

  const removeFromCart = useCallback((id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  }, []);

  const clearCart = useCallback(() => {
    setCart([]);
  }, []);

  const sendWhatsAppMessage = useCallback(() => {
    if (cart.length === 0) return;

    const message = `¡Hola! Me interesa rentar el siguiente equipo de Crateck:

${cart.map(item => 
  `• ${item.name} (${item.code})
  Cantidad: ${item.quantity} ${item.unit}${item.quantity > 1 ? 'S' : ''}
  Subtotal: $${(item.price * item.quantity).toLocaleString()}`
).join('\n\n')}

TOTAL ESTIMADO: $${totalPrice.toLocaleString()}

¿Podrían proporcionarme más información sobre disponibilidad y condiciones de renta?

Gracias.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/528132192308?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  }, [cart, totalPrice]);

  return {
    items: cart,
    totalItems,
    totalPrice,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    sendWhatsAppMessage,
  };
};