import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class PersistenceService {
  constructor() {}

  set(key: string, data: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(data))
    } catch (e) {
      console.error('Error saving to localStorage', e)
    }
  }

  get(key: string): any {
    try {
      return JSON.parse(localStorage.getItem(key))
    } catch (e) {
      console.error('Error getting data from localStorage', e)
      return null
    }
  }

  delete(key: string): any {
    try {
      return localStorage.removeItem(key)
    } catch (e) {
      console.error('Error removing data from localStorage', e)
      return null
    }
  }
}
