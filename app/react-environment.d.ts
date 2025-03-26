// This file provides ambient type declarations for React and useState, useEffect
import 'react';

declare module 'react' {
  // Augment the React module to include hooks that TypeScript might not recognize
  export function useState<T>(initialState: T | (() => T)): [T, React.Dispatch<React.SetStateAction<T>>];
  export function useEffect(effect: () => void | (() => void), deps?: readonly any[]): void;
} 