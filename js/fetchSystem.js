async function fetchSystemInfo() {
    try {
        //api request
        const response = await fetch('http://localhost:3000/api/system-info');
        const data = await response.json();

        // 데스크탑 앱 상의 로컬 스토리지에 저장
        localStorage.setItem('cpu', data.cpu);
        localStorage.setItem('gpu', data.gpu);
        localStorage.setItem('ram', data.ram);
        localStorage.setItem('deviceId', data.deviceId);

        // 페이지에 표시
        document.getElementById('cpu').innerText = localStorage.getItem('cpu');
        document.getElementById('gpu').innerText = localStorage.getItem('gpu');
        document.getElementById('ram').innerText = localStorage.getItem('ram');
        document.getElementById('deviceId').innerText = localStorage.getItem('deviceId');
        
        alert('[SUCCESS] : 하드웨어 정보를 성공적으로 불러왔습니다.');
    } catch (error) {
        alert('[Failed] : 하드웨어 정보를 불러오는데 실패했습니다.', error);
    }
}