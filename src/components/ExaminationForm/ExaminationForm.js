import React from "react";
import { useState } from "react";
import "./styles.css";

const initialState = {
  glavneTegobe: "",
  sadasnjaBolest: "",
  licnaAnamneza: "",
  porodicnaAnamneza: "",
  misljenjePacijenta: "",
  objektivniNalaz: "",
  dijagnoza: "",
  rezultatLecenja: "",
  opisTekucegStanja: "",
  indikatorPoverljivosti: false,
  predlozenaTerapija: "",
  savet: "",
};

const ExaminationForm = ({ saveExamination, record }) => {
  const [form, setForm] = useState(initialState);
  const [diagnosisContent, setDiagnosisContent] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleCheckBox = (e) =>
    setForm({ ...form, [e.target.name]: e.target.checked ? true : false });

  const swapDiagnosisContent = (e) => {
    e.preventDefault();
    setDiagnosisContent(!diagnosisContent);
  };

  const dob = new Date(record.pacijent.datumRodjenja);
  const dobString = dob.toLocaleDateString();

  const alergies = ["polen", "macja dlaka", "mleko"];
  const activeDiagnosis = ["slomljena kost", "upala pluca"];

  return (
    <form action="#" className="examForm">
      <p className="form-section-heading">Podaci o pacijentu</p>
      <div className="patient-info-custom">
        <div className="patient-personal-info">
          <p className="patient-info-text">Ime: {record.pacijent.ime}</p>
          <p className="patient-info-text">
            Prezime: {record.pacijent.prezime}
          </p>
          <p className="patient-info-text">Datum rodjena: {dobString}</p>
        </div>
        <div className="patient-other-info">
          <p className="patient-info-text">
            Alergije: {alergies.map((alergy) => `${alergy} `)}
          </p>
          <p className="patient-info-text">
            Aktivne dijagnoze:{" "}
            {activeDiagnosis.map((diagnosis) => `${diagnosis} `)}
          </p>
        </div>
      </div>
      <p className="form-section-heading">Anamneza</p>
      <div className="form-group-custom">
        <div className="form-label-custom">Glavne tegobe:</div>
        <textarea type="text" name="glavneTegobe" onChange={handleChange} />
      </div>
      <div className="form-group-custom">
        <div className="form-label-custom">Sadasnja bolest:</div>
        <textarea type="text" name="sadasnjaBolest" onChange={handleChange} />
      </div>
      <div className="form-group-custom">
        <div className="form-label-custom">Licna anamneza:</div>
        <textarea type="text" name="licnaAnamneza" onChange={handleChange} />
      </div>
      <div className="form-group-custom">
        <div className="form-label-custom">Porodicna anamneza:</div>
        <textarea
          type="text"
          name="porodicnaAnamneza"
          onChange={handleChange}
        />
      </div>
      <div className="form-group-custom">
        <div className="form-label-custom">Misljenje pacijenta:</div>
        <textarea
          type="text"
          name="misljenjePacijenta"
          onChange={handleChange}
        />
      </div>
      <p className="form-section-heading">Postavljanje dijagnoze</p>
      <div className="form-group-custom">
        <div className="form-label-custom">Objektivni nalaz:</div>
        <textarea type="text" name="objektivniNalaz" onChange={handleChange} />
      </div>
      <button
        className="examSubmit"
        onClick={swapDiagnosisContent}
        style={{ marginBottom: "10px" }}
      >
        {!diagnosisContent ? "Dodati dijagnoze" : "Zatvoriti dijagnoze"}
      </button>
      {diagnosisContent ? (
        <>
          <div className="form-group-custom">
            <div className="form-label-custom">Dijagnoza:</div>
            <select
              onChange={handleChange}
              className="form-select-custom "
              aria-label="Default select example"
              defaultValue="A15.3"
              name="dijagnoza"
            >
              <option value="A15.3">A15.3 - Tuberkuloza pluća</option>
              <option value="D50">D50 - Nedostatkom gvožđa</option>
              <option value="I10">I10 - Povišen krvni pritisak</option>
              <option value="I35.0">I35.0 - Suženje aortnog zaliska</option>
              <option value="J11">J11 - Grip, virus nedokazan</option>
              <option value="J12.9">J12.9 - Zapaljenje pluća</option>
              <option value="K35">K35 - Akutno zapaljenje slepog creva</option>
              <option value="K70.3">
                K70.3 - Ciroza jetre uzrokovana alkoholom
              </option>
              <option value="K71.0">
                K71.0 - Toksička bolest jetre zbog zastoja žuči
              </option>
              <option value="N20.0">N20.0 - Kamen u bubregu</option>
            </select>
          </div>
          <div className="form-group-custom">
            <div className="form-label-custom">Rezultat lecenja:</div>
            <select
              onChange={handleChange}
              className="form-select-custom "
              aria-label="Default select example"
              defaultValue="U_TOKU"
              name="rezultatLecenja"
            >
              <option value="U_TOKU">U toku</option>
              <option value="OPORAVLJEN">Oporavljen</option>
              <option value="STALNE_POSLEDICE">Stalne posledice</option>
              <option value="PREMINUO">Preminuo</option>
            </select>
          </div>
          <div className="form-group-custom">
            <div className="form-label-custom">Opis tekuceg stanja:</div>
            <textarea
              type="text"
              name="opisTekucegStanja"
              onChange={handleChange}
            />
          </div>
          <div>Postojeca dijagnoza</div>
          <input
            type="checkbox"
            name="indikatorPoverljivosti"
            onChange={handleCheckBox}
          />
        </>
      ) : (
        <></>
      )}
      <p className="form-section-heading">Predlaganje terapije</p>
      <div className="form-group-custom">
        <div className="form-label-custom">Predlaganje terapije:</div>
        <textarea
          type="text"
          name="predlozenaTerapija"
          onChange={handleChange}
        />
      </div>
      <div className="form-group-custom">
        <div className="form-label-custom">Savet:</div>
        <textarea type="text" name="savet" onChange={handleChange} />
      </div>

      <button
        className="examSubmit"
        onClick={(e) => {
          e.preventDefault();
          saveExamination(form);
        }}
      >
        Sacuvaj
      </button>
    </form>
  );
};

export default ExaminationForm;
