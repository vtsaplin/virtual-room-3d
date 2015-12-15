class VirtualLight implements VirtualDevice {

  private light: THREE.Light;
  private color: THREE.Color;

  private currentValue: number;
  private value: number;

  constructor(private object: THREE.Object3D, private brightness: Parameter) {
    this.light = <THREE.Light> object.children[0];
    this.color = this.light.color;

    this.brightness.observe((value: number) => {
      if (this.currentValue == null) {
        this.currentValue = value;
      }
      this.value = value;
    });
  }

  getBrightness(): Parameter {
    return this.brightness;
  }

  update(delta: number) {
    if (this.currentValue != this.value) {
      this.currentValue += (this.value - this.currentValue) * delta;
      this.light.color = this.color.clone().multiplyScalar(this.currentValue);
    }
  }
}
