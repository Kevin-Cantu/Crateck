"use client";
import { useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button, buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { EquipmentItem } from "@/types/equipment";
import { equipmentData, placeholderImg } from "@/data/equipmentData";

// CartItem local: usa el tipo base y añade image? + quantity para el carrito
interface CartItem extends EquipmentItem {
  image?: string;
  quantity: number;
}

export const EquipmentRentalSection = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>(
    "Equipo de Generación"
  );
  const [hasChosenCategory, setHasChosenCategory] = useState<boolean>(false);

  const categories = Array.from(new Set(equipmentData.map((item) => item.category)));
  const filteredEquipment = equipmentData.filter(
    (item) => item.category === selectedCategory
  );

  const addToCart = (equipment: EquipmentItem & { image?: string }) => {
    setCart((prev) => {
      const existingItem = prev.find((item) => item.id === equipment.id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === equipment.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...equipment, quantity: 1 }];
    });
  };

  const updateQuantity = (id: string, change: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQuantity = item.quantity + change;
            return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
          }
          return item;
        })
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const getTotalItems = () =>
    cart.reduce((sum, item) => sum + item.quantity, 0);

  const generateWhatsAppMessage = () => {
    const message = `¡Hola! Me interesa rentar la siguiente maquinaria:\n\n${cart
      .map((item) => `• ${item.name}\n  Cantidad: ${item.quantity}`)
      .join(
        "\n\n"
      )}\n\n¿Podrían proporcionarme más información sobre disponibilidad y condiciones de renta?\n\nGracias.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/528132192308?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
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
                <div className="text-sm font-medium mb-1 line-clamp-2">
                  {item.name}
                </div>
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
            Equipo especializado para obra civil, generación eléctrica y
            construcción. Disponibilidad garantizada.
          </p>
        </div>

        {/* Mobile: selector de categoría con combobox */}
        <div className="lg:hidden mb-6">
          <div className="flex items-center gap-3 mb-4">
            <Select
              value={hasChosenCategory ? selectedCategory : undefined}
              onValueChange={(val) => {
                setSelectedCategory(val);
                setHasChosenCategory(true);
              }}
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
                      variant={
                        selectedCategory === category ? "default" : "ghost"
                      }
                      className="w-full justify-start text-sm"
                      onClick={() => {
                        setSelectedCategory(category);
                        setHasChosenCategory(true);
                      }}
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
              <h3 className="text-xl sm:text-2xl font-semibold mb-2">
                {selectedCategory}
              </h3>
              <p className="text-muted-foreground">
                {filteredEquipment.length} equipos disponibles
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
              {filteredEquipment.map((equipment) => (
                <Card key={equipment.id} className="h-full flex flex-col">
                  <div className="relative w-full aspect-[4/3] sm:aspect-[3/2] overflow-hidden rounded-t-lg">
                    <Image
                      src={equipment.image || placeholderImg}
                      alt={equipment.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader className="pb-5 flex-grow">
                    <CardTitle className="text-base sm:text-lg leading-tight ">
                      {equipment.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0 flex flex-col justify-between flex-grow">
                    <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
                      {equipment.description}
                    </p>
                    <div className="flex items-center justify-end gap-2">
                      <Button
                        size="sm"
                        onClick={() => addToCart(equipment)}
                        className="shrink-0"
                      >
                        + Solicitar Información
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
          <div className="lg:hidden fixed bottom-4 left-4 right-4 z-[60]">
            <Sheet>
              <SheetTrigger
                className={buttonVariants({
                  variant: "default",
                  size: "lg",
                  className: "w-full shadow-lg",
                })}
              >
                Ver Lista ({getTotalItems()})
              </SheetTrigger>
              <SheetContent side="bottom" className="h-[80vh]">
                <SheetHeader>
                  <SheetTitle>Lista</SheetTitle>
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
