import { Sensor } from './sensor';
export declare class Device {
    private static _hid1;
    private static readonly POLL_INTERVAL;
    private static _sensors;
    private static _deviceInitialized;
    private static _nextSensor;
    private static _interval;
    private static _lastInputTime;
    constructor();
    static initialize(): void;
    private static close();
    static pollSensors(): void;
    static getSensorData(): Sensor[];
    private static parseError(_error);
    private static parseInput(data);
    private static writeRequest(data);
    private static writeUsedPortsRequest();
    private static matchUsedPorts(data);
    private static connectSensors(total, used);
    private static WriteTemperatureRequest(port);
    private static matchTemperature(data);
    private static GetTemperature(msb, lsb);
    private static updateSensor(port, temperature);
    private static writeCheck03Request();
    private static matchCheck03(data);
    private static writeCheck05Request();
    private static matchCheck05(data);
    private static writeCheck0DRequest();
    private static matchCheck0D(data);
    private static writeCheckFFRequest();
    private static matchCheckFF(data);
}