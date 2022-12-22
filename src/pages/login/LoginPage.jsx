import { useState } from "react";
/* import { useDispatch, useSelector } from "react-redux"; */
import { useNavigate } from "react-router-dom";
/* import Toast from "../../../components/Toast/Toast"; */
/* import { removeToast, showToast } from "../../../Redux/Reducers/toastSlice"; */
import './loginPage.scss'

export default function () {
  const navigate = useNavigate()
  const [user, setUser] = useState({
    email: "quangphi@gmail.com",
    password: "123456",
  });

  const [email, setEmail] = useState('quangphi@gmail.com');
  const [password, setPassword] = useState('123456');
  /* const toastState = useSelector(state => state.toast)
  const dispath = useDispatch() */

  const checkLogin = (e) => {
    e.stopPropagation()
    if (email === user.email && password === user.password) {
      navigate('/dashboard')
      return
    }
    /* dispath(
      showToast(
        {
          type: "error",
          title: "Failed !!",
          message: " Email or Password wrong !!",
        }
      )
    )
    const timeShow = setTimeout(() => {
      dispath(removeToast());
    }, 3000); */
  }
  return (
    <div className="login">
      {/* <Toast /> */}
      <div className="login-wraper">

        <h2> ADMIN </h2>

        <form action="">
          <span>username</span>
          <input onChange={(e) => setEmail(e.target.value)} value={email} type="text" class="text" name="username" />
          <br />

          <br />

          <span>password</span>
          <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" class="text" name="password" />

          <br />
        </form>
        <button onClick={checkLogin} class="signin">
          Sign In
        </button>

        <a href="#">Forgot Password?</a>
      </div>
    </div>
  );
}
