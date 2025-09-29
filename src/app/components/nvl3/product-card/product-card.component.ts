import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { Product } from '../../../interfaces/productos.interface';
import { SlicePipe } from '@angular/common';


@Component({
  selector: 'app-product-card',
  imports: [SlicePipe],
  templateUrl: './product-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {
  product = input.required<Product>();
  deleteProduct = output<number>();

  ondDeleteClick() : void{
    if (confirm(`¿Seguro que deseas eliminar el producto "${this.product().title}"?`)) {
      this.deleteProduct.emit(this.product().id);
    }
  }
   

}
