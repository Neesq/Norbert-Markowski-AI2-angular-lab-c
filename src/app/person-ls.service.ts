import { Injectable } from '@angular/core';
import { Person } from './person';

@Injectable({
  providedIn: 'root',
})
export class PersonLsService {
  readonly KEY = 'stored-people-data';
  constructor() {}

  public getAll(): Person[] {
    let storedPersonData = [];
    const localStorageData = localStorage.getItem(this.KEY);
    if (localStorageData) {
      storedPersonData = JSON.parse(localStorageData) || [];
    }
    return storedPersonData;
  }
  public getPerson(index: number): Person {
    const people = this.getAll();
    return people[index];
  }

  public addPerson(person: Person): void {
    const people = this.getAll();
    people.push(person);
    localStorage.setItem(this.KEY, JSON.stringify(people));
  }

  public deletePerson(index: number): void {
    const people = this.getAll();
    if (index >= 0 && index < people.length) {
      people.splice(index, 1);
      localStorage.setItem(this.KEY, JSON.stringify(people));
    }
  }
}
