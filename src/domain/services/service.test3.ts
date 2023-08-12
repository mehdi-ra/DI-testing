import {register} from '@utilities/decorators/registerToContainer';
import {inject} from 'tsyringe';
import {FinalService} from './finalService';

@register('serviceTest3')
export class ServiceTest3 {
  constructor(@inject(FinalService) finalService: FinalService) {
    console.log(finalService);
  }
}
