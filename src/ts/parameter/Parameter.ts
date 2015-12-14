interface Parameter {
  getValue():  JQueryPromise<number>;
  setValue(value: number);
  observe(observer: ParameterObserver);
  unobserve(observer: ParameterObserver);
}
