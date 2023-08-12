import {DependencyContainer, container} from 'tsyringe';
/**
 * This will manage your containers and
 * you can use it to register your dependencies in multiple
 * containers.
 */
export class GlobalContainerManager {
  private static __instance: GlobalContainerManager;
  protected _containers: {[key: string]: DependencyContainer} = {};
  protected _globalContainer = container;

  // ------------------------------------------------------ Getters & Setters |

  /**
   * Everything injected inside this will be shared across all the
   * other created containers.
   */
  public get globalContainer(): typeof this._globalContainer {
    return this._globalContainer;
  }

  private constructor() {}

  static getInstance(): GlobalContainerManager {
    if (!this.__instance) {
      this.__instance = new this();
    }

    return this.__instance;
  }

  /**
   * This will replaces or adds one new container to containers list
   * @param containerName You will use this for injecting dependency from decorators
   */
  public createAndRegister(containerName: string) {
    const childContainer = this.globalContainer.createChildContainer();
    this._containers[containerName] = childContainer;
  }

  public getContainer(name?: string): DependencyContainer {
    return name ? this._containers[name] : this.globalContainer;
  }
}
