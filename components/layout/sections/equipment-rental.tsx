"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

interface EquipmentItem {
  id: string;
  code: string;
  name: string;
  description: string;
  unit: string;
  price: number;
  category: string;
}

interface CartItem extends EquipmentItem {
  quantity: number;
}

const equipmentData: EquipmentItem[] = [
  // Equipo de Generación
  { id: "030600001", code: "030600001", name: "GENERADOR 100KVA", description: "Generador eléctrico 100KVA", unit: "JORNADA", price: 2500, category: "Equipo de Generación" },
  { id: "030600005", code: "030600005", name: "GENERADOR 20KVA", description: "Generador eléctrico 20KVA", unit: "JORNADA", price: 1200, category: "Equipo de Generación" },
  { id: "030600011", code: "030600011", name: "GENERADOR 60KVA", description: "Generador eléctrico 60KVA", unit: "JORNADA", price: 2000, category: "Equipo de Generación" },
  { id: "030600012", code: "030600012", name: "GENERADOR 80KVA", description: "Generador eléctrico 80KVA", unit: "JORNADA", price: 2300, category: "Equipo de Generación" },
  { id: "030230031", code: "030230031", name: "SOLDADORA 250", description: "Soldadora eléctrica 250A", unit: "JORNADA", price: 800, category: "Equipo de Generación" },
  { id: "030600014", code: "030600014", name: "TORRE DE ILUMINACION", description: "Torre de iluminación móvil", unit: "JORNADA", price: 1500, category: "Equipo de Generación" },

  // Equipo Ligero
  { id: "030200001", code: "030200001", name: "ALLANADORA 36\"", description: "Allanadora de concreto 36 pulgadas", unit: "DIA", price: 400, category: "Equipo Ligero" },
  { id: "030200002", code: "030200002", name: "ALLANADORA 46\"", description: "Allanadora de concreto 46 pulgadas", unit: "DIA", price: 500, category: "Equipo Ligero" },
  { id: "030200006", code: "030200006", name: "BOMBA DE AGUA 2\"", description: "Bomba de agua 2 pulgadas", unit: "DIA", price: 300, category: "Equipo Ligero" },
  { id: "030200007", code: "030200007", name: "BOMBA DE AGUA 3\"", description: "Bomba de agua 3 pulgadas", unit: "DIA", price: 350, category: "Equipo Ligero" },
  { id: "030200008", code: "030200008", name: "BOMBA DE AGUA 4\"", description: "Bomba de agua 4 pulgadas", unit: "DIA", price: 400, category: "Equipo Ligero" },
  { id: "030200011", code: "030200011", name: "COMPACTADORA", description: "Compactadora de suelo", unit: "DIA", price: 450, category: "Equipo Ligero" },
  { id: "030200014", code: "030200014", name: "CORTADORA DE CONCRETO", description: "Cortadora de concreto", unit: "DIA", price: 600, category: "Equipo Ligero" },
  { id: "030200016", code: "030200016", name: "CORTADORA DE METALES", description: "Cortadora de metales", unit: "DIA", price: 550, category: "Equipo Ligero" },
  { id: "030200017", code: "030200017", name: "DISCO DE FLOTADO", description: "Disco de flotado para concreto", unit: "DIA", price: 200, category: "Equipo Ligero" },
  { id: "030200018", code: "030200018", name: "HIDROLAVADORA", description: "Hidrolavadora de alta presión", unit: "DIA", price: 350, category: "Equipo Ligero" },
  { id: "030200020", code: "030200020", name: "PLANTA DE LUZ 5000W", description: "Planta de luz 5000W", unit: "DIA", price: 600, category: "Equipo Ligero" },
  { id: "030200053", code: "030200053", name: "PLANTA DE LUZ 7000W", description: "Planta de luz 7000W", unit: "DIA", price: 700, category: "Equipo Ligero" },
  { id: "030200059", code: "030200059", name: "PLANTA DE LUZ 9000W", description: "Planta de luz 9000W", unit: "DIA", price: 800, category: "Equipo Ligero" },

  // Maquinaria Pesada
  { id: "030100014", code: "030100014", name: "CARGADOR FRONTAL 20 TON", description: "Cargador frontal 20 toneladas", unit: "HR", price: 1200, category: "Maquinaria Pesada" },
  { id: "030100015", code: "030100015", name: "COMPACTADOR LISO 10 TON", description: "Compactador liso 10 toneladas", unit: "HR", price: 1000, category: "Maquinaria Pesada" },
  { id: "030100016", code: "030100016", name: "COMPACTADOR PATA DE CABRA 10 TON", description: "Compactador pata de cabra 10 ton", unit: "HR", price: 1100, category: "Maquinaria Pesada" },
  { id: "030100017", code: "030100017", name: "COMPACTADOR PATA DE CABRA 20 TON", description: "Compactador pata de cabra 20 ton", unit: "HR", price: 1300, category: "Maquinaria Pesada" },
  { id: "030100001", code: "030100001", name: "EXCAVADORA 20 TON CON CUCHARON", description: "Excavadora 20 ton con cucharón", unit: "HR", price: 1400, category: "Maquinaria Pesada" },
  { id: "030100002", code: "030100002", name: "EXCAVADORA 20 TON CON MARTILLO", description: "Excavadora 20 ton con martillo", unit: "HR", price: 1500, category: "Maquinaria Pesada" },
  { id: "030100031", code: "030100031", name: "EXCAVADORA 30 TON CON CUCHARON", description: "Excavadora 30 ton con cucharón", unit: "HR", price: 1600, category: "Maquinaria Pesada" },
  { id: "030100032", code: "030100032", name: "EXCAVADORA 30 TON CON MARTILLO", description: "Excavadora 30 ton con martillo", unit: "HR", price: 1700, category: "Maquinaria Pesada" },

  // Maquinaria Semiligera
  { id: "030200012", code: "030200012", name: "COMPRESOR 185 CFM", description: "Compresor de aire 185 CFM", unit: "JORNADA", price: 800, category: "Maquinaria Semiligera" },
  { id: "030200024", code: "030200024", name: "RODILLO VIBRATORIO 1 TON", description: "Rodillo vibratorio 1 tonelada", unit: "JORNADA", price: 900, category: "Maquinaria Semiligera" },
  { id: "030200025", code: "030200025", name: "RODILLO VIBRATORIO 2 TON", description: "Rodillo vibratorio 2 toneladas", unit: "JORNADA", price: 1100, category: "Maquinaria Semiligera" },

  // Grúas
  { id: "030300014", code: "030300014", name: "GRUA TITAN 17-21 TON", description: "Grúa Titán 17-21 toneladas", unit: "HR", price: 2000, category: "Grúas" },
  { id: "030300016", code: "030300016", name: "GRUA TITAN 22-25 TON", description: "Grúa Titán 22-25 toneladas", unit: "HR", price: 2500, category: "Grúas" },
];

