import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { User } from '../../../interfaces/user.interface';

@Component({
  selector: 'app-user-card',
  imports: [],
  templateUrl: './user-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserCardComponent {
  user = input.required<User>();

   // ✅ OUTPUT: Envía eventos al padre
  userSelected = output<User>();    // Para "Ver Detalles"
  userFavorited = output<User>();   // Para "Favorito"


  onUserSelect(): void {
      console.log('👤 Usuario seleccionado:', this.user());

      // ✅ EMITE el usuario completo al componente padre
      this.userSelected.emit(this.user());
    }
  
    /**
     * ⭐ Emite evento cuando se hace clic en "Favorito"
     */
    onUserFavorite(): void {
      console.log('⭐ Usuario marcado como favorito:', this.user());
      
      // ✅ EMITE el usuario completo al componente padre
      this.userFavorited.emit(this.user());
    }



}
