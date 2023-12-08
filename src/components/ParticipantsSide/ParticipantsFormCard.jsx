import React from "react";
import styles from "./styles/ParticipantsFormCard.module.css";

const ParticipantsFormCard = () => {
  const Location = ["India", "Australia", "Malasiya", "London", "New York"];
  const Phase = ["Phase", "I", "II", "III"];
  const FunderType = ["Funder Type", "BLAHhhHHHHHHHHHHHHHHHHHH", "II", "III"];
  const StudyDocument = [
    "Study Document",
    "BLAHhhHHHHHHHHHHHHHHHHHH",
    "II",
    "III",
  ];
  const ResultsSubmitted = [
    "Results Submitted",
    "BLAHhhHHHHHHHHHHHHHHHHHH",
    "II",
    "III",
  ];
  return (
    <div>
      <div className={styles.card}>
        <div className={styles.oneDiv}>
          <label htmlFor="disease" className={styles.titles}>Condition & Disease</label>
          <br />
          <input
            className={styles.textBox}
            type="text"
            placeholder="eg. Breast Cancer"
          />
        </div>
        <div className={styles.oneDiv}>
          <label htmlFor="otherName" className={styles.titles}>Other Terms</label>
          <br />
          <input
            className={styles.textBox}
            type="text"
            placeholder="eg. NCT number, drug name, investigator name"
          />
        </div>
        <div className={`${styles.flex} ${styles.oneDiv}`}>
          <div>
            <label htmlFor="studyType" className={styles.titles}>Study Type</label>
            <br />
            <select className={styles.dropdown} name="" id="">
              <option value="">All Studies</option>
            </select>
          </div>
          <div>
            <label htmlFor="studyResult" className={styles.titles}>Study Result</label>
            <br />
            <select className={styles.dropdown} name="" id="">
              <option value="">All Studies</option>
            </select>
          </div>
        </div>
        <div className={styles.oneDiv}>
          <div>
            <label htmlFor="status" className={styles.titles}>Status</label>
            <div className={styles.flex}>
              <div>
                <select className={styles.dropdown} name="" id="">
                  <option value="">Recruitment</option>
                </select>
              </div>
              <div>
                <select className={styles.dropdown} name="" id="">
                  <option value="">Expanded Access</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.oneDiv}>
          <label htmlFor="eligiblityCriteria" className={styles.titles}>Eligiblity Criteria</label>
          <div className={styles.flex}>
            <select className={styles.dropdown} name="" id="">
              <option value="">Age</option>
            </select>
            <select className={styles.dropdown} name="" id="">
              <option value="">Sex</option>
              <option value="">Male</option>
              <option value="">Female</option>
              <option value="">Others</option>
            </select>
            <div>
              <input type="radio" />
              <label htmlFor="">Accepts Healthy Volunteers</label>
            </div>
          </div>
          <input type="checkbox" />
          <label htmlFor="ageGrpPreference">I want to prefer age group</label>
        </div>
        <div className={styles.oneDiv}>
          <label htmlFor="targetSearch" className={styles.titles}>Targeted Search</label>
          <div className={styles.flex}>
            <input
              className={styles.textBox}
              type="search"
              placeholder="Intervention/Treatment"
            />
            <input
              className={styles.textBox}
              type="search"
              placeholder="Title / Acronym"
            />
          </div>
          <div className={styles.flex}>
            <input
              className={styles.textBox}
              type="search"
              placeholder="Outcome Measure"
            />
            <input
              className={styles.textBox}
              type="search"
              placeholder="Sponsor / Collaborator"
            />
          </div>
          <div style={{ marginTop: "20px" }}>
            <input type="checkbox" />
            <label htmlFor="exactMatch" className={styles.titles}>Exact Match</label>
          </div>
        </div>
        <div className={styles.oneDiv}>
          <label htmlFor="location" className={styles.titles}>Location</label>
          <br />
          <div className={styles.flex}>
            <select className={styles.dropdown} name="" id="">
              {Location.map((item) => {
                return <option value={item}>{item}</option>;
              })}
            </select>
            <input type="text" className={styles.textBox} placeholder="Location Terms" />
          </div>
        </div>
        <div className={styles.oneDiv}>
          <label htmlFor="additionalCriteria" className={styles.titles}>Additional Criteria</label>
          <div className={styles.flex}>
            <select className={styles.dropdown} name="" id="">
              {Phase.map((item) => {
                return <option value={item}>{item}</option>;
              })}
            </select>
            <select className={styles.dropdown} name="" id="">
              {FunderType.map((item) => {
                return <option value={item}>{item}</option>;
              })}
            </select>
            <select className={styles.dropdown} name="" id="">
              {StudyDocument.map((item) => {
                return <option value={item}>{item}</option>;
              })}
            </select>
          </div>
          <div className={styles.flex}>
            <select className={styles.dropdown} name="" id="">
              {ResultsSubmitted.map((item) => {
                return <option value={item}>{item}</option>;
              })}
            </select>
            <div>
              <input type="radio" />
              <label htmlFor="">FDAAA 801 Violations</label>
            </div>
          </div>
        </div>
        <div className={styles.oneDiv}>
          <button className={styles.button}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default ParticipantsFormCard;
