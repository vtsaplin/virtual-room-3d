class VirtualDeviceManager {

  private devices: Array<VirtualDevice> = [];

  addDevice(device: VirtualDevice) {
    this.devices.push(device);
  }

  update(delta: number) {
    for (var device of this.devices) {
      device.update(delta);
    }
  }
}
