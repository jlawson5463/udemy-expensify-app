import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBuSkpjVW_9Pa1aRI5ZldYR9ymGlUhfEM4",
  authDomain: "expensify-52be9.firebaseapp.com",
  databaseURL: "https://expensify-52be9.firebaseio.com",
  projectId: "expensify-52be9",
  storageBucket: "expensify-52be9.appspot.com",
  messagingSenderId: "900522076511"
};
firebase.initializeApp(config);

const db = firebase.database();

db.ref('expenses').on('child_removed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
})

db.ref('expenses').on('child_changed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
})

db.ref('expenses').on('child_added', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
})

db.ref('expenses').push({
  description: 'Fish food',
  amount: 500,
  note: ''
});

// db.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach(childSnapshot => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       })
//     });
//     console.log(expenses)
//   });


// db.ref('expenses')
//   .on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach(
//       childSnapshot => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       })
//     })
//     console.log(expenses);
//   }, (e) => {
//     console.log('Error fetching expenses data', e)
//   })

// db.ref('notes').push({
//   title: 'To Do',
//   body: 'This is a note'
// });

// db.ref('notes/-LEJoYLXP2pHVvMqLFNl').update({
//   'title': 'New Title 2'
// })

// db.ref('location/city')
//   .once('value')
//   .then((snapshot) => {
//     console.log(snapshot.val())
//   })
//   .catch((e) => {
//     console.log('Error fetching data', e)
//   })

// const onValueChange = db.ref().on('value', (snapshot) => {  // on() is a subscription to the data so runs everytime it updates promises only run a single time so 
//     console.log(snapshot.val());
// }, (e) => {
//   console.log('Error fetching data', e)
// })

// setTimeout(() => {
//    db.ref('age').set(40);
// }, 3500)

// setTimeout(() => {
//   db.ref('age').set(41);
// }, 7000)

// setTimeout(() => {
//   db.ref().off(onValueChange);
// }, 10500 )

// setTimeout(() => {
//   db.ref('age').set(38);
// }, 10500)

// const basicInfo = db.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// }, (e) => {
//   console.log('Error fetching data', e)
// })

// Jane is a software developer at Amazon


// db.ref().set({
//   name: 'Jane Lawson',
//   age: 32,
//   location: {
//     city: 'Manchester',
//     country: 'UK'
//   },
//   stressLevel: 3,
//   numOfChildren: 1,
//   job: {
//     title: 'Software Developer',
//     company: 'Google'
//   }
// }).then(() => {
//   console.log('data saved');
// }).catch((e) => {
//   console.log('This failed', e);
// });

// db.ref('age').set(40);
// db.ref('location').set({
//   city: 'Santa Monica',
//   country: 'USA'
// });

// db.ref('attributes').set({
//   weight: 140,
//   height: 165
// }).then(() => {
//   console.log('my method worked')
// }).catch((e) => {
//   console.log('borked coz:' + e)
// });

// db.ref('attributes/weight').remove()
//   .then(() => {
//     console.log('weight was removed');
//   }).catch((e) => {
//     console.log('did not remove data', e)
//   })

// db.ref('attributes').set(null) // same as removing this property but remove() is way more explicit
//   .then(() => {
//     console.log('attributes were removed')
//   })
//   .catch((e) => {
//     console.log("attributes weren't removed", e)
// })

// db.ref().update({
//   job: 'Manager',
//   'location/city': 'Boston' // update only updates the root so location: { city: 'whatevs' } would have removed country too which we didn't want
// });

// db.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// })

