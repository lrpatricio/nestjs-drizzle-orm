import Product from "../../../models/product";

export default interface ProductRepository {
    findAll(): Product[];
    findById(id: number): Product;
    create(product: Product): void;
    update(product: Product): void;
    delete(id: number): void;
}