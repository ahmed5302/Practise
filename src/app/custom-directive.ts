import { Directive, ElementRef, EventEmitter, HostListener, Input, OnChanges, Output, Renderer2, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appCustomDirective]',
  providers : [
    { provide : NG_VALIDATORS,useExisting : CustomDirective,multi : true}
  ]
})
export class CustomDirective implements Validator{
  validate( control : AbstractControl):ValidationErrors | null{
      const valid = /^[a-zA-Z0-9]*$/.test(control.value || '');
      console.log(valid);
      
      return valid ? null : { invalidCharacters: true };
  }
}

 
