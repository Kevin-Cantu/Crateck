import React from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { CartItem } from "@/types/equipment";

interface CartSheetProps {
  cartItems: CartItem[];
  totalItems: number;
  totalPrice: number;
  onUpdateQuantity: (id: string, change: number) => void;
  onRemoveFromCart: (id: string) => void;
  onSendWhatsApp: () => void;
  trigger: React.ReactNode;
  side?: "right" | "bottom";
}

export const CartSheet = React.memo(({
  cartItems,
  totalItems,
  totalPrice,
  onUpdateQuantity,
  onRemoveFromCart,
  onSendWhatsApp,
  trigger,
  side = "right"
}: CartSheetProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        {trigger}
      </SheetTrigger>
      <SheetContent 
        side={side} 
        className={side === "bottom" ? "h-[80vh]" : "w-full sm:w-96"}
      >
        <SheetHeader>
          <SheetTitle>Carrito de Renta</SheetTitle>
        </SheetHeader>
        <div className="mt-6">
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
        </div>
      </SheetContent>
    </Sheet>
  );
});

CartSheet.displayName = "CartSheet";