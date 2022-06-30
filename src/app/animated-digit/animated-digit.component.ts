import { CurrencyPipe } from '@angular/common';
import { Component, ElementRef, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-animated-digit',
  templateUrl: './animated-digit.component.html',
  styleUrls: ['./animated-digit.component.scss']
})
export class AnimatedDigitComponent implements OnInit {
  @Input() duration!: number;
  @Input() digit: number = 0;
  @Input() steps!: number;
  @ViewChild("animatedDigit") animatedDigit!: ElementRef;

  currency(value: string){
    return new CurrencyPipe('pt-br').transform(value, 'BRL');

  }

  ngOnInit(): void {

  }

  animateCount() {
    if (!this.duration) {
      this.duration = 1000;
    }

    if (typeof this.digit === "number") {

      this.counterFunc((this.digit * 100), this.duration, this.animatedDigit);
    }
  }

  counterFunc(endValue: any, durationMs: any, element: any) {
    if (!this.steps) {
      this.steps = 12;
    }
    if(typeof endValue !== 'number'){
      endValue = 0;
    }
    const stepCount = Math.abs(durationMs / this.steps);

    const valueIncrement = (endValue - 0) / stepCount;

    const sinValueIncrement = Math.PI / stepCount;

    let currentValue = 0;
    let currentSinValue = 0;
    let that = this;
    function step() {
      currentSinValue += sinValueIncrement;
      currentValue += valueIncrement * Math.sin(currentSinValue) ** 2 * 2;
      const calculo = (Math.abs(Math.floor(currentValue)))

      if(element?.nativeElement){
        element.nativeElement.textContent = that.currency((((calculo > endValue) ? endValue : calculo ) /100).toFixed(2).toString());
      }


      if (currentSinValue < Math.PI) {
        window.requestAnimationFrame(step);
      }
    }

    step();
  }

  ngAfterViewInit() {
    if (this.digit) {
      this.animateCount();
    }
  }


  ngOnChanges(changes: SimpleChanges) {
    if (changes["digit"]) {
      this.animateCount();
    }
  }
}
