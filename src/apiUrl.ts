export const getApiUrl = () => {
    const isLocalHost = window.location.hostname === 'localhost';
    return isLocalHost ? 'http://localhost:8080' : "https://audioinsightsservice-ccaraubsgueteaap.centralus-01.azurewebsites.net";
}

