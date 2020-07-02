
import bleno from 'bleno';

import { DeviceCharacteristic } from '../characteristics/device-characteristic';

export class DeviceInfoService extends bleno.PrimaryService {
  public static UUID = 'fff1';
  constructor() {
    super({
      uuid: DeviceInfoService.UUID,
      characteristics: [
        new DeviceCharacteristic(),
      ],
    });
  }
}
