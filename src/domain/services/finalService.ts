import {register} from '@utilities/decorators/registerToContainer';
import {inject} from 'tsyringe';

@register('FinalService')
export class FinalService {
  constructor(@inject('ApiKey') apiKey: string) {
    console.log('This is api key', apiKey);
  }
}
