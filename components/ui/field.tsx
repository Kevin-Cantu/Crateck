"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";

export type FieldShellProps = {
  children: React.ReactNode;
  className?: string;
  withRing?: boolean;
};

export function FieldShell({ children, className, withRing = true }: FieldShellProps) {
  return (
    <div
      className={cn(
        "relative rounded-lg border border-input/70 bg-background/60 dark:bg-background/40 backdrop-blur-sm",
        withRing &&
          "transition focus-within:border-primary/50 focus-within:ring-2 focus-within:ring-primary/30",
        className
      )}
    >
      {children}
    </div>
  );
}

export type FieldLabelProps = React.ComponentProps<typeof Label> & {
  subtitle?: string;
};

export function FieldLabel({ className, children, subtitle, ...props }: FieldLabelProps) {
  return (
    <div className="mb-1.5">
      <Label
        className={cn(
          "text-sm font-medium text-foreground/90 tracking-wide",
          className
        )}
        {...props}
      >
        {children}
      </Label>
      {subtitle ? (
        <p className="mt-1 text-xs text-muted-foreground">{subtitle}</p>
      ) : null}
    </div>
  );
}

export function FieldError({ className, children }: { className?: string; children?: React.ReactNode }) {
  if (!children) return null;
  return (
    <p className={cn("mt-1 text-xs font-medium text-destructive", className)}>
      {children}
    </p>
  );
}

export function FieldHint({ className, children }: { className?: string; children?: React.ReactNode }) {
  if (!children) return null;
  return <p className={cn("mt-1 text-xs text-muted-foreground", className)}>{children}</p>;
}

export function FieldIcon({ children }: { children: React.ReactNode }) {
  return (
    <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
      {children}
    </div>
  );
}

export function withLeftIconPadding(className?: string) {
  return cn("pl-10", className);
}
