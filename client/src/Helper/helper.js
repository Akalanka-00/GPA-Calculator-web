import axios from 'axios';
//import jwt_decode from 'jwt-decode';

axios.defaults.baseURL = process.env.REACT_APP_SERVER_DOMAIN;



/**Authentication */
export async function authenticate(username) {
  try {
    return await axios.post('/authenticate', { username })
} catch (error) {
    return { error : "Username doesn't exist...!"}
}
}

/**Get user */
export async function getUser({ username }) {
  try {
    const { data } = axios.get(`/${username}`);
    return { data };
  } catch (error) {
    return { error: "password doesn't matched...!" };
  }
}

/**Register user */
export async function registerUser(credentials) {
  try {
    const {
      data: { msg },
      status,
    } = await axios.post("/register", credentials);
    let { username, email } = credentials;

    /* Send email */
    if (status === 201) {
      await axios.post("/registerMail", {
        username,
        userEmail: email,
        text: msg,
      });
    }
    return Promise.resolve(msg);
  } catch (error) {}
}

/**Login user */
export async function verifyPassword({ username, password }) {
  try {
    if (username) {
      const { data } = await axios.post("/login", { username, password });
      return Promise.resolve({ data });
    }
  } catch (error) {
    return Promise.reject({ error: "Password doesn't Match...!" });
  }
}

/** Generate OTP */

export async function generateOTP(username) {
  try {
    const {
      data: { code },
      status,
    } = await axios.get("/generateOTP", { params: { username } });

    //Send mail with OTP
    if (status === 201) {
      let {
        data: { email },
      } = await getUser({ username });
      let text = `Your Password Recovery OTP is ${code}. Verify and recover your password.`;
      await axios.post("/registerMail", {
        username,
        userEmail: email,
        text: text,
        subject : "Password Recovery OTP"
      });
    }
    return Promise.resolve(code);

  } catch (error) {
    return Promise.reject({ error });
  }
}
