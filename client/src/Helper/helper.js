import jwt_decode from 'jwt-decode';

import baseUrl from "../Apis/baseUrl";



export function logoutUser(){
  localStorage.removeItem('token');
}

/** To get username from Token */
export async function getUsername(){
  const token = localStorage.getItem('token')
  if(!token) return Promise.reject("Cannot find Token");
  let decode = jwt_decode(token)
  return decode;
}

/**Authentication */
export async function authenticate(username) {
  try {
    const result = await baseUrl.post('/authenticate', { username })
    console.log(result)
    return result;
} catch (error) {
  console.log(error);
    return { error : error}
}
}

/**Get user */
export async function getUser({ username }) {
  try {
    const { data } = baseUrl.get(`/${username}`);
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
    } = await baseUrl.post("/register", credentials);
    let { username, email } = credentials;
    console.log(username, email)

    /* Send email */
    if (status === 201) {
      
    }
    return Promise.resolve(msg);
  } catch (error) {

  }
}

export async function registerUserMail(credentials){
  const {
    data: { msg },
    status,
  } =await baseUrl.post("/sendMail", {
    username:credentials.username,
    userEmail: credentials.email,
    text: "",
  });
}

/**Login user */
export async function verifyPassword({ username, password }) {
  try {
    if (username) {
      const { data } = await baseUrl.post("/login", { username, password });
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
    } = await baseUrl.get("/generateOTP", { params: { username } });

    //Send mail with OTP
    if (status === 201) {
      let {
        data: { email },
      } = await getUser({ username });
      let text = `Your Password Recovery OTP is ${code}. Verify and recover your password.`;
      await baseUrl.post("/registerMail", {
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
