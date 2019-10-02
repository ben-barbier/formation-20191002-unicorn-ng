import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'magicalName',
})
export class MagicalNamePipe implements PipeTransform {
    transform(originalName: string): string {
        console.count('magicalName');
        return originalName
            .split('')
            .map((char, idx) => idx % 2 ? char.toLowerCase() : char.toUpperCase())
            .join('');
    }
}

