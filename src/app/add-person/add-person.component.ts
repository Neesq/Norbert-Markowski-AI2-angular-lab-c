import { Component, OnInit } from '@angular/core';
import { PersonLsService } from '../person-ls.service';
import { Router } from '@angular/router';
import { Person } from '../person';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css'],
})
export class AddPersonComponent implements OnInit {
  person: Person = { address: {} };

  constructor(
    private personlsService: PersonLsService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  save(): void {
    this.personlsService.addPerson(this.person);
    this.router.navigate(['/list']);
  }
}
