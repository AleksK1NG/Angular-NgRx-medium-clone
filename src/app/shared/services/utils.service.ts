import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor() {}

  range(start: number, end: number) {
    return [...Array(end).keys()].map((elem) => elem + start)
  }
}
