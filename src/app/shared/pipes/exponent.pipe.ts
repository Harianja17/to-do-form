import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'exponent'
})
export class ExponentPipe implements PipeTransform{
    transform(value: any,exponent=1):number {
        return Math.pow(value,exponent)
    }
}