import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CategoryType, CartItem } from "@/types/equipment";

interface CategorySidebarProps {
  categories: CategoryType[];
  selectedCategory: CategoryType;
  onCategoryChange: (category: CategoryType) => void;
  cartItems: CartItem[];
  totalPrice: number;
  onUpdateQuantity: (id: string, change: number) => void;
  onRemoveFromCart: (id: string) => void;
  onSendWhatsApp: () => void;
}

export const CategorySidebar = React.memo(({
  categories,
  selectedCategory,
  onCategoryChange,
  cartItems,
  totalPrice,
  onUpdateQuantity,
  onRemoveFromCart,
  onSendWhatsApp,
}: CategorySidebarProps) => {
  return (
    <>
      {/* Categories */}
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
              onClick={() => onCategoryChange(category)}
            >
              {category}
            </Button>
          ))}
        </CardContent>
      </Card>

      {/* Desktop Cart */}
      {cartItems.length > 0 && (
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Carrito ({cartItems.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {cartItems.map((item) => (
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
                        onClick={() => onUpdateQuantity(item.id, -1)}
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
                        onClick={() => onUpdateQuantity(item.id, 1)}
                      >
                        +
                      </Button>
                      <Button
                        size="sm"
                        variant="destructive"
                        className="h-7 w-7 p-0 ml-2"
                        onClick={() => onRemoveFromCart(item.id)}
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
              Total: ${totalPrice.toLocaleString()}
            </div>
            
            <Button 
              className="w-full" 
              onClick={onSendWhatsApp}
              size="lg"
            >
              💬 Hablemos
            </Button>
          </CardContent>
        </Card>
      )}
    </>
  );
});

CategorySidebar.displayName = "CategorySidebar";