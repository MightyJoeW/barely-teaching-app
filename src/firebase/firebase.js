import * as firebase from "firebase";

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// //child_removed
// database.ref("reports").on("child_removed", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// //child_changed
// database.ref("reports").on("child_changed", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// //child_added
// database.ref("reports").on("child_added", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// // database
// //   .ref("reports")
// //   .once("value")
// //   .then(snapshot => {
// //     const reports = [];

// //     snapshot.forEach(childSnapshot => {
// //       reports.push({
// //         id: childSnapshot.key,
// //         ...childSnapshot.val()
// //       });
// //     });
// //     console.log(reports);
// //   });

// // database.ref("reports").on("value", snapshot => {
// //   const reports = [];

// //   snapshot.forEach(childSnapshot => {
// //     reports.push({
// //       id: childSnapshot.key,
// //       ...childSnapshot.val()
// //     });
// //   });
// //   console.log(reports);
// // });

// database.ref("reports").push({
//   student_name: "Joe",
//   period: 1,
//   createdAt: 1000,
//   note: "Good"
// });

// // database.ref("notes/-L-KcJkET3ShzlZcfCFN").remove();

// // database.ref("notes").push({
// //   title: "Course Topics",
// //   body: "React, Angular, Python"
// // });

// // database.ref().on("value", snapshot => {
// //   const val = snapshot.val();
// //   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// // });

// // database
// //   .ref("location/city")
// //   .once("value")
// //   .then(snapshot => {
// //     const val = snapshot.val();
// //     console.log(val);
// //   })
// //   .catch(e => {
// //     console.log("Error fetching data", e);
// //   });

// // database
// //   .ref()
// //   .set({
// //     name: "Joe Warren",
// //     age: 29,
// //     stressLevel: 6,
// //     job: {
// //       title: "Software developer",
// //       company: "Nudle"
// //     },
// //     location: {
// //       city: "Dallas",
// //       country: "United States"
// //     }
// //   })
// //   .then(() => {
// //     console.log("Data is saved!");
// //   })
// //   .catch(e => {
// //     console.log("This failed.", e);
// //   });
// // database.ref().update({
// //   stressLevel: 9,
// //   "job/company": "Amazon",
// //   "location/city": "Seattle"
// // });

// // database.ref("isSingle").set(null);

// // database
// //   .ref("isSingle")
// //   .remove()
// //   .then(() => {
// //     console.log("Data was removed");
// //   })
// //   .catch(e => {
// //     console.log("Did not remove data", e);
// //   });
