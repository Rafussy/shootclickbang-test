declare module 'react' {
  export = React;
  export as namespace React;
  namespace React {
    // Basic React types
    type ReactElement<P = any, T extends string | JSXElementConstructor<any> = string | JSXElementConstructor<any>> = {
      type: T;
      props: P;
      key: string | number | null;
    };

    type ReactNode = ReactElement | string | number | boolean | null | undefined | ReactNode[];

    interface FunctionComponent<P = {}> {
      (props: P & { children?: ReactNode }): ReactElement | null;
      displayName?: string;
    }

    // JSX
    namespace JSX {
      interface Element extends ReactElement<any, any> {}
      interface IntrinsicElements {
        [elemName: string]: any;
      }
    }

    function createElement<P extends {}>(
      type: string | FunctionComponent<P>,
      props?: P & { children?: ReactNode },
      ...children: ReactNode[]
    ): ReactElement<P>;

    const Fragment: FunctionComponent<{ children?: ReactNode }>;
  }
}

declare module 'lucide-react' {
  import { FunctionComponent } from 'react';
  
  interface IconProps {
    className?: string;
    size?: number | string;
    strokeWidth?: number;
  }

  export const ArrowRight: FunctionComponent<IconProps>;
  export const Users: FunctionComponent<IconProps>;
  export const Camera: FunctionComponent<IconProps>;
  export const Share2: FunctionComponent<IconProps>;
  export const Star: FunctionComponent<IconProps>;
  export const Play: FunctionComponent<IconProps>;
  export const Upload: FunctionComponent<IconProps>;
  export const Globe: FunctionComponent<IconProps>;
} 