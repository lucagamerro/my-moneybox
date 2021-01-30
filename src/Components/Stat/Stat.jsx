import React from 'react';
import Chart from "react-google-charts";

function Stat(props) {
    return (
        <div>
            <h2 id="stat" className="hvr-skew-backward"> Statistiche </h2>
            <div style={{display: 'flex'}}>
            <div className="card nope" style={{width: '20rem'}}>
                <div className="type-wrap">
                    <h1 id="totale">
                        <span id="typed2" style={{whiteSpace: 'pre'}}>{props.somma}</span>
                    </h1>
                </div>
                <div className="card-body">
                    <br /><br />
                    <p className="card-text">Euro a tua disposizione. ☝</p>
                </div>
            </div>

            <div className="card nope" style={{width: '19rem'}}>
                <Chart
                    width={'285px'}
                    height={'285px'}
                    chartType="PieChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                        ["Task", "Hours per Day"],
                        ["Entrate", props.entrate],
                        ["Uscite", props.uscite],
                    ]}
                    options={{
                        legend: "none",
                        pieSliceText: "label",
                        tooltip: { trigger: "none" },
                        slices: {
                            0: { color: "#54BC94" },
                            1: { color: "#EC5C44" }
                        }
                    }}
                />
                <div className="card-body">
                    <p className="card-text">Questo grafico rappresenta le tue entrate e uscite di denaro. 💸</p>
                </div>
            </div>

            <div className="card nope" style={{width: '25rem'}}>
                <Chart
                    width={'400px'}
                    height={'285px'}
                    chartType="BarChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                        ["Mesi", "Entrate"],
                        ["", props.uno],
                        ["", props.due],
                        ["", props.tre]
                    ]}
                    options={{
                        toggle: "none",
                        legend: "none",
                        pieSliceText: "label",
                        tooltip: { trigger: "none" }
                    }}
                />
                <div className="card-body">
                    <p className="card-text" style={{marginLeft: '50px'}}>Papresentazione delle entrate negli ultimi tre mesi. 📅</p>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Stat;