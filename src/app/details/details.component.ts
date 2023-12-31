import { PersonLsService } from './../person-ls.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person } from '../person';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  personId?: number;
  person?: Person;

  constructor(
    private route: ActivatedRoute,
    private personLsService: PersonLsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.personId = params['id'];
      this.person = this.personId
        ? this.personLsService.getPerson(this.personId)
        : undefined;
    });
  }
}
