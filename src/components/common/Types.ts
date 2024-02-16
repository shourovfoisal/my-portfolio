import { FC, PropsWithChildren } from "react";

// Utility Type that recursively shows full type details in vscode suggestions.
export type TypeDetail<T> = {
  [K in keyof T]: T[K];
} & {};

// T = {} is to make it optional
export type RFC<T = {}> = FC<PropsWithChildren & T>;
