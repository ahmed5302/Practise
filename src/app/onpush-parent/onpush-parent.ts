import { Component } from '@angular/core';
import { DefaultChild, OnpushChild } from '../onpush-child/onpush-child';

/*
 * The parent passes the SAME inputs to both children, so you can watch
 * how each strategy reacts to the same change.
 * Open the browser console: the "[Default] / [OnPush] template checked" logs
 * show which child Angular actually checks.
 */
@Component({
  selector: 'app-onpush-parent',
  imports: [DefaultChild, OnpushChild],
  templateUrl: './onpush-parent.html',
  styleUrl: './onpush-parent.css',
})
export class OnpushParent {

  fromParent = {
    firstName: 'Ahmed',
  };

  label = 'hello';

  parentCounter = 0; // NOT passed to the children

  // 1. NEW reference: BOTH children update, and ngOnChanges runs in both.
  //    OnPush compares inputs with ===, and oldObj !== newObj.
  changeObj() {
    this.fromParent = { ...this.fromParent, firstName: 'New Name ' + Date.now() % 1000 };
  }

  // 2. MUTATION (same reference): ONLY Default updates. No ngOnChanges in either.
  //    OnPush sees oldObj === newObj and skips the child, although the TS value changed.
  mutateObj() {
    this.fromParent.firstName = 'Mutated ' + Date.now() % 1000;
  }

  // 3. PRIMITIVE input change: BOTH update.
  //    Strings and numbers are compared by value, and a new value counts as a change.
  changeLabel() {
    this.label = 'label ' + Date.now() % 1000;
  }

  // 4. Parent-only state: the children's inputs don't change.
  //    Console: Default child's template is checked again (wasted work),
  //    OnPush child's template is skipped (the performance win).
  incrementParent() {
    this.parentCounter++;
  }
}
