// Main.js

import { firestore } from '../../utils'

    

  async function getPostDB() {
    let postDB = firestore.collection("posts");
    let postCollection = {};
    let query = await postDB.get()
      .then(snapshot => {
          if (snapshot.empty) {
            
            return;
          }  
          
          
          snapshot.forEach(doc => {
            let data = doc.data();
            postCollection[doc.id] = {
              id: doc.id,
              body: data.body,
              ticker: data.ticker,
              image: data.img
          }
        });
    })
  .catch(err => {
    
  });


  return postCollection;
}
  

  export async function loadTrending() {
    let postings = await getPostDB();
    for (var key of Object.keys(postings)) {
      let {id,...posting} = postings[key];

      firestore.collection("trends").doc().set(posting)
    }
  }

