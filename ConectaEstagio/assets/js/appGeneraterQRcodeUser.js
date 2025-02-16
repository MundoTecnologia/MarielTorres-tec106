function GeneraterQRcodeUser() {
    const workLinkBD = JSON.parse( localStorage.getItem('workLinkBD') )

    const { online, careers, users } = workLinkBD

    function generateQRCode(obj) {
        const jsonString = JSON.stringify(obj); // Converte o objeto em string JSON
        const qrcodeContainer = document.getElementById('Qrcode-profile');
        qrcodeContainer.innerHTML = ""; // Limpa o conteúdo anterior

        const QrcodeI = new QRCode(qrcodeContainer, {
            text: obj,
            width: 256,
            height: 256,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });

        return QrcodeI.children[0]
    }
    
    // Gerar o código QR para o objeto user
    let auxQRCode = generateQRCode(online);

    console.log(online);

}