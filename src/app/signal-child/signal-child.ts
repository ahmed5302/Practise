import { Component, computed, contentChild, effect, ElementRef, input, model, output, viewChild } from '@angular/core';

@Component({
  selector: 'app-signal-child',
  imports: [],
  templateUrl: './signal-child.html',
  styleUrl: './signal-child.css',
})
export class SignalChild {

  // input(): parent -> child (read-only inside the child)
  title = input('Untitled');               // optional, default 'Untitled'
  color = input('black');                  // optional, default 'black'
  toChild = input.required();               // optional, undefined if not passed

  // model(): two-way, the child can read AND write; parent sees the change
  qty = model(0);

  // output(): child -> parent event
  removed = output<string>();

  // viewChild(): an element in THIS component's own template
  box = viewChild<ElementRef<HTMLInputElement>>('box');

  // contentChild(): an element the PARENT projected in via <ng-content>
  note = contentChild<ElementRef<HTMLElement>>('note');

  // inputs are signals, so computed() works on them directly
  upperTitle = computed(() => this.title().toUpperCase());

  constructor() {
    effect(() => console.log('[child] title input changed:', this.title()));
    effect(() => console.log('[child] projected note text:', this.note()?.nativeElement.textContent));
  }

  increase() { this.qty.update(q => q + 1); }   // writes back to the parent
  decrease() { this.qty.update(q => q - 1); }

  remove() { this.removed.emit(`${this.title()} removed`); }

  focusBox() { this.box()?.nativeElement.focus(); }   // parent calls this
}
