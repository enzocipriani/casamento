document.getElementById('recordButton').addEventListener('click', async () => {
    const constraints = { video: true };
    const video = document.getElementById('videoPreview');

    try {
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        video.srcObject = stream;

        const mediaRecorder = new MediaRecorder(stream);
        const chunks = [];

        mediaRecorder.ondataavailable = function(e) {
            chunks.push(e.data);
        };

        mediaRecorder.onstop = function(e) {
            const blob = new Blob(chunks, { 'type': 'video/mp4;' });
            const videoURL = URL.createObjectURL(blob);
            video.src = videoURL;

            document.getElementById('uploadButton').style.display = 'block';
            document.getElementById('uploadButton').addEventListener('click', () => {
                uploadVideoToFirebase(blob);
            });
        };

        mediaRecorder.start();

        setTimeout(() => {
            mediaRecorder.stop();
            stream.getTracks().forEach(track => track.stop());
        }, 5000); // grava por 5 segundos
    } catch (err) {
        console.error('Erro ao acessar a câmera: ', err);
    }
});
