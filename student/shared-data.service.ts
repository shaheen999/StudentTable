import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root',
})
export class SharedDataService
{
     sharedValue: any;

    setSharedValue(value: any) {
      this.sharedValue = value;
    }
  
    getSharedValue(): any {
      return this.sharedValue;
    }
}