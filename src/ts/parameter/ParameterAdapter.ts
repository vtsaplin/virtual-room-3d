class ParameterAdapter implements Parameter {

  private observers: JQueryCallback = $.Callbacks();

  constructor(protected parameter: Parameter) {
    parameter.observe(() => {
      this.observers.fire(this.getValue(), this);
    });
  }

  getValue(): JQueryPromise<number> {
    return this.parameter.getValue();
  }

  setValue(value: number) {
    this.parameter.setValue(value);
  }

  observe(observer: ParameterObserver) {
    this.observers.add(observer);
  }

  unobserve(observer: ParameterObserver) {
    this.observers.remove(observer);
  }
}
