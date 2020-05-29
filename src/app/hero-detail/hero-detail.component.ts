import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero; // think of this like a prop
  // we are simpy telling this component that the only thing it needs is this hero object and that it needs to display it

  constructor() { }

  ngOnInit(): void {
  }

}
