import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  images = ['assets/img/uthappizza.png', 'assets/img/buffet.png', 'assets/img/alberto.png'];
}
