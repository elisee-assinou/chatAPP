import {Firestore, collection, doc, getDocs, addDoc, updateDoc, deleteDoc, getDoc} from '@angular/fire/firestore';

export  class FirebaseMessageDatasource {
  constructor(private firestore:Firestore) { }

  /**
   * function to get all messages
   * @returns a promise of an array of messages
   */

  async getAllMessages():Promise <any[]>{
    const snapshot = await getDocs(collection(this.firestore,'messages'));
    return snapshot.docs.map(doc =>{
      const data = doc.data();
      return data;
    });
  }

  /**
   * function to add a message
   * @param message
   */

  async addMessage(message: any): Promise<any> {
    await addDoc(collection(this.firestore, 'messages'), { ...message });
    return message;
  }

  /**
   * function to update a message
   * @param id
   * @param message
   */

  async updateMessage(id: string, message: any):Promise<any> {
    await updateDoc(doc(this.firestore, 'messages', id), { ...message });
    return message;
  }

  /**
   * function to delete a message
   * @param id
   */

  async deleteMessage(id: string):Promise<any> {
    const docRef = doc(this.firestore, 'messages', id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      await deleteDoc(docRef);
      return data;
    } else {
      throw new Error('No such document!');
      //return null;
    }
  }
}
