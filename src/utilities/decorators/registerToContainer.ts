import {GlobalContainerManager} from '@shared/classes/GlobalContainerManager';
import {injectable} from 'tsyringe';

const containerManager = GlobalContainerManager.getInstance();

export function register(identifier: symbol | string, containerName?: string) {
  return function (target: any) {
    const container = containerManager.getContainer(containerName);

    if (target.prototype) {
      // If the target is a class

      container.register(identifier, {
        useClass: target,
      });
    } else {
      // If the target is a constant value
      container.register(identifier, {
        useValue: target,
      });
    }

    return injectable()(target); // Apply the injectable decorator from tsyringe
  };
}
