// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
/// <reference types="vite/client" />
/// <reference types="../vendor/integration/types.d.ts" />

import 'astro/jsx';

declare namespace JSX {
  interface HTMLAttributes {
    'on:touchstart'?: (event: TouchEvent) => void;
    'on:touchend'?: (event: TouchEvent) => void;
    'on:click'?: (event: TouchEvent) => void;
  }
}