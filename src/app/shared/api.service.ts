import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import id from '@angular/common/locales/id';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  postEmploye(data: any) {
    return this.http
      .post<any>(
        'https://json-server-kr3iiu--3000.local.webcontainer.io/posts',
        data
      )
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
  getEmploye(data: any) {
    return this.http
      .get<any>('https://json-server-kr3iiu--3000.local.webcontainer.io/posts')
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
  updateEmploye(data: any) {
    return this.http
      .put<any>(
        'https://json-server-kr3iiu--3000.local.webcontainer.io/posts' + id,
        data
      )
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
  deleteEmploye(data: any) {
    return this.http
      .delete<any>(
        'https://json-server-kr3iiu--3000.local.webcontainer.io/posts' + id
      )
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
}
