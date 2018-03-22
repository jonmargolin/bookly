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
            else{
              this.newName=this.newName+this.upercase(i);
                   }
            
        }
        else{
          let word="";
          let w = i.split('');
          for (let n of w) {
           if(path.test(n))
          {
            word=word+n;
          } 
          }
          if(wstart.test(word))
            {
              this.newName=this.newName+word;
            }
            else{
       this.newName=this.newName+this.upercase(word);
            }
          }
      this.newName=this.newName+" ";
    }
    return this.newName;
  }
  upercase(word)
  { 
    let c=word.charAt(0);
   word=word.slice(1);
    let up=c.toUpperCase();
    word= up+word;
    return word;
  }
}
