// import bleno from 'bleno';
// import * as util from 'util';
import { log } from '../../../core/logger';
import { Settings } from '../../../core/settings';
import { BaseCharacteristic } from './base-characteristic';
import { DeviceData, isDeviceDataValid } from './characteristic-data';

export class DeviceCharacteristic extends  BaseCharacteristic<DeviceData>{
  public static UUID = 'd7e84cb2-ff37-4afc-9ed8-5577aeb84542';
  constructor() {
    super(DeviceCharacteristic.UUID, 'Device settings',  ['read', 'write']);
  }
  handleReadRequest(): Promise<DeviceData> {
    return new Promise((resolve) => {
      const data = {
          key: Settings.get(Settings.SHARED_ACCESS_KEY).value as string,
          name: Settings.get(Settings.SERIAL_NUMBER).value as string,
          color:  Settings.get(Settings.COLOR).value as string,
          deviceID: '123',
      };
      log.info('device-characteristic.handleReadRequest: successfully retrieving device data='
      + JSON.stringify(data));
      resolve(data);
    });
  }

  handleWriteRequest(raw: unknown): Promise<boolean> {
    return new Promise((resolve, reject) => {
      if (isDeviceDataValid(raw)) {
        const deviceData = raw as DeviceData;
        this.update(Settings.SERIAL_NUMBER, deviceData.name);
        this.update(Settings.SHARED_ACCESS_KEY, deviceData.key);
        if (deviceData.color ) {
          this.update(Settings.COLOR, deviceData.color);
        }
        resolve(true);
      } else {
        reject();
      }
    });
  }

  update(setting: string, value: string) {
    Settings.update(setting, value, (updated: boolean) => {
      if (updated) {
        log.info('device-characteristic: ' + setting + ' updated, value= ' + value);
      } else {
        log.error('device-characteristic: ' + setting + ' not updated');
      }
    });
  }
}
