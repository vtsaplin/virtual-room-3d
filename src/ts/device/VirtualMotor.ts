class VirtualMotor implements VirtualDevice {

  private power: Parameter = new CachingParameterAdapter(new ValueParameter(0));
  private axis: THREE.Vector3;

  constructor(private target: THREE.Object3D, private speed: number) {
    var axisAngle = new THREE.Vector4().setAxisAngleFromQuaternion(this.target.quaternion);
    this.axis = new THREE.Vector3(axisAngle.x, axisAngle.y, axisAngle.z);
  }

  getPower(): Parameter {
    return this.power;
  }

  update(delta: number) {
    this.power.getValue().done((value: number) => {
      var angle = value * this.speed * delta;
      this.target.rotateOnAxis(this.axis, angle);
    });
  }
}
