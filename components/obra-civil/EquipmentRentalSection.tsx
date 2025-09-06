"use client";
import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/useCart";
import { EquipmentItem, CategoryType } from "@/types/equipment";
import { EquipmentCard } from "./EquipmentCard";
import { CategorySidebar } from "./CategorySidebar";
import { CartSheet } from "./CartSheet";

const equipmentData: EquipmentItem[] = [
  { id: "030600001", code: "030600001", name: "GENERADOR 100KVA", description: "Generador eléctrico 100KVA", unit: "JORNADA", price: 2500, category: "Equipo de Generación" },
  { id: "030600005", code: "030600005", name: "GENERADOR 20KVA", description: "Generador eléctrico 20KVA", unit: "JORNADA", price: 1200, category: "Equipo de Generación" },
  { id: "030600011", code: "030600011", name: "GENERADOR 60KVA", description: "Generador eléctrico 60KVA", unit: "JORNADA", price: 2000, category: "Equipo de Generación" },
  { id: "030600012", code: "030600012", name: "GENERADOR 80KVA", description: "Generador eléctrico 80KVA", unit: "JORNADA", price: 2300, category: "Equipo de Generación" },
  { id: "030230031", code: "030230031", name: "SOLDADORA 250", description: "Soldadora eléctrica 250A", unit: "JORNADA", price: 800, category: "Equipo de Generación" },
  { id: "030600014", code: "030600014", name: "TORRE DE ILUMINACION", description: "Torre de iluminación móvil", unit: "JORNADA", price: 1500, category: "Equipo de Generación" },
  { id: "030200001", code: "030200001", name: "ALLANADORA 36\"", description: "Allanadora de concreto 36 pulgadas", unit: "DIA", price: 400, category: "Equipo Ligero" },
  { id: "030200002", code: "030200002", name: "ALLANADORA 46\"", description: "Allanadora de concreto 46 pulgadas", unit: "DIA", price: 500, category: "Equipo Ligero" },
  { id: "030200006", code: "030200006", name: "BOMBA DE AGUA 2\"", description: "Bomba de agua 2 pulgadas", unit: "DIA", price: 300, category: "Equipo Ligero" },
  { id: "030200007", code: "030200007", name: "BOMBA DE AGUA 3\"", description: "Bomba de agua 3 pulgadas", unit: "DIA", price: 350, category: "Equipo Ligero" },
  { id: "030100014", code: "030100014", name: "CARGADOR FRONTAL 20 TON", description: "Cargador frontal 20 toneladas", unit: "HR", price: 1200, category: "Maquinaria Pesada" },
  { id: "030100015", code: "030100015", name: "COMPACTADOR LISO 10 TON", description: "Compactador liso 10 toneladas", unit: "HR", price: 1000, category: "Maquinaria Pesada" },
  { id: "030200012", code: "030200012", name: "COMPRESOR 185 CFM", description: "Compresor de aire 185 CFM", unit: "JORNADA", price: 800, category: "Maquinaria Semiligera" },
  { id: "030200024", code: "030200024", name: "RODILLO VIBRATORIO 1 TON", description: "Rodillo vibratorio 1 tonelada", unit: "JORNADA", price: 900, category: "Maquinaria Semiligera" },
  { id: "030300014", code: "030300014", name: "GRUA TITAN 17-21 TON", description: "Grúa Titán 17-21 toneladas", unit: "HR", price: 2000, category: "Grúas" },
  { id: "030300016", code: "030300016", name: "GRUA TITAN 22-25 TON", description: "Grúa Titán 22-25 toneladas", unit: "HR", price: 2500, category: "Grúas" },
];

export const EquipmentRentalSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>("Equipo de Generación");

  const {
    items: cartItems,
    totalItems,
    totalPrice,
    addToCart,
    updateQuantity,
    removeFromCart,
    sendWhatsAppMessage,
  } = useCart();

  const categories = useMemo(
    () => Array.from(new Set(equipmentData.map((item) => item.category))) as CategoryType[],
    []
  );

  const filteredEquipment = useMemo(
    () => equipmentData.filter((item) => item.category === selectedCategory),
    [selectedCategory]
  );

  return (
    <section className="py-12 sm:py-24">
      <div className="container">
        {/* Título */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Renta de Equipo Industrial
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Equipo especializado para obra civil, generación eléctrica y construcción.
            Precios competitivos y disponibilidad garantizada.
          </p>
        </div>

        {/* Selector móvil y carrito */}
        <div className="lg:hidden mb-6">
          <div className="flex items-center gap-3 mb-4">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value as CategoryType)}
              className="flex-1 w-full p-3 border border-input bg-background rounded-md text-sm"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>

            {cartItems.length > 0 && (
              <CartSheet
                cartItems={cartItems}
                totalItems={totalItems}
                totalPrice={totalPrice}
                onUpdateQuantity={updateQuantity}
                onRemoveFromCart={removeFromCart}
                onSendWhatsApp={sendWhatsAppMessage}
                side="right"
                trigger={
                  <Button variant="outline" className="relative">
                    🛒 ({cartItems.length})
                    <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {totalItems}
                    </span>
                  </Button>
                }
              />
            )}
          </div>
        </div>

        {/* Layout desktop */}
        <div className="grid lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Sidebar */}
          <div className="hidden lg:block lg:col-span-1">
            <CategorySidebar
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              cartItems={cartItems}
              totalPrice={totalPrice}
              onUpdateQuantity={updateQuantity}
              onRemoveFromCart={removeFromCart}
              onSendWhatsApp={sendWhatsAppMessage}
            />
          </div>

          {/* Equipos */}
          <div className="lg:col-span-3">
            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl font-semibold mb-2">{selectedCategory}</h3>
              <p className="text-muted-foreground">{filteredEquipment.length} equipos disponibles</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
              {filteredEquipment.map((equipment) => (
                <EquipmentCard key={equipment.id} equipment={equipment} onAddToCart={addToCart} />
              ))}
            </div>
          </div>
        </div>

        {/* Carrito móvil bottom */}
        {cartItems.length > 0 && (
          <div className="lg:hidden fixed bottom-4 left-4 right-4 z-50">
            <CartSheet
              cartItems={cartItems}
              totalItems={totalItems}
              totalPrice={totalPrice}
              onUpdateQuantity={updateQuantity}
              onRemoveFromCart={removeFromCart}
              onSendWhatsApp={sendWhatsAppMessage}
              side="bottom"
              trigger={
                <Button size="lg" className="w-full shadow-lg">
                  Ver Carrito ({totalItems}) - ${totalPrice.toLocaleString()}
                </Button>
              }
            />
          </div>
        )}
      </div>
    </section>
  );
};