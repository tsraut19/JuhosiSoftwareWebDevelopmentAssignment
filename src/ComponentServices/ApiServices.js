import axios from "axios";
const LOGIN_URL = "http://localhost:8585/user/login";
const FORM_URL = "http://localhost:8585/data/add";


//--------- user login details ----------
export async function getLoginDetails(formValues) {
    return axios.get(LOGIN_URL, formValues);
  }

//--------- userForm ----------
export async function submitForm(formData) {
  return axios.post(FORM_URL, formData);
}