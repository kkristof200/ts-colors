export type RGB = {
    r: number // 0-1 or 0-255
    g: number // 0-1 or 0-255
    b: number // 0-1 or 0-255
}
export type RGBA = RGB & { a: number }

export type HSL = {
    h: number // 0-100
    s: number // 0-100
    l: number // 0-100
}
export type HSLA = HSL & {
    a: number // 0-1
}

export type HSV = {
    h: number // 0-100
    s: number // 0-100
    v: number // 0-100
}
export type HSVA = HSV & {
    a: number // 0-1
}

export type CMYK = {
    c: number // 0-100
    m: number // 0-100
    y: number // 0-100
    k: number // 0-100
}
export type CMYKA = CMYK & {
    a: number // 0-1
}

export type HEX = string