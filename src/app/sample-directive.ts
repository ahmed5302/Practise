import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[appSampleDirective]',
})
export class SampleDirective {

      @Input() hoverColor:any;
      hovered = false;
    constructor( private el : ElementRef){
        
        // el.nativeElement.style.backgroundColor = 'red';
    }

    ngOnInit(){
        console.log("DIREC ", this.hoverColor);
    }
    // @HostListener('click', ['$event'])
    // onClick(event:any){
    //      this.el.nativeElement.style.backgroundColor = 'black';
    //     this.el.nativeElement.style.color = 'white';
    //     console.log(event);
    // }

   @HostListener('mouseenter') onEnter() { this.hovered = true; }
  @HostListener('mouseleave') onLeave() { this.hovered = false; }

   @HostBinding('class.is-hovered')
  get isHovered() { return this.hovered; }

  @HostBinding('style.borderRadius.px') radius = 8;
}