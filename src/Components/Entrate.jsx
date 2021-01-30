import React, { useEffect } from 'react';

function Entrate(props) {
  const mese = Number((new Date().getMonth())+1);
  var tmpSomma = 0, tmpEntrate = 0, tmpUscite = 0, dataTMP = 0, mese1 = 0, mese2 = 0, mese3 = 0;

  useEffect(() => {
    props.getMoney();
  });

  const rows = props.data.map((row, index) => { 
    var i = row;
    var ind = index;

    tmpSomma += Number(i.denaro);
    dataTMP = Number(props.data[ind].data.substr(-5, 2));

    if (Number(props.data[ind].denaro) >= 0) {
      tmpEntrate = tmpEntrate + Number(props.data[ind].denaro);
      
      if (mese === 1) {
        if (dataTMP === 1) {
          mese3 =+ Number(props.data[ind].denaro);
        } else if (dataTMP === 12) {
          mese2 =+ Number(props.data[ind].denaro);
        } else if (dataTMP === 11) {
          mese1 =+ Number(props.data[ind].denaro);
        }
      }
      else if (mese === 2) {
        if (dataTMP === 2) {
          mese3 =+ Number(props.data[ind].denaro);
        } else if (dataTMP === 1) {
          mese2 =+ Number(props.data[ind].denaro);
        } else if (dataTMP === 12) {
          mese1 =+ Number(props.data[ind].denaro);
        } 
      }
      else {
        if (dataTMP === 3) {
          mese3 =+ Number(props.data[ind].denaro);
        } else if (dataTMP === 2) {
          mese2 =+ Number(props.data[ind].denaro);
        } else if (dataTMP === mese) {
          mese1 =+ Number(props.data[ind].denaro);
        } else {
          mese1 =+ 0; 
          mese2 =+ 0;
          mese3 =+ 0;
        }
      }
    } else {
      tmpUscite = tmpUscite + (Number(props.data[ind].denaro)*-1);
    }

    return (
        <tr key={ind}>
          <th scope="row">{Number(i.denaro)}</th>
          <td>{i.data}</td>
          <td>{i.note}</td>
        </tr>
    )
  }); 
  
  props.setSomma(tmpSomma);
  props.setEntrate(tmpEntrate);
  props.setUscite(tmpUscite);
  props.setUno(mese1);
  props.setDue(mese2);
  props.setTre(mese3);

  const vuoto = () => {
      return (
        <div className="container text-center">
          <br></br>
          <h5>
            <b>Ancora nulla</b>
          </h5>
          <p className="text-muted">Aggiungi delle entrate.</p>

          <br/><br/><br/>
          
        </div>
      )
  };

  const pieno = () => {
    return (
      <table className="table">
        <thead>
            <tr>
            <th scope="col">Euro</th>
            <th scope="col">Data</th>
            <th scope="col">Note</th>
            </tr>
        </thead>
          <tbody>
            {rows}
          </tbody>
      </table>
    )
};

  return (
    <div>
        <br />
        <br />

        <h2 id="entr" className="hvr-skew-backward" ref={props.myRef}> Entrate e uscite </h2>

        {rows.length === 0 ? vuoto() : pieno()}

        <br /><br /><br />
    </div>
  );
}

export default Entrate;