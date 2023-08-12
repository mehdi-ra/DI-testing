import 'reflect-metadata';
import 'module-alias/register';
import {GlobalContainerManager} from '@shared/classes/GlobalContainerManager';
import {ServiceTest2} from '@services/service.test2';

export default async function () {
  /**
   * 1 - First, I get global container manager and get instance
   * 2 - Then I register the api key
   * 3 - Then get the ServiceTest2 witch is the entry point of every other classes
   *
   * You can create multiple containers with just a single string
   * then register your classes or services inside them and these managed in
   * one single class called GlobalContainerManager
   */
  const containerManager = GlobalContainerManager.getInstance();
  GlobalContainerManager.getInstance().getContainer().registerInstance('ApiKey', 'Something');
  containerManager.globalContainer.resolve(ServiceTest2);
}
