import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  isDragging = false;
  startPosition = 0;
  currentTranslate = 0;
  slideIndex = 0;

  logos = [
    '../../../assets/Nuevas/doblePan.jpg',
    '../../../assets/Nuevas/descarga2.png',
    '../../../assets/Nuevas/doblePan.jpg',
    // Agrega más rutas de imágenes según sea necesario
  ];

  startDragging(event: MouseEvent) {
    this.isDragging = true;
    this.startPosition = event.clientX;
  }

  drag(event: MouseEvent) {
    if (!this.isDragging) return;
    const currentPosition = event.clientX;
    const distance = currentPosition - this.startPosition;
    this.currentTranslate = this.currentTranslate + distance;
    this.updateSliderPosition();
    this.startPosition = currentPosition;
  }

  stopDragging() {
    this.isDragging = false;
  }

  prevSlide() {
    this.slideIndex = Math.max(0, this.slideIndex - 1);
    this.updateSliderPosition();
  }

  nextSlide() {
    this.slideIndex = Math.min(this.logos.length - 1, this.slideIndex + 1);
    this.updateSliderPosition();
  }

  goToSlide(index: number) {
    this.slideIndex = index;
    this.updateSliderPosition();
  }

  updateSliderPosition() {
    const slider = document.querySelector('.slider') as HTMLElement;
    slider.style.transform = `translateX(${this.slideIndex * -100}%)`;
  }
}
