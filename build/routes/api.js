"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var router = express.Router();
var sensor_state_1 = require("../models/sensor-state");
var usb_sensor_manager_1 = require("../models/usb-sensor-manager");
router.get('/', function (_req, res) {
    var sensorState = usb_sensor_manager_1.USBSensorManager.getSensorStates();
    res.setHeader('Content-Type', 'application/json');
    console.log('+++ /api.get:', JSON.stringify(sensor_state_1.SensorState));
    if (sensorState) {
        var sensorData = sensorState[0].getSensorData();
        res.send(JSON.stringify(sensorData));
        console.log('+++ /api.get:', JSON.stringify(sensorData));
    }
    else {
        res.send(JSON.stringify([]));
        console.log('--- /api.get:', JSON.stringify([]));
    }
});
exports.default = router;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yb3V0ZXMvYXBpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0EsaUNBQW9DO0FBQ3BDLElBQU0sTUFBTSxHQUFtQixPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDaEQsdURBQXFEO0FBQ3JELG1FQUFnRTtBQUVoRSxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxVQUFDLElBQXFCLEVBQUUsR0FBcUI7SUFFekQsSUFBTSxXQUFXLEdBQWtCLHFDQUFnQixDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3RFLEdBQUcsQ0FBQyxTQUFTLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7SUFDbEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQywwQkFBVyxDQUFDLENBQUMsQ0FBQztJQUMxRCxFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBQ2QsSUFBTSxVQUFVLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ2xELEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUU3RCxDQUFDO0lBQUMsSUFBSSxDQUFDLENBQUM7UUFDSixHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDckQsQ0FBQztBQUVMLENBQUMsQ0FBQyxDQUFDO0FBRUgsa0JBQWUsTUFBTSxDQUFDIiwiZmlsZSI6InJvdXRlcy9hcGkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBHRVQgc2Vuc29yIGRhdGEuXHJcbiAqL1xyXG5pbXBvcnQgZXhwcmVzcyA9IHJlcXVpcmUoJ2V4cHJlc3MnKTtcclxuY29uc3Qgcm91dGVyOiBleHByZXNzLlJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XHJcbmltcG9ydCB7IFNlbnNvclN0YXRlIH0gZnJvbSAnLi4vbW9kZWxzL3NlbnNvci1zdGF0ZSc7XHJcbmltcG9ydCB7IFVTQlNlbnNvck1hbmFnZXIgfSBmcm9tICcuLi9tb2RlbHMvdXNiLXNlbnNvci1tYW5hZ2VyJztcclxuXHJcbnJvdXRlci5nZXQoJy8nLCAoX3JlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UpID0+IHtcclxuXHJcbiAgICBjb25zdCBzZW5zb3JTdGF0ZTogU2Vuc29yU3RhdGVbXSA9IFVTQlNlbnNvck1hbmFnZXIuZ2V0U2Vuc29yU3RhdGVzKCk7XHJcbiAgICByZXMuc2V0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xyXG4gICAgY29uc29sZS5sb2coJysrKyAvYXBpLmdldDonLCBKU09OLnN0cmluZ2lmeShTZW5zb3JTdGF0ZSkpO1xyXG4gICAgaWYgKHNlbnNvclN0YXRlKSB7XHJcbiAgICAgICAgY29uc3Qgc2Vuc29yRGF0YSA9IHNlbnNvclN0YXRlWzBdLmdldFNlbnNvckRhdGEoKTtcclxuICAgICAgICByZXMuc2VuZChKU09OLnN0cmluZ2lmeShzZW5zb3JEYXRhKSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJysrKyAvYXBpLmdldDonLCBKU09OLnN0cmluZ2lmeShzZW5zb3JEYXRhKSk7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXMuc2VuZChKU09OLnN0cmluZ2lmeShbXSkpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCctLS0gL2FwaS5nZXQ6JywgSlNPTi5zdHJpbmdpZnkoW10pKTtcclxuICAgIH1cclxuXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xyXG5cclxuIl19
