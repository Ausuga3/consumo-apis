import { ChangeDetectionStrategy, Component, inject, input, signal } from '@angular/core';
import { User } from '../../../interfaces/user.interface';
import { UserServices } from '../../../services/user.services';
import { UserCardComponent } from "../user-card/user-card.component";

@Component({
  selector: 'app-user-list',
  imports: [UserCardComponent],
  templateUrl: './user-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserListComponent {
  users = signal<User[]>([]); 
  userService = inject(UserServices);

  // ✅ ESTADO para manejar eventos de los hijos
  selectedUser = signal<User | null>(null);
  favoritedUser = signal<User | null>(null);


ngOnInit(): void {
  this.loadUsers();
}

loadUsers(): void {
  this.userService.getUsers().subscribe({
    next:(user) => this.users.set(user),
    error: (err) => console.error('❌ Error:', err)
    });
  }



  /**
     MANEJA el evento userSelected del componente hijo
    param user Usuario que fue seleccionado
   */
  handleUserSelected(user: User): void {
    this.selectedUser.set(user);
    console.log('🔍 PADRE recibió: Usuario seleccionado ->', user);
  }


   /**
  ⭐ MANEJA el evento userFavorited del componente hijo
   param user Usuario que fue marcado como favorito
   */
  handleUserFavorited(user: User): void {
    this.favoritedUser.set(user);
    console.log('⭐ PADRE recibió: Usuario favorito ->', user);
  }




}
