// import React , { useState, useMemo, useContext, createContext } from 'react'
// import Cookies from 'js-cookie'
// import { useNavigate } from 'react-router-dom'
// const UserAuthContext = createContext()

// export const UserAuthContextProvider = ({ children }) => {
//     const [user, setUser] = useState();
//  //   const [password, setPassword] = useState('')
//     const [loading, setLoading] = useState(false)
//     const [errors, setErrors] = useState({})

//     const  clogin = async ({ username,password } ) => {

//      try {
//       setLoading(true)
//       setErrors({})
//       const body = {
//         username,
//         password,
//       }
//       const response = await fetch(`http://ultraboost.sandbox.com.np/api/v1/users/login/`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'X-CSRFToken': Cookies.get('csrftoken'),
//         },
//         body: JSON.stringify(body),
//       })
      
//       setUser(username)
//     //   userAuth.clogin(username);
//     //   console.log('username' , userAuth.clogin(username));
  
//     //   if (response.ok) {
//     //     navigate('/dashboard')
//     //     return false;
//         /*
//         const data = await response.json()
//         console.log(data)
//         if (data.user) {
//           navigate('/dashboard/');
//           setLoading(false);
//           return false;
//         } else {
//           setErrors(data);
//           setLoading(false);
//           return true;
//         }*/
//     //   }
//     //   const json = await response.json()
//     //   setErrors(json)
//     } catch (reason) {
//       console.log(reason)
//     } finally {
//       setLoading(false)
//     }

//     }
//     const clogout = () => {
//         setUser(null)
//     }
 
//     // const contextValue = useMemo(()=> ({
//     //     user,
//     //     clogin,
//     //     clogout,
//     // }), [user]);

//     return (
//     <UserAuthContext.Provider value = {{ user , clogin , clogout }}>{ children }</UserAuthContext.Provider>
//     )
// }

// export const useUserAuthContext = () => {
//     return useContext(UserAuthContext)
// }
