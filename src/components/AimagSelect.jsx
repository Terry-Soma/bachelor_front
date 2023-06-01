import React from "react";
import { Form } from "react-bootstrap";

const AimagSelect = ({ aimags, aimag_id, setAimagID, disabled }) => {
  return (
    <>
      <Form.Label className='lead fs-5' htmlFor="aimag" >Аймаг сонголт</Form.Label>
      {disabled ? (
        <Form.Control as="select" className='mb-4  p-2 fs-4' value={aimag_id}
          aria-label="Aimag songolt" id="aimag" name="aimag" disabled>
          {aimags && aimags.length > 0 && (
            aimags.map((aimag) => <option key={aimag.Id} value={aimag.Id} >{aimag.ner}</option>
            ))}

        </Form.Control>) : (
        <Form.Control as="select" className='mb-4  p-2 fs-4' onChange={(e) => setAimagID(e.target.value)} value={aimag_id}
          aria-label="Aimag songolt" id="aimag" name="aimag" >
          {aimags && aimags.length > 0 && (aimags.map((aimag) => <option key={aimag.Id} value={aimag.Id} >{aimag.ner}</option>))}

        </Form.Control>)}

    </>
  );
};

export default AimagSelect;