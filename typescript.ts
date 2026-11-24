type condition = "NEW" | "LIKE NEW" | "GOOD" | "FAIR";
type Listing = {
    id : number;
    title : string;
    price : number;
    condition : condition;
    imageUrl? : string;
    readonly createdAt : Date; 
};
interface Seller{
    name : string;
    email : string;
}
interface VerifiedSeller extends Seller {
    verifiedAt: Date;
}
const item1: Listing = {
    id: 1,
    title: "Casio fx-991EX",
    price: 4500,
    condition: "GOOD",
    createdAt: new Date(),
};
console.log(item1)

function describe(value: string | number) {
    if (typeof value === "string") {
      return value.toUpperCase();   // TS knows: string here
    }
    return value.toFixed(2);        // TS knows: number here
  }
   
  type Result = { ok: true; data: Listing[] } | { ok: false; error: string };  
   
  function show(result: Result) {
    if (result.ok) console.log(result.data.length);
    else console.error(result.error);
  }
  function first<T>(items: T[]): T | undefined {
    return items[0];
  }
  const n = first([1, 2, 3]);          // n: number | undefined
  const s = first(["a", "b"]);         // s: string | undefined
console.log(n)
console.log(s)
   
type ApiResponse<T> = { data: T; total: number };
const res: ApiResponse<Listing[]> = { data: [], total: 0 };
type ListingPreview = Pick<Listing, "id" | "title" | "price">;
type NewListing = Omit<Listing, "id" | "createdAt">;
type ListingUpdate = Partial<Listing>;           // all fields optional
type PriceMap = Record<string, number>;          // { [key: string]: number }
type FormValues = z.infer<typeof listingSchema>; // derive types from a Zod schema (Lecture )
type Product = {
    id: number;
    title: string;
    price: number;
    category: string;
    rating: number;
    thumbnail: string;
  };
   
  type ProductsResponse = {
    products: Product[];
    total: number;
    skip: number;
    limit: number;
  };
   
  async function getProducts(limit = 5): Promise<Product[]> {
    const res = await fetch(`https://dummyjson.com/products?limit=${limit}`);
    if (!res.ok) throw new Error(`Request failed: ${res.status}`);
    const data = (await res.json()) as ProductsResponse;
    return data.products;
  }
   
  const products = await getProducts();
  const topRated = products
    .filter((p) => p.rating >= 4.5)
    .map(({ title, price }) => `${title} – $${price}`);
   
  console.table(topRated);


//   hello