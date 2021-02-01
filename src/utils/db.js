import firebase from "gatsby-plugin-firebase"

const firestore = firebase.firestore();

export function createUser(uid, data, defaultPhotoUrl, userEvents) {
  return firestore
    .collection('users')
    .doc(uid)
    .set({ uid, ...data, defaultPhotoUrl, userEvents }, { merge: true });
}


export async function createPublicUser(uid, displayName, defaultPhotoUrl) {
 const docRef= await firestore
    .collection('publicusers')
    .doc(uid).get()

    if(!docRef.exists)
    {
    firestore
    .collection('publicusers')
    .doc(uid).set({ avatarUrl:defaultPhotoUrl ,name:displayName, bio:"", mySkills:"", lookingFor:"", interests:"", events:[]}, { merge: true });
    }
    

}


export async function getPublicUser(uid) {
    const doc = await firestore.collection('publicusers').doc(uid).get()
    const site = {  ...doc.data() };

    return site ;
  
}





export function updatePublicUser(uid, name, bio, mySkills, interests,  lookingFor) {
 const docRef= firestore
    .collection('publicusers')
    .doc(uid)

    
    docRef.set({ name:name, bio:bio, mySkills:mySkills, interests:interests, lookingFor:lookingFor},{ merge: true });
    
    return docRef;
}

 


export function addUserToEvent(data) {
 return  firestore
    .collection('events')
    .doc("Event1").set(data, { merge: true });
 
}

export function deleteUserFromEvent(datadel) {
 return  firestore
    .collection('events')
    .doc("Event1").update( {[datadel] : firebase.firestore.FieldValue.delete()});
 
}

 

export async function getEvent(uid) {
const getEventref= await firestore.collection('publicusers').where(firebase.firestore.FieldPath.documentId(), '==', `${uid}`).get();
return getEventref;
}




 



export async function eventUser(id) { 
const doc = await firestore.collection("publicusers").where("events", "array-contains", `${id}`).get()
return doc;
}


 

export async function addEvent(uid, id) { 

var eventRef = firestore.collection("publicusers").doc(uid);
eventRef.update({
    events: firebase.firestore.FieldValue.arrayUnion(`${id}`)
});


}

export async function removeEvent(uid, id) { 

var eventRef = firestore.collection("publicusers").doc(uid);
eventRef.update({
    events: firebase.firestore.FieldValue.arrayRemove(`${id}`)
});


}
