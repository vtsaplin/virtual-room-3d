class FunctionalParameter implements Parameter {

  constructor(private provider: () => JQueryPromise<number>) {
  }

  getValue(): JQueryPromise<number> {
    return this.provider();
  }

  setValue(value: number) {
    throw new Error("Operation is not supported");
  }

  observe(observer: ParameterObserver) {
  }

  unobserve(observer: ParameterObserver) {
  }
}
