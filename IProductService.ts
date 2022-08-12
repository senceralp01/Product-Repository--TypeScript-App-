import { Product } from "./Product";

// Bu modül sadece method imzaları olan interface'lerden oluşmaktadır.

export interface IProductService {
    getById(id: number): Product; // Tipi number olan bir id gönder ve tipi/class'ı Product olan nesneyi döndür.
    getProducts(): Array<Product>; // Tipi Product olan bir bir Array döndür. Alternatifi: Product[]
    saveProduct(product: Product): void; // void geriye bir değer döndürmeyeceğini gösterir.
    deleteProduct(product: Product): void;


}