const telPattern =
  /^(\+\d{1,4})?[- .()/]*\d{1,4}[- .()/]*\d{1,4}[- .()/]*\d{1,4}[- .()/]*\d{1,9}[- .()/]*\d{0,9}$/;
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
export const validateForm = (formData, setError, setLocalItem) => {
  if (!formData.name) {
    //showGeneralModal("Kérem adja meg a teljes nevét!");
    setError((prevItem) => ({
      ...prevItem,
      name: "Kérem adja meg a teljes nevét!",
    }));
    setLocalItem((prevItem) => ({
      ...prevItem,
      name: "",
    }));
    return false;
  } else if (!formData.tel) {
    setError((prevItem) => ({
      ...prevItem,
      tel: "Kérem adja meg a telefonszámát!",
    }));
    setLocalItem((prevItem) => ({
      ...prevItem,
      tel: "",
    }));
    return false;
  } else if (!formData.email) {
    setError((prevItem) => ({
      ...prevItem,
      email: "Kérem adja meg az email címét!",
    }));
    setLocalItem((prevItem) => ({
      ...prevItem,
      email: "",
    }));
    return false;
  } else if (!telPattern.test(formData.tel)) {
    setError((prevItem) => ({
      ...prevItem,
      tel: "Érvénytelen a telefonszám!",
    }));
    setLocalItem((prevItem) => ({
      ...prevItem,
      tel: "",
    }));
    return false;
  } else if (!emailPattern.test(formData.email)) {
    setError((prevItem) => ({
      ...prevItem,
      email: "Érvénytelen email!",
    }));
    setLocalItem((prevItem) => ({
      ...prevItem,
      email: "",
    }));
    return false;
  } else if (!formData.check) {
    setError((prevItem) => ({
      ...prevItem,
      check: "Kérem, fogadja el az adatvédelmi nyilatkozatunkat!",
    }));
    return false;
  }
  return true;
};
