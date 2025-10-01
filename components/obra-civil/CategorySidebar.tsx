import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CategoryType } from "@/types/equipment";

interface CategorySidebarProps {
  categories: CategoryType[];
  selectedCategory: CategoryType;
  onCategoryChange: (category: CategoryType) => void;
}

export const CategorySidebar = React.memo(({ 
  categories,
  selectedCategory,
  onCategoryChange,
}: CategorySidebarProps) => {
  return (
    <>
      {/* Categories - Sin sticky */}
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
              onClick={() => onCategoryChange(category)}
            >
              {category}
            </Button>
          ))}
        </CardContent>
      </Card>
    </>
  );
});

CategorySidebar.displayName = "CategorySidebar";