export const EquipmentRentalSection = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("Equipo de Generación");

  const categories = Array.from(new Set(equipmentData.map(item => item.category)));
  const filteredEquipment = equipmentData.filter(item => item.category === selectedCategory);

  const addToCart = (equipment: EquipmentItem) => {
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
  };

  const updateQuantity = (id: string, change: number) => {
    setCart(prev => 
      prev.map(item => {
        if (item.id === id) {
          const newQuantity = item.quantity + change;
          return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
        }
        return item;
      }).filter(item => item.quantity > 0)
    );
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const generateWhatsAppMessage = () => {
    const message = `¡Hola! Me interesa rentar el siguiente equipo de Crateck:

${cart.map(item => 
  `• ${item.name} (${item.code})
  Cantidad: ${item.quantity} ${item.unit}${item.quantity > 1 ? 'S' : ''}
  Subtotal: $${(item.price * item.quantity).toLocaleString()}`
).join('\n\n')}

TOTAL ESTIMADO: $${getTotalPrice().toLocaleString()}

¿Podrían proporcionarme más información sobre disponibilidad y condiciones de renta?

Gracias.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/528132192308?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  // Componente del carrito para reutilizar en desktop y móvil
  const CartContent = () => (
    <>
      <div className="space-y-3 max-h-96 overflow-y-auto">
        {cart.map((item) => (
          <div key={item.id} className="bg-muted/50 p-3 rounded-lg">
            <div className="text-sm font-medium mb-2 line-clamp-2">
              {item.name}
            </div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-muted-foreground">
                ${item.price.toLocaleString()}/{item.unit}
              </span>
              <div className="flex items-center gap-1">
                <Button
                  size="sm"
                  variant="outline"
                  className="h-7 w-7 p-0"
                  onClick={() => updateQuantity(item.id, -1)}
                >
                  -
                </Button>
                <span className="text-sm font-medium px-2 min-w-[30px] text-center">
                  {item.quantity}
                </span>
                <Button
                  size="sm"
                  variant="outline"
                  className="h-7 w-7 p-0"
                  onClick={() => updateQuantity(item.id, 1)}
                >
                  +
                </Button>
                <Button
                  size="sm"
                  variant="destructive"
                  className="h-7 w-7 p-0 ml-2"
                  onClick={() => removeFromCart(item.id)}
                >
                  ×
                </Button>
              </div>
            </div>
            <div className="text-xs font-medium">
              Subtotal: ${(item.price * item.quantity).toLocaleString()}
            </div>
          </div>
        ))}
      </div>
      
      <Separator className="my-4" />
      
      <div className="text-lg font-bold mb-4">
        Total: ${getTotalPrice().toLocaleString()}
      </div>
      
      <Button 
        className="w-full" 
        onClick={generateWhatsAppMessage}
        size="lg"
      >
         Hablemos
      </Button>
    </>
  );

  return (
    <section className="py-12 sm:py-24">
      <div className="container">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Renta de Equipo Industrial
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Equipo especializado para obra civil, generación eléctrica y construcción. 
            Precios competitivos y disponibilidad garantizada.
          </p>
        </div>

        {/* Mobile Header with Cart and Categories */}
        <div className="lg:hidden mb-6">
          <div className="flex items-center gap-3 mb-4">
            {/* Mobile Category Selector */}
            <div className="flex-1">
              <select 
                value={selectedCategory} 
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full p-3 border border-input bg-background rounded-md text-sm"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Mobile Cart Button */}
            {cart.length > 0 && (
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="relative">
                    🛒 ({cart.length})
                    <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {cart.reduce((sum, item) => sum + item.quantity, 0)}
                    </span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-full sm:w-96">
                  <SheetHeader>
                    <SheetTitle>Carrito de Renta</SheetTitle>
                  </SheetHeader>
                  <div className="mt-6">
                    <CartContent />
                  </div>
                </SheetContent>
              </Sheet>
            )}
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Desktop Sidebar */}
          <div className="hidden lg:block lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Categorías</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "ghost"}
                    className="w-full justify-start text-sm"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </CardContent>
            </Card>

            {/* Desktop Cart */}
            {cart.length > 0 && (
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Carrito ({cart.length})</CardTitle>
                </CardHeader>
                <CardContent>
                  <CartContent />
                </CardContent>
              </Card>
            )}
          </div>

          {/* Equipment Grid */}
          <div className="lg:col-span-3">
            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl font-semibold mb-2">{selectedCategory}</h3>
              <p className="text-muted-foreground">
                {filteredEquipment.length} equipos disponibles
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
              {filteredEquipment.map((equipment) => (
                <Card key={equipment.id} className="h-full">
                  <CardHeader className="pb-3">
                    {/* Espacio reservado para imagen - Más pequeño en móvil */}
                    <div className="w-full h-32 sm:h-48 bg-muted/50 rounded-lg flex items-center justify-center mb-3">
                      <div className="text-center text-muted-foreground">
                        <div className="w-8 h-8 sm:w-12 sm:h-12 bg-muted rounded mx-auto mb-2"></div>
                        <p className="text-xs sm:text-sm">Imagen próximamente</p>
                      </div>
                    </div>
                    
                    <CardTitle className="text-base sm:text-lg leading-tight">
                      {equipment.name}
                    </CardTitle>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs px-2 py-1 bg-muted rounded">
                        {equipment.code}
                      </span>
                      <span className="text-xs px-2 py-1 bg-secondary rounded">
                        {equipment.unit}
                      </span>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {equipment.description}
                    </p>
                    
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex-1">
                        <div className="text-lg font-bold text-primary">
                          ${equipment.price.toLocaleString()}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          por {equipment.unit}
                        </div>
                      </div>
                      
                      <Button 
                        size="sm"
                        onClick={() => addToCart(equipment)}
                        className="shrink-0"
                      >
                        + Agregar
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Fixed Bottom Cart Button */}
        {cart.length > 0 && (
          <div className="lg:hidden fixed bottom-4 left-4 right-4 z-50">
            <Sheet>
              <SheetTrigger asChild>
                <Button size="lg" className="w-full shadow-lg">
                  Ver Carrito ({cart.reduce((sum, item) => sum + item.quantity, 0)}) - ${getTotalPrice().toLocaleString()}
                </Button>
              </SheetTrigger>
              <SheetContent side="bottom" className="h-[80vh]">
                <SheetHeader>
                  <SheetTitle>Carrito de Renta</SheetTitle>
                </SheetHeader>
                <div className="mt-6">
                  <CartContent />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        )}
      </div>
    </section>
  );
};