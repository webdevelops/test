const key = 'AIzaSyCpUApD9K5SMQxiiDCLUIvnbclYf1yiyVc';
const signUpURL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${key}`;
const signInURL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${key}`;

export const authApi = async (email, password, isLogin) => {
  const url = isLogin ? signInURL : signUpURL;
  const authData = {
    email,
    password,
    returnSecureToken: true
  };

  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(authData),
    headers: {
      "Content-Type": "application/josn"
    }
  });

  const data = await response.json();
  console.log("TCL: authApi!!! -> data", data);

  const expirationDate = new Date(new Date().getTime() + data.expiresIn * 1);
  
  localStorage.setItem('token', data.idToken);
  localStorage.setItem('user', data.localId);
  localStorage.setItem('expirationDate', expirationDate);
  
  if (data.error) {
    return data;
  }

  return {
    idToken: data.idToken,
    expiresIn: data.expiresIn
  };
};