import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../interfaces/productos.interface';
import { ProductCardComponent } from "../product-card/product-card.component";

@Component({
  selector: 'app-product-list',
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent implements OnInit{
  productService = inject(ProductService);
  products = signal<Product[]>([]);

  ngOnInit(): void { this.loadProducts(); }


  loadProducts() {
    this.productService.getProducts().subscribe({
      next: (products: Product[]) => {
        this.products.set(products);
        console.log('✅ Productos cargados:', products);
      },
      error: (err) => console.error('❌ Error:', err)
    });
  }

  onDeleteProduct(productId: number): void {
    this.productService.deleteProduct(productId).subscribe({
      next: () => {
        // Remover el producto del array local
        this.products.update(currentProducts => 
          currentProducts.filter(product => product.id !== productId)
        ),
        console.log(`✅ Producto con ID ${productId} eliminado`);
      },
      error: (err) => console.error('❌ Error al eliminar:', err)
    });
  }

}
