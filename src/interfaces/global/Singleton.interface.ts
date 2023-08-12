export interface SingletonClass<T> {
  new (): any; // Constructor signature
  getInstance(): T;
}
