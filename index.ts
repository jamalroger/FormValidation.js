
"use strict";
if(typeof exports !== 'undefined')
         exports.__esModule = true;
else 
         var exports = {"__esModule": true};
         
export class ValidationForm {

    private eleform: any;
    private validateMethods:Object;

    constructor(eleform: any) {
        this.eleform = eleform;
        this.validateMethods = {};
    }

    public  get(field:string):any{

        return this.eleform.elements[field].value;
    }

    public setValidation(validateMethods:object):void {

        this.validateMethods = validateMethods;

        this.addEvent();

    }

    public addEvent(): void {
        for (let key in this.validateMethods){
            if(this.validateMethods[key].event)
                this.eleform[key].addEventListener('keyup', (e) => { this.validateMethods[key].method(e.target.value); }, false);
        }
    }

    public get is_valid() : boolean {

        for (let key in this.validateMethods)
            if(!this.validateMethods[key].method(this.get(key))) return false;
            
        return true;

    }

   
}