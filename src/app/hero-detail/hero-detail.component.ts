import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;
  // @Input() hero: Hero; // think of this like a prop
  // we are simpy telling this component that the only thing it needs is this hero object and that it needs to display it

  constructor(
    private route: ActivatedRoute, // holds information about the route to THIS INSTANCE of the component - interested in the current route's parameters extrated from the URL
    private heroService: HeroService, // gets hero date from the remote server and this component will use it to get the hero-to-display
    private location: Location // angular service for interacting with the browser
  ) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id'); // taking the ID from the url // the JS operator (+) converts string to a number, which is what a heroID should be
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back(); // this is where the location import comes in handy
  }

  save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }
}
