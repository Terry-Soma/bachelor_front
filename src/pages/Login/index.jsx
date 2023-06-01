import { useContext, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Spinner } from 'react-bootstrap';

import GoogleButton from "../../components/GoogleButton";
import { LoginSocialGoogle } from "reactjs-social-login";
import validator from "validator";
import ElsegchContext from "../../context/ElsegchContext";
import { useNavigate } from "react-router-dom";
export default function LoginPage() {
  const navigate = useNavigate();
  const [step, setstep] = useState(1);
  const [butDugaar, setBut] = useState('');
  const [error, setError] = useState('');
  const Ectx = useContext(ElsegchContext);

  const emailLogin = (provider, data) => {
    Ectx.googleOAuth(provider, data, butDugaar);
  }
  if (Ectx.state.email != null && Ectx.state.burtgel_Id != null && Ectx.state.emailVerified) navigate('/elsegch')

  const handleBut = (e) => {
    setBut(e.target.value);
  };
  const handleLogin = (e) => {
    if (validator.isEmpty(butDugaar)) {
      setError('БҮТ-ийн дугаараа оруулна уу');
      return;
    }
    if (!validator.isInt(butDugaar)) {
      setError('БҮТ-ийн дугаараа зөв оруулна уу');
      return;
    }
    setError(false);
    setstep(2);
    Ectx.rememberMe(butDugaar);

  }

  const butLogin = () => (
    <>
      <div className="mb-3">
        <label htmlFor="butDugaar" className="form-label mb-2">
          Бүртгэлийн үнэлгээний дугаар
        </label>
        <input
          type="text"
          className="form-control p-3 fs-4"
          id="butDugaar"
          placeholder=""
          onChange={handleBut}
          value={butDugaar}
        />
        {error && (
          <p style={{ color: 'red', marginTop: '1rem' }}>{error}</p>
        )}

      </div>
      <Button onClick={handleLogin} className="fs-5 text-uppercase py-3 px-4 mt-3" style={{ letterSpacing: "1px", background: "#333" }} variant="secondary">
        {/*  */}
        {1 > 2 ? (
          <Spinner animation="border" variant="info" />
        ) : (
          ' Нэвтрэх'
        )}
      </Button>
    </>
  )
  const googleLogin = () => (
    <div className="text-center mx-auto">
      <p className="lead text-secondary mb-4">
        Та өөрийн хувийн и-мэйл хаягаараа нэвтрэн бүртгэлээ
        баталгаажуулна уу
      </p>
      {Ectx.state.error && (
        <p style={{ color: 'red', marginTop: '1rem' }}>
          {Ectx.state.error}
        </p>
      )}
      {error ? (<p style={{ color: 'red', marginTop: '1rem' }}>Уучлаарай алдаа гарлаа...</p>) : null}
      <LoginSocialGoogle
        client_id={"279980692223-5tbdqf3elphk3p3ncc6tfkqd7q1iefuh.apps.googleusercontent.com"}
        scope="openid"
        discoveryDocs="claims_supported"
        access_type="offline"
        onResolve={({ provider, data }) => emailLogin(provider, data)}
        onReject={(err) => setError(err)} >
        {Ectx.state.loading ? (
          <Spinner animation="border" variant="info" />
        ) : <GoogleButton />}
      </LoginSocialGoogle>
    </div >
  )



  return (
    <div style={{ paddingTop: "100px", paddingBottom: "100px", marginBottom: '30vh', }} className="container">
      <Card style={{ minWidth: '248px', maxWidth: '600px', margin: "0 auto" }} className="card-login">
        <Card.Body className="container p-5" >
          {step === 1 && butLogin()}
          {step === 2 && googleLogin()}
        </Card.Body>
      </Card>
    </div>
  )
}
