const telPattern =
  /^(\+\d{1,4})?[- .()/]*\d{1,4}[- .()/]*\d{1,4}[- .()/]*\d{1,4}[- .()/]*\d{1,9}[- .()/]*\d{0,9}$/;
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
export const validateForm = (formData) => {
  if (!formData.name) {
    showGeneralModal("Kérem adja meg a teljes nevét!");
    return false;
  } else if (!formData.tel) {
    showGeneralModal("Kérem adja meg a telefonszámát!");
    return false;
  } else if (!formData.email) {
    showGeneralModal("Kérem adja meg az email címét!");
    return false;
  } else if (!telPattern.test(formData.tel)) {
    showGeneralModal("Érvénytelen a telefonszám!");
    return false;
  } else if (!emailPattern.test(formData.email)) {
    showGeneralModal("Érvénytelen email!");
    return false;
  }
  else if (!formData.check) {
    showGeneralModal("Kérem, fogadja el az adatvédelmi nyilatkozatunkat!");
    return false;
  }
  return true;
};
