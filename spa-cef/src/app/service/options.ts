import { HttpHeaders } from '@angular/common/http';

export const postOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};