

import { useState, useEffect, useContext } from 'react';
import validator from 'validator';
import { toast } from 'react-toastify';
import './style.css';
import axios from './../../axios';
import { Container, Row, Col, Card, Form, Button, Spinner } from 'react-bootstrap';
import AimagSelect from '../../components/AimagSelect';
import useAimags from '../../hooks/useAimags';
import ElsegchContext from '../../context/ElsegchContext';
import { BsTrashFill } from 'react-icons/bs';
export default function ElsegchInfoPage() {
  const Ectx = useContext(ElsegchContext);

  const [rd, setRd] = useState('');
  const [fName, setFname] = useState('');
  const [lName, setLname] = useState('');
  const [utas, setUtas] = useState('');
  const [aimag_id, setAimagID] = useState('');
  const [aimags] = useAimags();
  const [mergejils, setMergejils] = useState([])
  useEffect(() => {
    const getMergejil = async () => {
      axios.get(`/elsegch/${Ectx.state.burtgel_Id}/mergejil`)
        .then(result => {
          setMergejils([...result.data.data])
        }).catch(err =>
          toast.error("Уучлаарай алдаа гарлаа. Та дахин туршаад үзээрэй.")
        );
    }
    getMergejil();
  }, [Ectx.state])

  const [error, setError] = useState({
    ovog: null,
    ner: null,
    rd: null,
    utas: null,
    main: "",
  });

  const handleOvog = (e) => {
    if (validator.isInt(e.target.value)) {
      setError({ ...error, ovog: 'Овог талбарт тоо орох боломжгүй' });
      return;
    }
    if (validator.isAlpha(e.target.value)) {
      setError({ ...error, ovog: 'Овог талбарт гадаад үсэг орох боломжгүй' });
      return;
    }
    setLname(e.target.value);
    setError({ ...error, ovog: '' });
  };

  const handleNer = (e) => {
    if (validator.isInt(e.target.value)) {
      setError({ ...error, ner: 'Нэр талбарт тоо орох боломжгүй' });
      return;
    }
    if (validator.isAlpha(e.target.value)) {
      setError({ ...error, ner: 'Нэр талбарт гадаад үсэг орох боломжгүй' });

      return;
    }
    setFname(e.target.value);
    setError({ ...error, ner: '' });
  };

  const handleRd = (e) => {
    if (validator.isAlpha(e.target.value)) {
      setError({ ...error, rd: 'Регистр талбарт гадаад үсэг орох боломжгүй' });
      return;
    }
    setError({ ...error, rd: '' });
    setRd(e.target.value);
  };

  const handleUtas = (e) => {
    if (e.target.value == '' && utas.length == 1) {
      setUtas('');
      setError({
        ...error,
        utas: null,
      });
      return;
    }
    if (validator.isInt(e.target.value)) {
      setError({
        ...error,
        utas: null,
      });
      setUtas(e.target.value);
      return;
    }
    setError({
      ...error,
      utas: 'Та зөвхөн тоо оруулах боломжтой',
    });
    return;
  };

  const handleBurtgel = (e) => {
    e.preventDefault();
    if (
      validator.isEmpty(lName) ||
      validator.isEmpty(fName) ||
      validator.isEmpty(rd) ||
      validator.isEmpty(utas) ||
      validator.isEmpty(aimag_id)
    ) {
      console.log("нэр " + lName + "..., " + "овог " + fName + "..., " + "rd " + rd + "..., " + "utas ..., " + utas + "..., " + "aimag ..., " + aimag_id);
      setError({
        ...error,
        main: 'Таны оруулсан өгөгдөл хоосон эсвэл алдаатай байна',
      });
      return;
    }
    if (!validator.matches(rd, /[А-ЯӨҮ]{2}[0-9]{8}/gm)) {
      setError({
        ...error,
        main: 'Регистрийн дугаараа зөв оруулна уу',
      });
      return;
    }
    setError({
      ...error,
      main: '',
    });
    // handle
    Ectx.insertMyInfo(Ectx.state.burtgel_Id, Ectx.state.email, lName, fName, rd, utas, aimag_id);
  };

  const removeItem = (removeItemId) => setMergejils(prev => prev.filter(mergejil => mergejil.mergejilId != removeItemId))

  return (
    <div className='container'>
      <Container fluid >
        <Row className="justify-content-center align-items-center">
          <Col lg="8">
            <Card className="my-5 rounded-3  p-3" style={{ maxWidth: '768px' }}>
              <Card.Title as="p" className="lead alert alert-info p2 m-2">
                Та мэдээллээ үнэн зөв оруулна уу
              </Card.Title>
              {Ectx.state.error && (
                <div className="alert alert-danger" role="alert">
                  {Ectx.state.error}
                </div>
              )}
              {error.main && (
                <div className="lead alert alert-danger" >
                  {error.main}
                </div>
              )}
              <Card.Body className="px-4">
                <h3 className=" fs-2" style={{ fontWeight: "500" }}>Хувийн мэдээлэл</h3>
                <hr />
                <Row>
                  <Col md="6">
                    <Form.Label className='lead fs-5' htmlFor='ovog' >Овог</Form.Label>
                    {
                      Ectx.state.lname ? (<Form.Control className="mb-4 p-2 fs-4" label="ovog" id="ovog" type="text" placeholder="Овгоо оруулна уу" value={Ectx.state.lname} disabled />) : (<Form.Control className="mb-4 p-2 fs-4" label="ovog" id="ovog" type="text" placeholder="Овгоо оруулна уу" onChange={handleOvog}
                        value={lName} />
                      )
                    }

                    {error.ovog && (
                      <span className="error text-danger fs-5">{error.ovog}</span>
                    )}
                  </Col>
                  <Col md="6" className="mb-4">
                    <Form.Label className='lead fs-5' htmlFor="ner">Нэр</Form.Label>
                    {
                      Ectx.state.fname ? (<Form.Control className="mb-4 p-2 fs-4" label="ner" id="ner" type="text" placeholder="Овгоо оруулна уу" value={Ectx.state.fname} disabled />) : (<Form.Control className="mb-4 p-2 fs-4" label="ner" id="ner" type="text" placeholder="Нэрээ оруулна уу" value={fName}
                        onChange={handleNer} />
                      )
                    }

                    {error.ner && (
                      <span className="error text-danger fs-5">{error.ner}</span>
                    )}
                  </Col>
                </Row>
                <Row>
                  <Col md="6">
                    <Form.Label className='lead fs-5' htmlFor="rd" >Регистрийн дугаар</Form.Label>
                    {
                      Ectx.state.rd ? (<Form.Control className="mb-4  p-2 fs-4" label="rd" id="rd" type="text" placeholder="Регистрийн дугаараа оруулна уу" value={Ectx.state.rd} disabled />) : (<Form.Control className="mb-4  p-2 fs-4" label="rd" id="rd" type="text" placeholder="Регистрийн дугаараа оруулна уу" name="rd"
                        value={rd}
                        onChange={handleRd} />
                      )
                    }

                    {error.rd && <span className="error text-danger fs-5">{error.rd}</span>}
                  </Col>
                  <Col md="6" className="mb-4">
                    <Form.Label className='lead fs-5' htmlFor="utas" >Утасны дугаар</Form.Label>
                    {
                      Ectx.state.utas ? (<Form.Control className="mb-4  p-2 fs-4" label="utas" id="utas" type="text" placeholder="Регистрийн дугаараа оруулна уу" value={Ectx.state.utas} disabled />) : (<Form.Control className="mb-4  p-2 fs-4" label="utas" id="utas" type="text" name="utas" placeholder="Утасны дугаараа оруулна уу" value={utas}
                        onChange={handleUtas} />)
                    }
                    {error.utas && (
                      <span className="error text-danger fs-5">{error.utas}</span>
                    )}
                  </Col>
                </Row>
                <Row>
                  <Col md="6">
                    <Form.Label className='lead fs-5' htmlFor="but" >БҮТ дугаар</Form.Label>
                    <Form.Control className="mb-4  p-2 fs-4" label="but" id="but" type="text" name="but"
                      value={Ectx.state.burtgel_Id ? Ectx.state.burtgel_Id : ""} disabled />
                  </Col>
                  <Col md="6" className="mb-4">
                    <Form.Label className='lead fs-5 ' htmlFor="email" >И-мэйл</Form.Label>
                    <Form.Control className="mb-4 p-2 fs-4" label="email" id="email" type="email" name="email" value={Ectx.state.email ? Ectx.state.email : ""} disabled />
                  </Col>
                </Row>
                <Row>
                  <Col md="6">
                    {
                      Ectx.state.aimag_id ? (<AimagSelect aimags={aimags} aimag_id={Ectx.state.aimag_id} disabled />) : (<AimagSelect aimags={aimags} aimag_id={aimag_id} setAimagID={setAimagID} />)
                    }

                  </Col>
                  {/* <Col md="6" >
                    <Form.Label className='lead fs-5 ' htmlFor="email" >И-мэйл</Form.Label>
                    <Form.Control className="mb-4 p-2 fs-4" label="rd" id="rd" type="email" name="email" value={"jakleito@gmail.com"} disabled />
                  </Col> */}
                </Row>
                {Ectx.state.loading ? <Spinner animation="border" variant="success" /> : (Ectx.state.lname && Ectx.state.fname && Ectx.state.email && Ectx.state.rd && Ectx.state.utas) ? (null) : <Button variant="success" className="mb-4" size="lg" onClick={handleBurtgel}>
                  Хадгалах
                </Button>}

              </Card.Body>
            </Card>
          </Col>
        </Row>

        {
          mergejils.length > 0 && (
            <div className='container-sm' style={{ maxWidth: "700px" }}>
              <Card className="mb-5 text-light  " >
                <Card.Body>
                  <p className='lead alert alert-info p-4 fs-4'> Таны сонгосон мэргэжлүүд</p>
                </Card.Body>
              </Card>
            </div>
          )
        }
      </Container>
      {
        mergejils &&
        mergejils.map(mergejil =>
          <Card key={mergejil.mergejilId} className="mb-5 container-sm" style={{ maxWidth: "700px" }}>
            <Card.Body className='d-flex align-items-center justify-content-between'>
              <p className='lead fs-4 pt-2'>
                {mergejil.Mergejil.name}
              </p>
              <button type="submit" className="btn btn-danger" onClick={() => { Ectx.removeMergejil(Ectx.state.burtgel_Id, mergejil.mergejilId, removeItem) }}>
                <BsTrashFill />
              </button>
            </Card.Body>
          </Card>

        )
      }
    </div >
  )
}
