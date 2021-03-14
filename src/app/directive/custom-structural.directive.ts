    import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

    @Directive({
      selector: '[appCustomStructuralDirective]'
    })
    // This is an Oposite Example of *ngIf Directive
    export class CustomStructuralDirective {
      constructor(
        private templateRef: TemplateRef<any>,
        private vcRef: ViewContainerRef
      ) { }
      @Input() set appCustomStructuralDirective(condition:boolean){
        if(!condition){
          this.vcRef.createEmbeddedView(this.templateRef)
        }else{
          this.vcRef.clear()
        }
      }
    }
