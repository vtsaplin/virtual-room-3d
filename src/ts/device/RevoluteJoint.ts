class RevoluteJoint implements VirtualDevice {

  private transform = new THREE.Matrix4();

  private currentValue: number;
  private value: number;

  constructor(
    private target: THREE.Object3D,
    private anchor: THREE.Vector3,
    private axis: THREE.Vector3,
    private startAngle: number,
    private endAngle: number,
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
      var m1 = new THREE.Matrix4().makeTranslation(-this.anchor.x, -this.anchor.y, -this.anchor.z);
      var m2 = new THREE.Matrix4().makeRotationAxis(this.axis, this.startAngle + (this.endAngle - this.startAngle) * this.currentValue);
      var m3 = new THREE.Matrix4().makeTranslation(this.anchor.x, this.anchor.y, this.anchor.z);
      this.target.applyMatrix(this.transform.getInverse(this.transform, true));
      this.transform = m3.multiply(m2.multiply(m1));
      this.target.applyMatrix(this.transform);
    }
  }
}
