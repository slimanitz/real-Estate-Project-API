export default interface Box {
  id?: string;
  owner: string;
  city: string;
  price: number;
  size: number;
  departement: string;
  postalCode: string;
  url: string;
  publishDate: Date;
  removeDate: Date;
}
