import { storage, ref, uploadBytes, getDownloadURL } from './firebaseConfig.js';

document.getElementById('recordButton').addEventListener('click', () => {
    document.getElementById('videoInput').click();
});

document.getElementById('videoInput').addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        const video = document.getElementById('videoPreview');
        video.src = URL.createObjectURL(file);
        video.style.display = 'block';
        document.getElementById('uploadButton').style.display = 'block';
        document.getElementById('uploadButton').onclick = () => {
            uploadVideoToFirebase(file);
        };
    }
});

async function uploadVideoToFirebase(file) {
    try {
        console.log('Iniciando upload do vídeo');
        document.getElementById('loader').style.display = 'block'; // Mostra o loader durante o upload
        const storageRef = ref(storage, 'videos/' + new Date().toISOString() + '.' + file.name.split('.').pop());
        const uploadTaskSnapshot = await uploadBytes(storageRef, file);
        document.getElementById('loader').style.display = 'none'; // Esconde o loader após o upload
        alert('Vídeo enviado com sucesso!');
    } catch (error) {
        alert('Erro ao fazer upload do vídeo.');
        document.getElementById('loader').style.display = 'none'; // Em caso de erro, esconde o loader também
    }
}
