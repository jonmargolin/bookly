import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bookname'
})
export class BooknamePipe implements PipeTransform {
newName:string;
  transform(origname: String): string {
    this.newName="";
    let nameArray = origname.split(/[ ]+/);
   let path= new RegExp(/^[A-Za-z]+$/);
    let  wstart= new RegExp(/^[A-Z]/)
    for (let i of nameArray) {
      if(path.test(i))
        {
          if(wstart.test(i))
            {
              this.newName=this.newName+i;
            }
        }
        else{
          console.log(i);
        }
      /* else{
      let word = i.split('');
      for (let n of word) {
       if(path.test(n))
        {
          this.newName=this.newName+n;
        }
      }
        }*/
      this.newName=this.newName+" ";
    }
    console.log(this.newName);
    return this.newName;
  }

}
