class RotationalMotor implements VirtualDevice {

  private currentValue: number;
  private value: number;

  constructor(
    private target: THREE.Object3D,
    private axis: THREE.Vector3,
    private speed: number,
    private power: Parameter) {

      this.power.observe((value: number) => {
        if (this.currentValue == null) {
          this.currentValue = value;
        }
        this.value = value;
      });
  }

  update(delta: number) {
    if (this.currentValue != this.value) {
      this.currentValue += (this.value - this.currentValue) * delta;
      var angle = this.currentValue * this.speed * delta;
      this.target.rotateOnAxis(this.axis, angle);
    }
  }
}
