const express = require('express');
const port = 3001;
const cors = require('cors');
const app = express();

const { SerialPort } = require('serialport');
const { ReadlineParser } = require('@serialport/parser-readline');
const serialPort = 'COM5';

const usb_port = new SerialPort({ path: serialPort ,baudRate: 9600 }, (err) => {
    if(err){
         console.error(`Error opening ${serialPort}:`, err.message);

        // Troubleshooting suggestions:
        console.log('Make sure the port name is correct.');
        console.log('Verify device connection and drivers.');
        console.log('Ensure no other applications are using the port.');
    }else{
        console.log(`${serialPort} opened successfully!`)
    }
});




const parser = new ReadlineParser();

usb_port.pipe(parser);

let jsonData = "";

parser.on('data', (data) => {
    jsonData = data;
    
});

parser.on('error', (err) => {
    console.error('Serial port error: ', err);
})



//setting up express

app.use(cors());

app.get('/', (req, res) => {
    res.json(parseData(jsonData));
});

// app.post('/controls', (req, res) => {
// })





app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});



function parseData(data) {
    let split = data.split(' ');
    let state = Number(split[0])
    let temp1 = parseFloat(split[1]);
    let temp2 = parseFloat(split[2]);
    let temp3 = parseFloat(split[3]);
    let temp4 = parseFloat(split[4]);
    let stringPot = parseFloat(split[5]);
    let flowMeter = parseFloat(split[6]);
    let eboxDoor = Number(split[7]);
    let onePhaseCT1 = parseFloat(split[8]);
    let onePhaseCT2 = parseFloat(split[9]);
    let onePhaseCT3 = parseFloat(split[10]);
    let pressureTrans1 = parseFloat(split[11]);
    let pressureTrans2 = parseFloat(split[12]);
    let pressureTrans3 = parseFloat(split[13]);
    let pressureTrans4 = parseFloat(split[14]);
    let pressureTrans5 = parseFloat(split[15]);
    let hpuState = Number(split[16]);
    let pnematicState = Number(split[17]);
    let cycles = Number(split[18]);
    let reedSwitchTBM = Number(split[19]);
    let gasSensor = parseFloat(split[20]);
    let tbmTemp1 = parseFloat(split[21]);
    let tbmTemp2 = parseFloat(split[22]);
    let tbmTemp3 = parseFloat(split[23]);
    let tbmTemp4 = parseFloat(split[24]);
    let linAct1 = parseFloat(split[25]);
    let linAct2 = parseFloat(split[26]);
    let linAct3 = parseFloat(split[27]);
    let linAct4 = parseFloat(split[28]);
    let linAct5 = parseFloat(split[29]);
    let linAct6 = parseFloat(split[30]);
    let highPressureState = Number(split[31]);
    let rpmSensor = parseFloat(split[32]);
    let gyroscopePitch = parseFloat(split[33]);
    let gyroscopeYaw = parseFloat(split[34]);
    let cutterfaceState = Number(split[35]);
    let highVolWaterPumpState = Number(split[36]);
    let cutterfaceVFDErrorCode = Number(split[37]);
    let waterVFDErrorCode = Number(split[38]);
    let cutterfaceVFDCurrent = parseFloat(split[39]);
    let waterVFDCurrent = parseFloat(split[39]);
    let cutterfaceVFDFrequency = parseFloat(split[39]);
    let waterVFDFrequency = parseFloat(split[40]);
    let connected = false;
    let tbmStatus = "IDLE";

    let splitData = {
        "state": state,
        "temp1": temp1,
        "temp2": temp2,
        "temp3": temp3,
        "temp4": temp4,
        'stringPot' : stringPot,
        'flowMeter' : flowMeter,
        'eboxDoor' : eboxDoor,
        'onePhaseCT1' : onePhaseCT1,
        'onePhaseCT2' : onePhaseCT2,
        'onePhaseCT3' : onePhaseCT3,
        'pressureTrans1' : pressureTrans1,
        'pressureTrans2' : pressureTrans2,
        'pressureTrans3' : pressureTrans3,
        'pressureTrans4' : pressureTrans4,
        'pressureTrans5' : pressureTrans5,
        'hpuState' : hpuState,
        'pnematicState' : pnematicState,
        'cycles' : cycles,
        'reedSwitchTBM' : reedSwitchTBM,
        'gasSensor' : gasSensor,
        'tbmTemp1' : tbmTemp1,
        'tbmTemp2' : tbmTemp2,
        'tbmTemp3' : tbmTemp3,
        'tbmTemp4' : tbmTemp4,
        'linAct1' : linAct1,
        'linAct2' : linAct2,
        'linAct3' : linAct3,
        'linAct4' : linAct4,
        'linAct5' : linAct5,
        'linAct6' : linAct6,
        'highPressureState' : highPressureState,
        'rpmSensor' : rpmSensor,
        'gyroscopePitch' : gyroscopePitch,
        'gyroscopeYaw' : gyroscopeYaw,
        'cutterfaceState' : cutterfaceState,
        'highVolWaterPumpState' : highVolWaterPumpState,
        'cutterfaceVFDErrorCode' : cutterfaceVFDErrorCode,
        'waterVFDErrorCode' : waterVFDErrorCode,
        'cutterfaceVFDCurrent' : cutterfaceVFDCurrent,
        'waterVFDCurrent' : waterVFDCurrent,
        'cutterfaceVFDFrequency' : cutterfaceVFDFrequency,
        'waterVFDFrequency' : waterVFDFrequency,
        'connected' : connected,
        'tbmStatus': tbmStatus
    }


    return splitData;
}

