class CombinedParameter implements Parameter {

  private observers: JQueryCallback = $.Callbacks();

  constructor(private parameter1: Parameter, private parameter2: Parameter) {
    parameter1.observe((value: number, parameter: Parameter) => {
      this.getValue().done((value: number) => {
        this.observers.fire(value, this);
      });
    });
    parameter2.observe((value: number, parameter: Parameter) => {
      this.getValue().done((value: number) => {
        this.observers.fire(value, this);
      });
    });
  }

  getValue(): JQueryPromise<number> {
    var promise: JQueryDeferred<number> = $.Deferred<number>();
    $.when(this.parameter1.getValue(), this.parameter2.getValue()).done((value1: number, value2: number) => {
      return promise.resolve(this.combine(value1, value2));
    });
    return promise;
  }

  setValue(value: number) {
    throw new Error("Operation is not supported");
  }

  observe(observer: ParameterObserver) {
    this.observers.add(observer);
  }

  unobserve(observer: ParameterObserver) {
    this.observers.remove(observer);
  }

  protected combine(value1: number, value2: number): number {
    return value1 * value2;
  }
}
