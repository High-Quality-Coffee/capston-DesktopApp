const { app, BrowserWindow } = require("electron"); 
const si = require('systeminformation');
const { networkInterfaces } = require('os');
const express = require('express');
const cors = require('cors');
const app1 = express();
const PORT = 3000;

//데스크탑 앱 create
const createWindow = () => {
    const window = new BrowserWindow({
        width: 900,
        height: 600, 
    });
    //데스크탑앱에 index.html로 화면 열기
    window.loadFile("index.html");

    //ctrl+shift+i 로 개발자 도구 열기(윈도우 환경)
    mainWindow.webContents.openDevTools();
};

//클라이언트 url 코스 open
app1.use(cors({ 
    origin: 'https://lustrous-starburst-fc4ad8.netlify.app'
}));

//하드웨어 정보 응답 api
app1.get('/api/system-info', async (req, res) => {
    try {
        //하드웨어 정보
        const cpu = await si.cpu();
        const graphics = await si.graphics();
        const memoryLayout = await si.memLayout(); // RAM 상세 정보

        // MAC 주소를 Device ID로 사용
        const interfaces = networkInterfaces();
        const macAddress = Object.values(interfaces)
            .flat()
            .find(details => details && details.mac && details.mac !== '00:00:00:00:00:00');
        const deviceId = macAddress ? macAddress.mac : "Device ID not found";

        //json으로 전달
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


//서버 실행
app1.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

//electron으로 데스크탑 윈도우 생성
app.whenReady().then(() => {
    createWindow();
});