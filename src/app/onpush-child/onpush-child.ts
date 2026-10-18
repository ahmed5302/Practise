import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Directive,
  Input,
  OnChanges,
  SimpleChanges,
  inject,
  signal,
} from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { BehaviorSubject, timer } from 'rxjs';

/*
 * ============================================================================
 *  DEFAULT vs ONPUSH: side-by-side demo
 * ============================================================================
 *
 *  Both child components below share the SAME logic (ChildBase) and the SAME
 *  template. The ONLY difference is `changeDetection`.
 *
 *  Rule of thumb:
 *   - Default: the child's template is checked on EVERY change detection run
 *              (any click, setTimeout, HTTP response... anywhere in the app).
 *   - OnPush:  the child's template is checked ONLY when:
 *                1. an @Input gets a NEW reference (compared with ===)
 *                2. an event fires INSIDE this component (or its children)
 *                3. an `async` pipe in this template emits
 *                4. a signal read in this template changes
 *                5. you call markForCheck() / detectChanges() manually
 *              Otherwise it is SKIPPED, even if the TS values changed.
 *
 *  Each child button waits 1.5 seconds and then changes a value in a different
 *  way. The click itself counts as "an event inside the child", so the wait
 *  matters: by the time the value changes, that click is long over.
 * ============================================================================
 */

const DELAY = 1500;

@Directive() // a base class that uses @Input needs a decorator; @Directive() with no selector is fine
abstract class ChildBase implements OnChanges {
  @Input() fromParent!: { firstName: string }; // object input (reference vs mutation)
  @Input() label = '';                         // primitive input (string)

  protected cdr = inject(ChangeDetectorRef);
  abstract readonly mode: string;

  // ---- local state, changed in different ways ----
  clickCount = 0;                               // A. changed synchronously by a click in the child
  timeoutValue = 0;                             // B. changed later by setTimeout (plain field)
  subscribeValue = 0;                           // C. changed later by Observable.subscribe (plain field), like an HTTP call
  asyncValue$ = new BehaviorSubject<number>(0); // D. changed later, displayed via the `async` pipe
  signalValue = signal(0);                      // E. changed later, a signal
  markValue = 0;                                // F. plain field + markForCheck()
  detectValue = 0;                              // G. plain field + detectChanges()

  // Runs only when an input gets a NEW reference (or a new primitive value).
  // It does NOT run on mutation, in either mode.
  ngOnChanges(changes: SimpleChanges) {
    console.log(`[${this.mode}] ngOnChanges:`, Object.keys(changes).join(', '));
  }

  // Called from the template, so it runs every time Angular checks THIS template.
  // Use the console to see WHICH child gets checked and WHEN.
  // (In dev mode Angular checks twice, so you'll see each log twice.)
  trackRender() {
    console.log(`[${this.mode}] template checked`);
    return '';
  }

  // A. Event inside the child: BOTH update (the click marks this component dirty)
  incrementClick() {
    this.clickCount++;
  }

  // B. setTimeout + plain field:
  //    Default updates (zone.js runs change detection and Default is always checked).
  //    OnPush does NOT: nothing marked it dirty, so it is skipped.
  startTimeout() {
    setTimeout(() => {
      this.timeoutValue++;
      console.log(`[${this.mode}] timeoutValue in TS is now`, this.timeoutValue);
    }, DELAY);
  }

  // C. Observable.subscribe + plain field (the usual "HTTP data not showing with OnPush" bug):
  //    Same result as B. Default updates, OnPush does NOT.
  startSubscribe() {
    timer(DELAY).subscribe(() => {
      this.subscribeValue++;
      console.log(`[${this.mode}] subscribeValue in TS is now`, this.subscribeValue);
    });
  }

  // D. Observable + async pipe: BOTH update.
  //    The async pipe calls markForCheck() internally whenever a new value arrives.
  startAsyncPipe() {
    setTimeout(() => this.asyncValue$.next(this.asyncValue$.value + 1), DELAY);
  }

  // E. Signal: BOTH update.
  //    A template that reads a signal is marked for check when the signal changes.
  startSignal() {
    setTimeout(() => this.signalValue.update(v => v + 1), DELAY);
  }

  // F. Plain field + markForCheck(): BOTH update.
  //    markForCheck() marks this component (and its ancestors) dirty, and the
  //    NEXT change detection run (triggered by zone.js after the timeout) checks it.
  startMarkForCheck() {
    setTimeout(() => {
      this.markValue++;
      this.cdr.markForCheck();
    }, DELAY);
  }

  // G. Plain field + detectChanges(): BOTH update.
  //    detectChanges() checks THIS component and its children immediately,
  //    without waiting for the next app-wide run.
  startDetectChanges() {
    setTimeout(() => {
      this.detectValue++;
      this.cdr.detectChanges();
    }, DELAY);
  }

  // Logs the REAL TS values, to prove the data changed even when the screen didn't.
  // Clicking this is an event inside the child, so an OnPush child also refreshes
  // its screen and suddenly "catches up".
  logValues() {
    console.log(`[${this.mode}] TS values:`, {
      firstName: this.fromParent.firstName,
      label: this.label,
      timeoutValue: this.timeoutValue,
      subscribeValue: this.subscribeValue,
      markValue: this.markValue,
      detectValue: this.detectValue,
    });
  }
}

// ---------------------------------------------------------------------------
// Child 1: DEFAULT strategy
// ---------------------------------------------------------------------------
@Component({
  selector: 'app-default-child',
  imports: [AsyncPipe],
  templateUrl: './onpush-child.html',
  styleUrl: './onpush-child.css',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class DefaultChild extends ChildBase {
  readonly mode = 'Default';
}

// ---------------------------------------------------------------------------
// Child 2: ONPUSH strategy (same code, same template)
// ---------------------------------------------------------------------------
@Component({
  selector: 'app-onpush-child',
  imports: [AsyncPipe],
  templateUrl: './onpush-child.html',
  styleUrl: './onpush-child.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnpushChild extends ChildBase {
  readonly mode = 'OnPush';
}
