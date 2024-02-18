export const myAddGeneral = async (categoryName, elementName, formData) => {
 
    const { name, ...dataToStore } = formData;
  
    const docRef = elementName
      ? doc(db, categoryName, elementName)
      : doc(collection(db, categoryName));
  
    await setDoc(docRef, dataToStore);
  };
  