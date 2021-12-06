export interface JpColor {
  id: string;
  chName: string;
  enName: string;
  color: string;
  RGB?: RGB;
  CMYK?: CMYK;
}

export interface RGB {
  R: number;
  G: number;
  B: number;
}

export interface CMYK {
  C: number;
  M: number;
  Y: number;
  K: number;
}
