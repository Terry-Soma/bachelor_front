import { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Spinner } from 'react-bootstrap';
export default function LoginPage() {
  const [step, setstep] = useState(1);
  const [butDugaar, setBut] = useState('');
  const [error, setError] = useState('');

  const handleBut = (e) => {
    setBut(e.target.value);
  };
  const handleLogin = (e) => {
  }
  return (
    <div style={{ paddingTop: "100px", paddingBottom: "100px", marginBottom: '30vh', }} className="container">
      <Card style={{ minWidth: '248px', maxWidth: '600px', margin: "0 auto" }} className="card-login">
        <Card.Body className="container p-5" >
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
            {/* {error && (
                 <p style={{ color: 'red', marginTop: '0.64rem' }}>{error}</p>
               )}
               {Ectx.state.error && (
                 <p style={{ color: 'red', marginTop: '0.64rem' }}>
                   {Ectx.state.error}
                 </p>
               )} */}
          </div>
          <Button onClick={handleLogin} className="fs-5 text-uppercase py-3 px-4 mt-3" style={{ letterSpacing: "1px", background: "#333" }} variant="secondary">
            {/*  */}
            {1 > 2 ? (
              <Spinner animation="border" variant="info" />
            ) : (
              ' Нэвтрэх'
            )}
          </Button>
        </Card.Body>
      </Card>
    </div>
  )
}
