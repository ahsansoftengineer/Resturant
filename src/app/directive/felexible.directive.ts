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
  selector: '[appFelexibleDirective]',
})
export class FelexibleDirective implements OnInit {
  // For Setting the Attribute value of Native Element
  @HostBinding('style.backgroundColor') bgColor: string;
  @HostBinding('style.color') color: string;
  @HostBinding('style.border') border: string;
  @HostBinding('style') style: string;

  // Making Directive Customizable by using the Attribute Binding
  @Input() bgColorParameter: string;
  // Important (Providing the that facility)
  @Input() borderParameter: string;
  // Important (Providing the that facility)
  @Input('appFelexibleDirective') frontColorParameter: string;
  // HostBinding is doing pretty must as below example

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}
  // Directive Also have ngOnInit
  ngOnInit(): void {
    this.someStyle();
    this.bgColor = this.bgColorParameter;
    this.border = this.borderParameter;
    this.color = this.frontColorParameter;
  }
  // No Need Attention
  someStyle() {
    const styles = this.elementRef.nativeElement.style;
    styles.padding = '5px';
    styles.margin = '10px';
    styles.borderRadius = '10px';
  }
  @HostListener('mouseenter') mousecomein(eventData: Event) {
    // Changing on Event
    this.bgColor = '#80008094';
    this.color = 'purple';
    this.border = '3px solid orange';
  }

  @HostListener('mouseleave') mousegoout(eventData: Event) {
    // Non Change Able Values
    this.bgColor = this.bgColorParameter;
    this.color = this.color;
    this.border = this.borderParameter;
  }
}
