import { app } from "./firebaseConfig.js";
import { getDatabase, set, ref, onValue } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-database.js";

const database = getDatabase(app);

const invitesRef = ref(database, 'invites');

const button = document.getElementById('button');

var invitesData;
var confirmedData;

onValue(ref(database, 'invites/'), (snapshot) => {
    invitesData = snapshot.val();
    console.log(invitesData);
});
onValue(ref(database, 'confirmados/'), (snapshot) => {
    confirmedData = snapshot.val();
    console.log(confirmedData);
});

button.addEventListener('click', function() {
    
    const name = document.getElementById('name').value;
    const lastname = document.getElementById('lastname').value;
    const tel = document.getElementById('tel').value;
    const uid = document.getElementById('uid').value;
    const getName = name.toLowerCase();

    const inviteName = invitesData[uid];
    const confirmedNumber = confirmedData[uid];

    if(inviteName == getName) {

        if(confirmedNumber !== undefined) {

            alert('CONVITE JÁ CONFIRMADO!')

        } else {
            
            alert('VOCÊ FOI CONFIRMADO!')
            //set(ref(database, 'confirmados/' + uid), name + ' ' + lastname);
            set(ref(database, 'confirmados/' + uid), {
                convidado: name + ' ' + lastname,
                telefone: tel,
                convite: uid
            });

        }

    } else {

        alert('CONVITE INVÁLIDO!')

    }

});