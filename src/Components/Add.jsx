import React, { useState } from 'react';
import firebase from '../firebase';

function Add(props) {
  const ref = firebase.firestore().collection('money');

  const [denaro, setDenaro] = useState('');
  const [data, setData] = useState('');
  const [note, setNote] = useState('');
 
  const handleDenaro = (e) => {
    setDenaro(Number(e.target.value));
  }

  const handleData = (e) => {
    setData(e.target.value);
  }

  const handleNote = (e) => {
    setNote(e.target.value);
  }

  const handelSubmit = async (e) => {
    e.preventDefault();

    props.myRef.current.scrollIntoView();

    await ref.add({
      data: data,
      denaro: denaro,
      note: note 
    });

    props.getMoney();

    setDenaro('');
    setData('');
    setNote('');
  }

    return (
        <div>
            <h2> Aggiungi </h2>
            <div  id="collapseExample">
                <div className="card card-body nope">
                    <form encType="multipart/form-data">
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Denaro: </label>
                            <input value={denaro} className="form-control" type="number" name="denaro" onChange={handleDenaro} htmlFor="a" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Note aggiuntive: </label>
                            <textarea value={note} className="form-control" id="exampleFormControlTextarea1" rows="2" name="note" htmlFor="b" onChange={handleNote}></textarea>
                        </div>
                        <div className="mb-3 form-group">
                            <label htmlFor="example-date-input" className="col-2 col-form-label">Inserisci la data: </label> 
                            <div className="col-10">
                            <input value={data} className="form-control" type="date" id="example-date-input" name="data" htmlFor="c" onChange={handleData} />
                            </div>
                        </div>
                        <button className="btn btn-outline-dark" onClick={handelSubmit}>Invia </button>
                    </form>
                </div>
            </div>

            <br/><br/><br/><br/><br/><br/><br/><br />

        </div>
    );
}

export default Add;