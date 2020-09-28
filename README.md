# kcolor

- Create color from any supported type
- Convert color to any supported type
- Supported types: RGB, RGBA, HSL, HSLA, HSV, HSVA, CMYK, CMYKA, HEX (./src/color/types.ts)
- Many other color utility functions (./src/color/color.ts)

## Install

```bash
npm i kcolor
```

## Basic Usage

```typescript
import { Color } from 'kcolor';

const color = Color.rgb(85, 77, 68)

console.log(color.rgba1)    // { r: 0.33, g: 0.3, b: 0.26, a: 1 }
console.log(color.rgb1)     // { r: 0.33, g: 0.3, b: 0.26 }
console.log(color.rgba)     // { r: 85, g: 77, b: 68, a: 255 }
console.log(color.rgba255)  // { r: 85, g: 77, b: 68, a: 255 }
console.log(color.rgb)      // { r: 85, g: 77, b: 68 }
console.log(color.rgb255)   // { r: 85, g: 77, b: 68 }
console.log(color.hsva)     // { h: 32, s: 20, v: 33, a: 1 }
console.log(color.hsv)      // { h: 32, s: 20, v: 33 }
console.log(color.hsla)     // { h: 32, s: 11, l: 30, a: 1 }
console.log(color.hsl)      // { h: 32, s: 11, l: 30 }
console.log(color.cmyka)    // { c: 0, m: 9, y: 20, k: 67, a: 1 }
console.log(color.cmyk)     // { c: 0, m: 9, y: 20, k: 67 }
console.log(color.hexa)     // 554d44ff
console.log(color.hex)      // 554d44
console.log(color.intValue) // 1431127295
```
