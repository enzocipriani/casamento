// video.js
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

function uploadVideoToFirebase(blob) {
    // Substitua pelos detalhes da sua configuração do Firebase
    var firebaseConfig = {
        apiKey: "YOUR_API_KEY",
        authDomain: "YOUR_AUTH_DOMAIN",
        projectId: "YOUR_PROJECT_ID",
        storageBucket: "YOUR_STORAGE_BUCKET",
        messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
        appId: "YOUR_APP_ID",
        measurementId: "YOUR_MEASUREMENT_ID"
    };
    
    // Inicialize o Firebase
    firebase.initializeApp(firebaseConfig);

    // Carregar o vídeo no Firebase Storage
    var storageRef = firebase.storage().ref();
    var videoRef = storageRef.child('videos/' + new Date().toISOString() + '.mp4');
    var uploadTask = videoRef.put(blob);

    uploadTask.on('state_changed', 
        function(snapshot) {
            // Observe state change events such as progress, pause, and resume
        }, 
        function(error) {
            console.error('Erro ao fazer upload do vídeo: ', error);
        }, 
        function() {
            uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
                console.log('Vídeo disponível em: ', downloadURL);
                alert('Vídeo enviado com sucesso!');
            });
        }
    );
}
