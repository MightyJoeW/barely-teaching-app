import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyDvOMxKl4sEHS9rofJLIHQgBXB0qSEWGXI",
  authDomain: "barely-teaching-app.firebaseapp.com",
  databaseURL: "https://barely-teaching-app.firebaseio.com",
  projectId: "barely-teaching-app",
  storageBucket: "barely-teaching-app.appspot.com",
  messagingSenderId: "234505832277"
};

firebase.initializeApp(config);

const database = firebase.database();

//child_removed
database.ref("reports").on("child_removed", snapshot => {
  console.log(snapshot.key, snapshot.val());
});

//child_changed
database.ref("reports").on("child_changed", snapshot => {
  console.log(snapshot.key, snapshot.val());
});

//child_added
database.ref("reports").on("child_added", snapshot => {
  console.log(snapshot.key, snapshot.val());
});

// database
//   .ref("reports")
//   .once("value")
//   .then(snapshot => {
//     const reports = [];

//     snapshot.forEach(childSnapshot => {
//       reports.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(reports);
//   });

// database.ref("reports").on("value", snapshot => {
//   const reports = [];

//   snapshot.forEach(childSnapshot => {
//     reports.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   console.log(reports);
// });

database.ref("reports").push({
  student_name: "Joe",
  period: 1,
  createdAt: 1000,
  note: "Good"
});

// database.ref("notes/-L-KcJkET3ShzlZcfCFN").remove();

// database.ref("notes").push({
//   title: "Course Topics",
//   body: "React, Angular, Python"
// });

// database.ref().on("value", snapshot => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// });

// database
//   .ref("location/city")
//   .once("value")
//   .then(snapshot => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch(e => {
//     console.log("Error fetching data", e);
//   });

// database
//   .ref()
//   .set({
//     name: "Joe Warren",
//     age: 29,
//     stressLevel: 6,
//     job: {
//       title: "Software developer",
//       company: "Nudle"
//     },
//     location: {
//       city: "Dallas",
//       country: "United States"
//     }
//   })
//   .then(() => {
//     console.log("Data is saved!");
//   })
//   .catch(e => {
//     console.log("This failed.", e);
//   });
// database.ref().update({
//   stressLevel: 9,
//   "job/company": "Amazon",
//   "location/city": "Seattle"
// });

// database.ref("isSingle").set(null);

// database
//   .ref("isSingle")
//   .remove()
//   .then(() => {
//     console.log("Data was removed");
//   })
//   .catch(e => {
//     console.log("Did not remove data", e);
//   });
