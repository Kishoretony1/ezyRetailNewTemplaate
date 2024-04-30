import { Platform } from '@angular/cdk/platform';
import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { AuthService } from './auth.service';

@Pipe({
  name: 'datestructure'
})
export class DatestructurePipe implements PipeTransform {
  constructor(private pipe : DatePipe, private auth :AuthService){

  }
  transform(value: any, ...args: any[]): unknown {
   if(value){
     value = value.replace(/ /g,"T");
     let x = new Date(value);
     let dhrs : number = 7;
     dhrs = this.auth.getCurrency().toLowerCase() == 'thb' ? 0 : 0;
     let finalDate = x.setHours(x.getHours()+dhrs);
    // //  if(this.platform.IOS || this.platform.SAFARI){
    //   finalDate = x.setHours(x.getHours()-6);
    //   finalDate = x.setMinutes(x.getMinutes()+30);
    // //  }
    return String(this.pipe.transform(finalDate, 'dd/M/y h:mm a'));
   }else{
    return '-';
   }
    
  }

}
