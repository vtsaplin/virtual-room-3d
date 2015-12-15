class PrismaticJoint implements VirtualDevice {

  private currentValue: number;
  private value: number;

  constructor(
    private target: THREE.Object3D,
    private anchor1: THREE.Vector3,
    private anchor2: THREE.Vector3,
    private position: Parameter) {

      this.position.observe((value: number) => {
        if (this.currentValue == null) {
          this.currentValue = value;
        }
        this.value = value;
      });
  }

  update(delta: number) {
    if (this.currentValue != this.value) {
      this.currentValue += (this.value - this.currentValue) * delta;
      var pos = new THREE.Vector3().lerpVectors (this.anchor1, this.anchor2, this.currentValue);
      this.target.position.set(pos.x, pos.y, pos.z);
    }
  }
}
