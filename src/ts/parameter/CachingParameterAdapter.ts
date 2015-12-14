/// <reference path="./ParameterAdapter.ts"/>

class CachingParameterAdapter extends ParameterAdapter {

  private value: number;

  constructor(parameter: Parameter) {
    super(parameter);
    parameter.observe((value: number) => {
      this.value = value;
    })
  }

  getValue(): JQueryPromise<number> {
    if (this.value == null) {
      return this.parameter.getValue();
    }
    return $.Deferred<number>().resolve(this.value);
  }
}
