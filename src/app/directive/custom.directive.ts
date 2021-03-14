import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
selector: '[appCustomDirective]',
})

export class CustomDirective implements OnInit {
  // For Setting the Attribute value of Native Element
  @HostBinding('style.backgroundColor') backgroundColor: string;
  // Also work as above
  public nativeStyles = this.elementRef.nativeElement.style;

  // You can not do the below Example
  // public frontColor = this.elementRef.nativeElement.style.color;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}
  // Directive Also have ngOnInit
  ngOnInit(): void {
    this.setStyleUsingRenderer();
    this.backgroundColor = 'lightblue'
  }

  // Adding Style using Renderer
  setStyleUsingRenderer() {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      '#80008094'
    );
    this.nativeStyles.border = '5px solid purple';
    this.nativeStyles.padding = '5px';
    this.nativeStyles.margin = '10px';
    this.nativeStyles.borderRadius = '10px';
  }

  @HostListener('mouseenter') mousecomein(eventData: Event) {
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,
    //   'background',
    //   '#80008094'
    // )
    this.backgroundColor = '#80008094';
    this.nativeStyles.color = 'red'
  }

  @HostListener('mouseleave') mousegoout(eventData: Event) {
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,
    //   'background',
    //   'transparent'
    // )
    this.backgroundColor = 'transparent';
    this.nativeStyles.color = '#800080e3'
  }
}
