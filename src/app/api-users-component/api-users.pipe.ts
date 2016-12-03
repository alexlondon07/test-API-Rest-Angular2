import {Pipe, PipeTransform } from '@angular/core';

@Pipe({name:'pipeuser'})

export class PipeUser implements PipeTransform{
  private name: String;
  transform(name: String){
    if(name.includes('Mrs.') || (name.includes('Mr.') || (name.includes('Miss.') || (name.includes('Ms.')) ))){
      this.name = name.split(' ')[1];
    }else{
      this.name = name.split(' ')[0];
    }
    return this.name;
  }
}
