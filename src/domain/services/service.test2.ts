import {register} from '@utilities/decorators/registerToContainer';
import {inject} from 'tsyringe';
import {ServiceTest3} from './service.test3';

@register('serviceTest2')
export class ServiceTest2 {
  constructor(@inject(ServiceTest3) serviceTest3?: ServiceTest3) {
    console.log(serviceTest3);
  }
}
