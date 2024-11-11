const { app, BrowserWindow } = require("electron"); 
const si = require('systeminformation');
const { networkInterfaces } = require('os');
const express = require('express');
const app1 = express();
const PORT = 3000;

const createWindow = () => {
    const window = new BrowserWindow({
        width: 900,
        height: 600, 
    });
    window.loadFile("index.html");
};

app1.get('/api/system-info', async (req, res) => {
    try {
        const cpu = await si.cpu();
        const graphics = await si.graphics();
        const memory = await si.mem();
        const memoryLayout = await si.memLayout(); // RAM 상세 정보

        // MAC 주소를 Device ID로 사용
        const interfaces = networkInterfaces();
        const macAddress = Object.values(interfaces)
            .flat()
            .find(details => details && details.mac && details.mac !== '00:00:00:00:00:00');
        const deviceId = macAddress ? macAddress.mac : "Device ID not found";

        const systemInfo = {
            cpu: `${cpu.manufacturer} ${cpu.brand}`,
            gpu: graphics.controllers.map((gpu) => `${gpu.vendor} ${gpu.model}`).join(', '),
            ram: memoryLayout.map((ram) => `${ram.manufacturer} ${ram.type} ${Math.round(ram.size / (1024 ** 3))}GB`).join(', '),
            deviceId: deviceId
        };

        res.json(systemInfo);
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving system information' });
    }
});

app1.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

app.whenReady().then(() => {
    createWindow();
});