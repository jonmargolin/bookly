/** pipe for displying the book name  with only letters */
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'bookname'
})
export class BooknamePipe implements PipeTransform {
  newName: string;
  transform(origname: String): string {
    this.newName = '';
    const nameArray = origname.split(/[ ]+/);
    const path = new RegExp(/^[A-Za-z]+$/);
    const wstart = new RegExp(/^[A-Z]/);
    for (const i of nameArray) {
      if (path.test(i)) {
        if (wstart.test(i)) {
          this.newName = this.newName + i;
        } else {
          this.newName = this.newName + this.upercase(i);
        }
      } else {
        let word = '';
        const w = i.split('');
        for (const n of w) {
          if (path.test(n)) {
            word = word + n;
          }
        }
        if (wstart.test(word)) {
          this.newName = this.newName + word;
        } else {
          this.newName = this.newName + this.upercase(word);
        }
      }
      this.newName = this.newName + ' ';
    }
this.newName = this.newName.slice(0, -1);
    return this.newName;
  }
  upercase(word) {
    const c = word.charAt(0);
    word = word.slice(1);
    const up = c.toUpperCase();
    word = up + word;
    return word;
  }
}
