class VirtualLight implements VirtualDevice {

  constructor(private object: THREE.Object3D, private brightness: Parameter) {
    var light = <THREE.Light> object.children[0];
    var color = light.color;
    this.brightness.observe((value: number) => {
      light.color = color.clone().multiplyScalar(value);
    });
  }

  getBrightness(): Parameter {
    return this.brightness;
  }

  update(delta: number) {
  }
}
