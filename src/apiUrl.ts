export const getApiUrl = () => {
    const isLocalHost =  import.meta.env.MODE === 'development';
    return isLocalHost ? 'http://localhost:8080' : "https://audioinsightsservice-ccaraubsgueteaap.centralus-01.azurewebsites.net";
}

