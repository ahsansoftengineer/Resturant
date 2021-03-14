import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appSimpleDirective]',
})
export class SimpleDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}
  // Directive Also have ngOnInit
  ngOnInit(): void {
    this.elementRef.nativeElement.style.backgroundColor = 'green';
    const styles = this.elementRef.nativeElement.style;
    styles.backgroundColor = '#35ff35a8';
    styles.border = '5px solid green';
    styles.padding = '5px';
    styles.margin = '10px';
    styles.color = '#025c0dad';
    styles.borderRadius = '10px';
  }
}
