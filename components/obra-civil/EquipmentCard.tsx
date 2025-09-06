import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { EquipmentItem } from "@/types/equipment";

interface EquipmentCardProps {
  equipment: EquipmentItem;
  onAddToCart: (equipment: EquipmentItem) => void;
}

export const EquipmentCard = React.memo(({ equipment, onAddToCart }: EquipmentCardProps) => {
  return (
    <Card className="h-full">
      <CardHeader className="pb-3">
        {/* Espacio reservado para imagen */}
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
            onClick={() => onAddToCart(equipment)}
            className="shrink-0"
          >
            + Agregar
          </Button>
        </div>
      </CardContent>
    </Card>
  );
});

EquipmentCard.displayName = "EquipmentCard";