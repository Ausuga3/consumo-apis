import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProductListComponent } from "../../components/nvl3/product-list/product-list.component";

@Component({
  selector: 'app-api-nvl-3',
  imports: [ProductListComponent],
  templateUrl: './api-nvl-3.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ApiNvl3Component { }
