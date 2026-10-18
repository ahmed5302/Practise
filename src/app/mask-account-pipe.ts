// import { Pipe, PipeTransform } from '@angular/core';

import { Pipe, PipeTransform } from "@angular/core";

// @Pipe({
//   name: 'maskAccount'
// })
// export class MaskAccountPipe implements PipeTransform {

//   transform(value: unknown, ...args: unknown[]): unknown {
//     return null;
//   }

// }

@Pipe({
  name  : 'maskAccount',
  pure :false
})

export class MaskAccountPipe implements PipeTransform{
  transform( val:any): any{
    console.log("PIPE ");
    return val
  }
}
