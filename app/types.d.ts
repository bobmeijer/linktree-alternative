// React declaration
declare module 'react' {
  import * as React from 'react';
  export = React;
  export as namespace React;
  
  // Add React hooks
  export function useState<T>(initialState: T | (() => T)): [T, (newState: T | ((prevState: T) => T)) => void];
  export function useEffect(effect: () => void | (() => void), deps?: ReadonlyArray<any>): void;
}

// Add JSX namespace
declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

// Next.js declarations
declare module 'next/image' {
  import { FC, ComponentProps } from 'react';
  
  interface StaticImageData {
    src: string;
    height: number;
    width: number;
    blurDataURL?: string;
  }
  
  interface StaticRequire {
    default: StaticImageData;
  }

  type StaticImport = StaticRequire | StaticImageData;
  
  type ImageProps = Omit<JSX.IntrinsicElements['img'], 'src' | 'srcSet' | 'ref' | 'width' | 'height' | 'loading'> & {
    src: string | StaticImport;
    width?: number | string;
    height?: number | string;
    layout?: string;
    loader?: any;
    quality?: number | string;
    priority?: boolean;
    loading?: 'lazy' | 'eager';
    lazyBoundary?: string;
    placeholder?: 'blur' | 'empty';
    blurDataURL?: string;
    unoptimized?: boolean;
  };
  
  const Image: FC<ImageProps>;
  export default Image;
}

declare module 'next/font/google' {
  interface FontOptions {
    weight?: string | string[];
    style?: string | string[];
    subsets?: string[];
  }

  interface Font {
    className: string;
    style: { [key: string]: string };
  }

  export function Inter(options: FontOptions): Font;
}

// React Icons declarations
declare module 'react-icons/fi' {
  import { FC, SVGAttributes } from 'react';
  export interface IconBaseProps extends SVGAttributes<SVGElement> {
    size?: string | number;
    color?: string;
    title?: string;
  }
  
  export type IconType = FC<IconBaseProps>;
  
  export const FiChevronRight: IconType;
  export const FiBookOpen: IconType;
  export const FiUsers: IconType;
  export const FiMail: IconType;
  export const FiFileText: IconType;
  export const FiHeadphones: IconType;
  export const FiMonitor: IconType;
  export const FiMessageSquare: IconType;
  export const FiLinkedin: IconType;
  export const FiSun: IconType;
  export const FiMoon: IconType;
} 