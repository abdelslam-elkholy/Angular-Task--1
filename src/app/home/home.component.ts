import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  // template: `<h1>Hello Angular</h1>`,
  // styles: [`h1 {color: red}`]
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  imgSrc: string =
    'https://images.unsplash.com/photo-1658087318893-59f40d1af71f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80';
  peopleByCountry: any[] = [
    {
      country: 'UK',
      people: [{ name: 'Douglas Pace' },
      { name: 'Mcleod Mueller' }],
    },
    {
      country: 'US',
      people: [
        { name: 'Day Meyers' },
        { name: 'Aguirre Ellis' },
        { name: 'Cook Tyson' },
      ],
    },
    {
      country: 'MARS',
      people: [{ name: 'Douglas Pace' },
      { name: 'Mcleod Mueller' }],
    },
  ];
}
