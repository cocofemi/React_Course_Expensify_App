import * as firebase from 'firebase';
// import firebase from 'firebase/app';
// import 'firebase/database';

 // Initialize Firebase
const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_ID,
  };

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default};

//Child_Remove

// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key(), snapshot.val())
// });

// //child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key(), snapshot.val())
// });

// //child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key(), snapshot.val())
// });

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//           id: childSnapshot.key(),
//           ...childSnapshot.val()
//         });
//     });

//     console.log(expenses);
// })

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key(),
//         ...childSnapshot.val()
//         });
//     });

//     console.log(expenses);
// })
  


// database.ref('expenses').push({
//   description: 'Rent Bill',
//   amount: 500,
//   createdAt: 1000,
//   note: 'Rent for the month of october'
// });

// database.ref('expenses').push({
//   description: 'Phone Bill',
//   amount: 3525,
//   createdAt: 65723849,
//   note: 'Phone bill for the month of october'
// });

// database.ref('expenses').push({
//   description: 'Light Bill',
//   amount: 25098,
//   createdAt: 3784433,
//   note: 'Light bill for the month of october'
// });
// database.ref('notes').push({
//   title: 'To do ',
//   body: 'Went for a run'
// });

// database.ref().on('value', (snapshot) => {
//    const val = snapshot.val();
//    console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// }, (e) => {
//    console.log('Error fetching data', e);
// });

// setTimeout(() => {
//    database.ref('job/company').set('Accenture');
// }, 3000)

// const onValueChange = database.ref().on('value', (snapshot) => {
//    console.log(snapshot.val());
// }, (e) => {
//    console.log('Error fetching data', e);
// });

// setTimeout(() => {
//    database.ref('age').set(26);
// }, 3500)

// setTimeout(() => {
//    database.ref('age').off(onValueChange);
// }, 3500)

// setTimeout(() => {
//    database.ref('age').set(26);
// }, 3500)

// database.ref('location/city')
//    .once('value').then((snapshot) => {
//          const val = snapshot.val()
//          console.log(val);
//    }).catch((e) => {
//       console.log('Error fetching data', e)
//    })

// database.ref().set({
//  	name: 'Femi O',
//  	age: 24,
//    stressLevel: 6,
//  	job: {
//       title: 'Software Developer',
//       company: 'Accenture'
//    },
//  	location: {
//  		city: 'London',
//  		country: 'United Kingdom'
//  	}
//  }).then(() => {
//    console.log('Data was saved');
//  }).catch((e) => {
//    console.log('This failed.', e);
//  })

// database.ref().update({
//    stressLevel: 9,
//    'job/company': 'Amazon',
//    'location/city': 'Seattle'
// });

// // database.ref('isSingle').remove().then(() => {
// //    console.log('Remove succeded')
// // }).catch((e) => {
// //    console.log('Something went wrong', e)
// // });


// // database.ref('age').set(25);
// // database.ref('location/city').set('Paolo Alto');

// // database.ref('attributes').set({
// // 	height: '6,2',
// // 	weight: '85kg'
// // }).then(() => {
// //    console.log('Data was saved!');
// // }).catch((e) => {
// //    console.log('This failed.', e);
// // })