import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User, UserApiResponse } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserServices {

  private http = inject(HttpClient);
  private apiUrl = 'https://jsonplaceholder.typicode.com';


  getUsers(): Observable<User[]> {
    return this.http.get<UserApiResponse[]>(`${this.apiUrl}/users`)
    .pipe(
      map(apiUsers => apiUsers.map(apiUsers => this.mapUserFromApi(apiUsers)))
    )
  }

  private mapUserFromApi(apiUser: UserApiResponse): User {
    return {
      id: apiUser.id,
      name: apiUser.name,
      email: apiUser.email,
      phone: apiUser.phone,
      city: apiUser.address.city,           // ✅ Extraemos solo la ciudad
      companyName: apiUser.company.name     // ✅ Extraemos solo el nombre de la empresa
    };
  }  
}
