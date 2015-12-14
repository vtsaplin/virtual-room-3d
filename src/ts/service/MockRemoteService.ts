class MockRemoteService implements RemoteService {

  networkLatency = purl().param("latency") ? parseInt(purl().param("latency")) : 1000;

  maxBrightness = 1;

  private maxBrightnessParameter = new FunctionalParameter(() => {
    var promise: JQueryDeferred<number> = $.Deferred<number>();
    window.setTimeout(() => {
      promise.resolve(this.maxBrightness);
    }, this.networkLatency);
    return promise;
  });

  getMaxBrightness(): Parameter {
    return this.maxBrightnessParameter;
  }
}
