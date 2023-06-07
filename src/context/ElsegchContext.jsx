import React, { useState } from 'react';
import { toast } from 'react-toastify';
import axios from './../axios.js';
const ElsegchContext = React.createContext();
const initialState = {
  burtgel_Id: null,
  email: null,
  fname: null,
  lname: null,
  rd: null,
  utas: null,
  error: null,
  loading: false,
  saving: false,
  too: 5,
  emailVerified: false,
  mergejils: [],
  approved: false,
  aimag_id: null,
};

export const ElsegchStore = (props) => {
  const [state, setState] = useState(initialState);

  const approveInfo = () => setState({ ...state, approved: true })
  const rememberMe = (butDugaar, EV = false) => {
    setState({ ...state, loading: true });
    if (EV) {
      axios
        .post('/elsegch/remember-me', { butDugaar })
        .then(result => {
          let data = result.data["butDugaar"];
          if (result.data.mergejils[0]?.mergejils) {
            let mergejils = result.data.mergejils[0]?.mergejils.split(',');
            data["mergejils"] = mergejils.map(str => +str);
          }
          if (result.data["too"].length > 0) {
            data["too"] = 5 - result.data.too[0]?.count;
          }
          if (isNaN(data)) {
            setState({ ...state, error: null, loading: false, saving: false, ...data, emailVerified: EV });
          } else {
            setState({
              ...state,
              error: null,
              saving: false,
              loading: false,
              burtgel_Id: data,
            });
          }

        })
        .catch(err => {
          console.log(err);
          let message = err.message;
          if (message === "Request failed with status code 404")
            message = "Уучлаарай сэрвэр дээр энэ өгөгдөл байхгүй байна...";
          else if (message === "Network Error")
            message =
              "Сэрвэр ажиллахгүй байна. Та түр хүлээгээд дахин оролдоно уу.";
          else if (message == "Request failed with status code 500")
            message =
              "Сэрвэр ажиллахгүй байна. Та түр хүлээгээд дахин оролдоно уу.";
          setState({ ...state, loading: false, burtgel_Id: null, saving: false, error: message });
        });
      return;
    }
    axios
      .post('/elsegch/remember-me', { butDugaar })
      .then(result => {
        let data = result.data["butDugaar"];
        if (result.data.mergejils[0]?.mergejils) {
          let array = result.data.mergejils[0]?.mergejils.split(',');
          data["mergejils"] = array;
        }
        if (result.data["too"].length > 0) {
          data["too"] = 5 - result.data.too[0]?.count;
        }
        if (isNaN(data)) {
          setState({ ...state, error: null, loading: false, saving: false, ...data });
        } else {
          setState({
            ...state,
            error: null,
            saving: false,
            loading: false,
            burtgel_Id: data,
          });
        }
      })
      .catch(response => {
        setState({ ...state, loading: false, burtgel_Id: null });
      });
  };

  const googleOAuth = (provider, data, butDugaar) => {
    setState({
      ...state,
      loading: true,
    });

    if (state.email) {
      if (state.email === data.email) {
        setState({
          ...state,
          emailVerified: true,
          saving: false,
          loading: false,
        })
        localStorage.setItem("email", state.email);
        localStorage.setItem("burtgel_Id", state.burtgel_Id);
        localStorage.setItem("EV", true);
        return;
      } else {
        setState({
          ...state,
          error: "Буруу и-мэйл хаяг байна",
          emailVerified: false,
          loading: false,
        })
        return;
      }
    }
    axios.post('/elsegch/google', {
      provider,
      data,
      burtgel_Id: butDugaar,
    }).then((response) => {
      let obj = response.data.data;
      setState({
        ...state,
        burtgel_Id: obj["burtgel_Id"],
        email: obj["email"],
        loading: false,
        saving: false,
        emailVerified: true,
        error: null
      });
      localStorage.setItem("email", obj["email"]);
      localStorage.setItem("burtgel_Id", obj["burtgel_Id"]);
      localStorage.setItem("EV", true);
      rememberMe(obj["burtgel_Id"], true);
    })
      .catch((err) => {
        console.log(err);
        let message = err.message;
        if (message === "Request failed with status code 404")
          message = "Уучлаарай сэрвэр дээр энэ өгөгдөл байхгүй байна...";
        else if (message === "Network Error")
          message =
            "Сэрвэр ажиллахгүй байна. Та түр хүлээгээд дахин оролдоно уу.";
        else if (message == "Request failed with status code 500")
          message =
            "Сэрвэр ажиллахгүй байна. Та түр хүлээгээд дахин оролдоно уу.";

        setState({
          ...state,
          loading: false,
          saving: false,
          error: message,
          emailVerified: false
        });
      });
  };

  const insertMyInfo = (burtgelId, email, ovog, ner, rd, utas, aimag_id) => {
    setState({ ...state, loading: true, saving: false });
    const data = {
      lname: ovog,
      fname: ner,
      email,
      rd,
      utas,
      aimag_id
    }
    axios.patch(`/elsegch/${burtgelId}`, data)
      .then(result => {
        setState({ ...state, loading: false, error: null, fname: ner, lname: ovog, utas, rd, aimag_id, saving: true })
        console.log(result);
        if (result.status === 200 && result.statusText === 'OK') {
          toast("Амжилттай хадгаллаа")
        }
      }).catch(err => {
        console.log(err);
        let message = err.message;
        if (message === "Request failed with status code 404")
          message = "Уучлаарай сэрвэр дээр энэ өгөгдөл байхгүй байна...";
        else if (message === "Network Error")
          message =
            "Сэрвэр ажиллахгүй байна. Та түр хүлээгээд дахин оролдоно уу.";
        else if (message == "Request failed with status code 500")
          message =
            "Сэрвэр ажиллахгүй байна. Та түр хүлээгээд дахин оролдоно уу.";

        setState({ ...state, loading: false, saving: false });
      })
  };

  const choose = (burtgel_Id, mergejilId, ognoo = new Date()) => {

    if (state.too === 0) {
      toast.error('Таны сонгох боломжит 5 мэргэжлээ сонгосон байна. Та өөрийн бүртгүүлсэн мэдээллээ хувийн мэдээлэл хэсгээс харах боломжтой.', {});
      return;
    }
    if (state.fname == null | state.lname == null | state.rd == null | state.utas == null) {
      setState({
        ...state,
        error: 'Та хувийн мэдээллээ бүрэн оруулсны дараа хөтөлбөр сонгох боломжтой',
        loading: false
      })
      toast.error('Та хувийн мэдээллээ бүрэн оруулсны дараа хөтөлбөр сонгох боломжтой', {});
      return;
    }
    if (state.mergejils.includes(mergejilId)) {
      setState({
        ...state,
        error: "Таны сонгосон мэргэжил байна. Та өөрийн бүртгүүлсэн мэдээллээ хувийн мэдээлэл хэсгээс харах боломжтой.",
        loading: false
      });
      toast.error('Таны сонгосон мэргэжил байна. Та өөрийн бүртгүүлсэн мэдээллээ хувийн мэдээлэл хэсгээс харах боломжтой.', {});
      return;
    }

    const data = {
      burtgel_Id,
      mergejils: [
        mergejilId
      ],
      ognoo
    };
    axios.post('/elsegch/mergejil', data).then(result => {
      if (result.data.status == "success") {
        toast('Таныг хүссэн мэргэжлээ сонгосон гэж найдаж байна. Таньд амжилт хүсье', {});
        setState((prevState) => (
          {
            ...prevState, too: prevState.too - 1,
            mergejils: [...prevState.mergejils, mergejilId]
          })
        );

      }
    }).catch(err => {
      console.log(err);
      let message = err.message;
      if (message === "Request failed with status code 404")
        message = "Уучлаарай сэрвэр дээр энэ өгөгдөл байхгүй байна...";
      else if (message === "Network Error")
        message =
          "Сэрвэр ажиллахгүй байна. Та түр хүлээгээд дахин оролдоно уу.";
      else if (message == "Request failed with status code 500")
        message =
          "Сэрвэр ажиллахгүй байна. Та түр хүлээгээд дахин оролдоно уу.";

      setState(
        {
          ...state, error: message,
          loading: false, saving: false
        }
      )
    });
  };
  const logout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("burtgel_Id");
    localStorage.removeItem("EV");
    // remove cookie
    setState(initialState);
  };

  const autoLogin = (burtgel_Id, email, EV) => {
    rememberMe(burtgel_Id, EV);
  }

  const setError = (message) => {
    setState({
      ...state, error: message,
    })
  }
  const removeMergejil = (burtgel_Id, mergejilId, callback) => {

    console.log(mergejilId);
    axios.delete(`/elsegch/${burtgel_Id}/mergejils/${mergejilId}`)
      .then(result => {
        // console.log(result.status)
        if (result.status == 204) {
          let mergejilIndex = state.mergejils.indexOf(mergejilId);
          console.log(mergejilIndex)
          if (mergejilIndex != -1) {
            state.mergejils.splice(mergejilIndex, 1);
            setState({ ...state, error: null, mergejils: state.mergejils, too: ++state.too })
            callback(mergejilId);
            toast('Амжилттай устлаа. Та дахин мэргэжил сонгох боломжтой боллоо.', {});
          }
        }
      })
      .catch(err => console.log(err))
  }
  return (
    <ElsegchContext.Provider
      value={{ state, rememberMe, googleOAuth, insertMyInfo, choose, logout, autoLogin, removeMergejil, approveInfo, setError }} >
      {props.children}
    </ElsegchContext.Provider>
  );
};
export default ElsegchContext;
