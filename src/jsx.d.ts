// This file extends the JSX namespace to support custom elements like spline-viewer
/* eslint-disable @typescript-eslint/no-explicit-any */

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': {
        url?: string;
        className?: string;
        children?: any;
        [key: string]: any;
      };
    }
  }
}

export {};
