// autobind decorator
export function AutoBind(_: any, _2: string, descriptor: PropertyDescriptor) {
  // this decorator ensures a method called always refers to this as the class it was bound to
  const originalMethod = descriptor.value; // original method on class
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    // enumerable: false,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };
  return adjDescriptor;
}
