import { db_firebase, doc, getDoc, collection } from '../../../config.js'


const activityList = document.querySelector('#activityList');

// Retrieve the array of strings
async function getEventArray() {
    const docRef = doc(db_firebase, 'gymEvents', 'events');
    const docSnap = await getDoc(docRef);
  
    if (docSnap.exists()) {
      const data = docSnap.data();
      const eventArray = data.event; // Assuming the array is stored under the key 'event'
        // Iterate through the array of strings
        for (const event of eventArray) {
            const newli = document.createElement('li');
            newli.textContent = event;
            activityList.appendChild(newli);
            console.log(event); // Print each string in the array
        }
    } else {
      console.log('No such document!');
    }
  }
  getEventArray();



const makeRequest_btn = document.querySelector('#makeRequest_btn');
makeRequest_btn.addEventListener('click', () => {
    const newli = document.createElement('li');

    const activity = document.querySelector('#activity');
    const time_start = document.querySelector('#time_start');
    const time_end = document.querySelector('#time_end');
    newli.textContent = activity.value + ' at ' + formatTime12Hour(time_start.value) + ' - ' + formatTime12Hour(time_end.value);
    activityList.appendChild(newli);
});

function formatTime12Hour(time24) {
    const [hours, minutes] = time24.split(':');
    let hours12 = parseInt(hours, 10);
    const ampm = hours12 >= 12 ? 'PM' : 'AM';
  
    hours12 = hours12 % 12;
    hours12 = hours12 ? hours12 : 12; // 0 should be converted to 12
  
    return `${hours12}:${minutes} ${ampm}`;
  }