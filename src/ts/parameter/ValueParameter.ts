class ValueParameter implements Parameter {

  private observers: JQueryCallback = $.Callbacks();

  constructor(private value: number) {
  }

  getValue(): JQueryPromise<number> {
    return $.Deferred<number>().resolve(this.value);
  }

  setValue(value: number) {
    this.value = value;
    this.observers.fire(this.value, this);
  }

  observe(observer: ParameterObserver) {
    observer(this.value, this);
    this.observers.add(observer);
  }

  unobserve(observer: ParameterObserver) {
    this.observers.remove(observer);
  }
}
