export enum PACKAGE_TYPE {
  GROWTH = "GROWTH",
  PRO = "PRO",
  ELITE = "ELITE",
}
export interface IPackage {
  id?: string;
  name: string;
  price: number;
  packageType: PACKAGE_TYPE;
}
