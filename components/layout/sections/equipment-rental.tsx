"use client";
import { useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface EquipmentItem {
  id: string;
  code: string; // se mantiene en datos pero NO se muestra
  name: string;
  description: string;
  unit: string; // se mantiene en datos pero NO se muestra
  price: number; // se mantiene por compatibilidad pero NO se muestra
  category: string;
  image?: string; // URL opcional de imagen
}

interface CartItem extends EquipmentItem {
  quantity: number;
}

const placeholderImg = "/demo-img.jpg"; // imagen genérica existente en public/

const equipmentData: EquipmentItem[] = [
  // Equipo de Generación
  { id: "030600001", code: "030600001", name: "GENERADOR 100KVA", description: "Generador eléctrico 100KVA", unit: "JORNADA", price: 2500, category: "Equipo de Generación", image: placeholderImg },
  { id: "030600005", code: "030600005", name: "GENERADOR 20KVA", description: "Generador eléctrico 20KVA", unit: "JORNADA", price: 1200, category: "Equipo de Generación", image: placeholderImg },
  { id: "030600011", code: "030600011", name: "GENERADOR 60KVA", description: "Generador eléctrico 60KVA", unit: "JORNADA", price: 2000, category: "Equipo de Generación", image: placeholderImg },
  { id: "030600012", code: "030600012", name: "GENERADOR 80KVA", description: "Generador eléctrico 80KVA", unit: "JORNADA", price: 2300, category: "Equipo de Generación", image: placeholderImg },
  { id: "030230031", code: "030230031", name: "SOLDADORA 250", description: "Soldadora eléctrica 250A", unit: "JORNADA", price: 800, category: "Equipo de Generación", image: placeholderImg },
  { id: "030600014", code: "030600014", name: "TORRE DE ILUMINACION", description: "Torre de iluminación móvil", unit: "JORNADA", price: 1500, category: "Equipo de Generación", image: placeholderImg },

  // Equipo Ligero
  { id: "030200001", code: "030200001", name: "ALLANADORA 36\"", description: "Allanadora de concreto 36 pulgadas", unit: "DIA", price: 400, category: "Equipo Ligero", image: placeholderImg },
  { id: "030200002", code: "030200002", name: "ALLANADORA 46\"", description: "Allanadora de concreto 46 pulgadas", unit: "DIA", price: 500, category: "Equipo Ligero", image: placeholderImg },
  { id: "030200006", code: "030200006", name: "BOMBA DE AGUA 2\"", description: "Bomba de agua 2 pulgadas", unit: "DIA", price: 300, category: "Equipo Ligero", image: placeholderImg },
  { id: "030200007", code: "030200007", name: "BOMBA DE AGUA 3\"", description: "Bomba de agua 3 pulgadas", unit: "DIA", price: 350, category: "Equipo Ligero", image: placeholderImg },
  { id: "030200008", code: "030200008", name: "BOMBA DE AGUA 4\"", description: "Bomba de agua 4 pulgadas", unit: "DIA", price: 400, category: "Equipo Ligero", image: placeholderImg },
  { id: "030200011", code: "030200011", name: "COMPACTADORA", description: "Compactadora de suelo", unit: "DIA", price: 450, category: "Equipo Ligero", image: placeholderImg },
  { id: "030200014", code: "030200014", name: "CORTADORA DE CONCRETO", description: "Cortadora de concreto", unit: "DIA", price: 600, category: "Equipo Ligero", image: placeholderImg },
  { id: "030200016", code: "030200016", name: "CORTADORA DE METALES", description: "Cortadora de metales", unit: "DIA", price: 550, category: "Equipo Ligero", image: placeholderImg },
  { id: "030200017", code: "030200017", name: "DISCO DE FLOTADO", description: "Disco de flotado para concreto", unit: "DIA", price: 200, category: "Equipo Ligero", image: placeholderImg },
  { id: "030200018", code: "030200018", name: "HIDROLAVADORA", description: "Hidrolavadora de alta presión", unit: "DIA", price: 350, category: "Equipo Ligero", image: placeholderImg },
  { id: "030200020", code: "030200020", name: "PLANTA DE LUZ 5000W", description: "Planta de luz 5000W", unit: "DIA", price: 600, category: "Equipo Ligero", image: placeholderImg },
  { id: "030200053", code: "030200053", name: "PLANTA DE LUZ 7000W", description: "Planta de luz 7000W", unit: "DIA", price: 700, category: "Equipo Ligero", image: placeholderImg },
  { id: "030200059", code: "030200059", name: "PLANTA DE LUZ 9000W", description: "Planta de luz 9000W", unit: "DIA", price: 800, category: "Equipo Ligero", image: placeholderImg },

  // Maquinaria Pesada
  { id: "030100014", code: "030100014", name: "CARGADOR FRONTAL 20 TON", description: "Cargador frontal 20 toneladas", unit: "HR", price: 1200, category: "Maquinaria Pesada", image: placeholderImg },
  { id: "030100015", code: "030100015", name: "COMPACTADOR LISO 10 TON", description: "Compactador liso 10 toneladas", unit: "HR", price: 1000, category: "Maquinaria Pesada", image: placeholderImg },
  { id: "030100016", code: "030100016", name: "COMPACTADOR PATA DE CABRA 10 TON", description: "Compactador pata de cabra 10 ton", unit: "HR", price: 1100, category: "Maquinaria Pesada", image: placeholderImg },
  { id: "030100017", code: "030100017", name: "COMPACTADOR PATA DE CABRA 20 TON", description: "Compactador pata de cabra 20 ton", unit: "HR", price: 1300, category: "Maquinaria Pesada", image: placeholderImg },
  { id: "030100001", code: "030100001", name: "EXCAVADORA 20 TON CON CUCHARON", description: "Excavadora 20 ton con cucharón", unit: "HR", price: 1400, category: "Maquinaria Pesada", image: placeholderImg },
  { id: "030100002", code: "030100002", name: "EXCAVADORA 20 TON CON MARTILLO", description: "Excavadora 20 ton con martillo", unit: "HR", price: 1500, category: "Maquinaria Pesada", image: placeholderImg },
  { id: "030100031", code: "030100031", name: "EXCAVADORA 30 TON CON CUCHARON", description: "Excavadora 30 ton con cucharón", unit: "HR", price: 1600, category: "Maquinaria Pesada", image: placeholderImg },
  { id: "030100032", code: "030100032", name: "EXCAVADORA 30 TON CON MARTILLO", description: "Excavadora 30 ton con martillo", unit: "HR", price: 1700, category: "Maquinaria Pesada", image: placeholderImg },

  // Maquinaria Semiligera
  { id: "030200012", code: "030200012", name: "COMPRESOR 185 CFM", description: "Compresor de aire 185 CFM", unit: "JORNADA", price: 800, category: "Maquinaria Semiligera", image: placeholderImg },
  { id: "030200024", code: "030200024", name: "RODILLO VIBRATORIO 1 TON", description: "Rodillo vibratorio 1 tonelada", unit: "JORNADA", price: 900, category: "Maquinaria Semiligera", image: placeholderImg },
  { id: "030200025", code: "030200025", name: "RODILLO VIBRATORIO 2 TON", description: "Rodillo vibratorio 2 toneladas", unit: "JORNADA", price: 1100, category: "Maquinaria Semiligera", image: placeholderImg },

  // Grúas
  { id: "030300014", code: "030300014", name: "GRUA TITAN 17-21 TON", description: "Grúa Titán 17-21 toneladas", unit: "HR", price: 2000, category: "Grúas", image: placeholderImg },
  { id: "030300016", code: "030300016", name: "GRUA TITAN 22-25 TON", description: "Grúa Titán 22-25 toneladas", unit: "HR", price: 2500, category: "Grúas", image: placeholderImg },
];

export const EquipmentRentalSection = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("Equipo de Generación");
  const [hasChosenCategory, setHasChosenCategory] = useState<boolean>(false);

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

  const getTotalItems = () => cart.reduce((sum, item) => sum + item.quantity, 0);

  const generateWhatsAppMessage = () => {
    const message = `¡Hola! Me interesa rentar la siguiente maquinaria:\n\n${cart.map(item => `• ${item.name}\n  Cantidad: ${item.quantity}`).join('\n\n')}\n\n¿Podrían proporcionarme más información sobre disponibilidad y condiciones de renta?\n\nGracias.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/528132192308?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  // Contenido de la lista (sin precios, sin códigos, sin unidades) con imagen
  const CartContent = () => (
    <>
      <div className="space-y-3 max-h-96 overflow-y-auto">
        {cart.map((item) => (
          <div key={item.id} className="bg-muted/50 p-3 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="relative w-14 h-14 shrink-0 overflow-hidden rounded-md bg-muted">
                <Image 
                  src={item.image || placeholderImg}
                  alt={item.name}
                  fill
                  sizes="56px"
                  className="object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium mb-1 line-clamp-2">{item.name}</div>
                <div className="flex items-center gap-1">
                  <Button size="sm" variant="outline" className="h-7 w-7 p-0" onClick={() => updateQuantity(item.id, -1)}>-</Button>
                  <span className="text-sm font-medium px-2 min-w-[30px] text-center">{item.quantity}</span>
                  <Button size="sm" variant="outline" className="h-7 w-7 p-0" onClick={() => updateQuantity(item.id, 1)}>+</Button>
                  <Button size="sm" variant="destructive" className="h-7 w-7 p-0 ml-2" onClick={() => removeFromCart(item.id)}>×</Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <Separator className="my-4" />
      
      <Button className="w-full" onClick={generateWhatsAppMessage} size="lg">
        Solicitar cotización
      </Button>
    </>
  );

  return (
    <section id="catalogo-equipo" className="py-12 sm:py-24">
      <div className="container">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Renta de Equipo Industrial
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Equipo especializado para obra civil, generación eléctrica y construcción. 
            Disponibilidad garantizada.
          </p>
        </div>

        {/* Mobile: selector de categoría con combobox */}
        <div className="lg:hidden mb-6">
          <div className="flex items-center gap-3 mb-4">
            <Select
              value={hasChosenCategory ? selectedCategory : undefined}
              onValueChange={(val) => { setSelectedCategory(val); setHasChosenCategory(true); }}
            >
              <SelectTrigger className="flex-1">
                <SelectValue placeholder="Seleccionar categoría" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Desktop Sidebar: sticky - Categorías y Lista */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Categorías</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "default" : "ghost"}
                      className="w-full justify-start text-sm"
                      onClick={() => { setSelectedCategory(category); setHasChosenCategory(true); }}
                    >
                      {category}
                    </Button>
                  ))}
                </CardContent>
              </Card>

              {cart.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle>Lista ({cart.length})</CardTitle>
                  </CardHeader>
                    <CardContent>
                      <CartContent />
                    </CardContent>
                  </Card>
              )}
            </div>
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
                    <div className="w-full h-32 sm:h-48 bg-muted/50 rounded-lg flex items-center justify-center mb-3 overflow-hidden relative">
                      <Image
                        src={equipment.image || placeholderImg}
                        alt={equipment.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                    
                    <CardTitle className="text-base sm:text-lg leading-tight">
                      {equipment.name}
                    </CardTitle>
                    {/* Se eliminaron códigos y unidades del UI */}
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {equipment.description}
                    </p>
                    
                    <div className="flex items-center justify-end gap-2">
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

        {/* Mobile Fixed Bottom List Button (sin monto) */}
        {cart.length > 0 && (
          <div className="lg:hidden fixed bottom-4 left-4 right-4 z-50">
            <Sheet>
              <SheetTrigger asChild>
                <Button size="lg" variant="default" className="w-full shadow-lg bg-primary text-primary-foreground hover:bg-primary/90">
                  Ver Lista ({getTotalItems()})
                </Button>
              </SheetTrigger>
              <SheetContent side="bottom" className="h-[80vh]">
                <SheetHeader>
                  <SheetTitle>Lista de Renta</SheetTitle>
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
