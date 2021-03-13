import React, { useState, useEffect } from "react";
import style from "./leftcontainer.module.css";
function Leftcontainer() {
  // ------------------------------------------------------------------------
  useEffect(() => {
    // initialy to set true on(mon , tue , wed ,thu ,fri),
    let mon = () => {
      let checkBox = document.getElementById("mon");
      checkBox.checked = true;
    };
    let tue = () => {
      let checkBox = document.getElementById("tue");
      checkBox.checked = true;
    };
    let wed = () => {
      let checkBox = document.getElementById("wed");
      checkBox.checked = true;
    };
    let thu = () => {
      let checkBox = document.getElementById("thu");
      checkBox.checked = true;
    };
    let fri = () => {
      let checkBox = document.getElementById("fri");
      checkBox.checked = true;
    };
    mon();
    tue();
    wed();
    thu();
    fri();
    // ------------------------------------------------------------------------
  }, []); // useEffect run only ones , because of this square brackets[]
  // ------------------------------------------------------------------------
  // Array destructing
  const [sunday, setsunday] = useState(false);
  const [monday, setmonday] = useState(true);
  const [tuesday, settuesday] = useState(true);
  const [wednesday, setwednesday] = useState(true);
  const [thursday, setthursday] = useState(true);
  const [friday, setfriday] = useState(true);
  const [saturday, setsaturday] = useState(false);
  // ------------------------------------------------------------------------
  const handelsun = () => {
    let checkBox = document.getElementById("sun");
    if (checkBox.checked === true) {
      setsunday(true);
    } else {
      setsunday(false);
    }
  };
  // ------------------------------------------------------------------------
  const handelmon = () => {
    let checkBox = document.getElementById("mon");
    if (checkBox.checked === true) {
      setmonday(true);
      checkBox.checked = true;
    } else {
      setmonday(false);
      checkBox.checked = false;
    }
  };
  // ------------------------------------------------------------------------
  const handeltue = () => {
    let checkBox = document.getElementById("tue");
    if (checkBox.checked === true) {
      settuesday(true);
      checkBox.checked = true;
    } else {
      settuesday(false);
      checkBox.checked = false;
    }
  };
  // ------------------------------------------------------------------------
  const handelwed = () => {
    let checkBox = document.getElementById("wed");
    if (checkBox.checked === true) {
      setwednesday(true);
      checkBox.checked = true;
    } else {
      setwednesday(false);
      checkBox.checked = false;
    }
  };
  // ------------------------------------------------------------------------
  const handelthu = () => {
    let checkBox = document.getElementById("thu");
    if (checkBox.checked === true) {
      setthursday(true);
      checkBox.checked = true;
    } else {
      setthursday(false);
      checkBox.checked = false;
    }
  };
  // ------------------------------------------------------------------------
  const handelfri = () => {
    let checkBox = document.getElementById("fri");
    if (checkBox.checked === true) {
      setfriday(true);
      checkBox.checked = true;
    } else {
      setfriday(false);
      checkBox.checked = false;
    }
  };
  // ------------------------------------------------------------------------
  const handelsat = () => {
    let checkBox = document.getElementById("sat");

    if (checkBox.checked === true) {
      setsaturday(true);
    } else {
      setsaturday(false);
    }
  };
  // ------------------------------------------------------------------------
  return (
    <div className="col-sm-8">
      <div className="card shadow-lg p-1 mb-2 bg-body rounded">
        <div class="card-header p2-3">Set your weekly hours</div>
        <div className="card-body">
          <p className="card-text table-responsive">
            <table class="table">
              <tbody>
                {/* // ------------------------------------------------------------------------ */}
                <tr>
                  <th scope="row">
                    <label htmlFor="sun">
                      <input type="checkbox" id="sun" onClick={handelsun} /> SUN
                    </label>
                  </th>
                  {sunday ? (
                    <>
                      <select className={`${style.select}`}>
                        <option value="T1">9.00</option>
                        <option value="T2">8.00</option>
                        <option value="T3">8.40</option>
                        <option value="T4">12.00</option>
                        <option value="T5">11.00</option>
                      </select>
                      -
                      <select className={`${style.select}`}>
                        <option value="T6">4.00</option>
                        <option value="T7">4.30</option>
                        <option value="T8">6.40</option>
                        <option value="T9">8.00</option>
                        <option value="T10">9.00</option>
                      </select>
                    </>
                  ) : (
                    <td className="text-danger">Unavailable</td>
                  )}
                  <td></td>
                  <td>
                    <button className="btn mx-4">+</button>
                    <button className="btn">x</button>
                  </td>
                </tr>
                {/* // ------------------------------------------------------------------------ */}
                <tr>
                  <th scope="row">
                    <label htmlFor="mon">
                      <input type="checkbox" id="mon" onClick={handelmon} /> MON
                    </label>
                  </th>
                  {monday ? (
                    <>
                      <select className={`${style.select}`}>
                        <option value="T1">9.00</option>
                        <option value="T2">8.00</option>
                        <option value="T3">8.40</option>
                        <option value="T4">12.00</option>
                        <option value="T5">11.00</option>
                      </select>
                      -
                      <select className={`${style.select}`}>
                        <option value="T6">4.00</option>
                        <option value="T7">4.30</option>
                        <option value="T8">6.40</option>
                        <option value="T9">8.00</option>
                        <option value="T10">9.00</option>
                      </select>
                    </>
                  ) : (
                    <td className="text-danger">Unavailable</td>
                  )}
                  <td></td>
                  <td>
                    <button className="btn mx-4">+</button>
                    <button className="btn">x</button>
                  </td>
                </tr>
                {/* // ------------------------------------------------------------------------ */}
                <tr>
                  <th scope="row">
                    <label htmlFor="tue">
                      <input type="checkbox" id="tue" onClick={handeltue} /> TUE
                    </label>
                  </th>
                  {tuesday ? (
                    <>
                      <select className={`${style.select}`}>
                        <option value="T1">9.00</option>
                        <option value="T2">8.00</option>
                        <option value="T3">8.40</option>
                        <option value="T4">12.00</option>
                        <option value="T5">11.00</option>
                      </select>
                      -
                      <select className={`${style.select}`}>
                        <option value="T6">4.00</option>
                        <option value="T7">4.30</option>
                        <option value="T8">6.40</option>
                        <option value="T9">8.00</option>
                        <option value="T10">9.00</option>
                      </select>
                    </>
                  ) : (
                    <td className="text-danger">Unavailable</td>
                  )}
                  <td></td>
                  <td>
                    <button className="btn mx-4">+</button>
                    <button className="btn">x</button>
                  </td>
                </tr>
                {/* // ------------------------------------------------------------------------ */}
                <tr>
                  <th scope="row">
                    <label htmlFor="wed">
                      <input type="checkbox" id="wed" onClick={handelwed} /> WED
                    </label>
                  </th>
                  {wednesday ? (
                    <>
                      <select className={`${style.select}`}>
                        <option value="T1">9.00</option>
                        <option value="T2">8.00</option>
                        <option value="T3">8.40</option>
                        <option value="T4">12.00</option>
                        <option value="T5">11.00</option>
                      </select>
                      -
                      <select className={`${style.select}`}>
                        <option value="T6">4.00</option>
                        <option value="T7">4.30</option>
                        <option value="T8">6.40</option>
                        <option value="T9">8.00</option>
                        <option value="T10">9.00</option>
                      </select>
                    </>
                  ) : (
                    <td className="text-danger">Unavailable</td>
                  )}
                  <td></td>
                  <td>
                    <button className="btn mx-4">+</button>
                    <button className="btn">x</button>
                  </td>
                </tr>
                {/* // ------------------------------------------------------------------------ */}
                <tr>
                  <th scope="row">
                    <label htmlFor="thu">
                      <input type="checkbox" id="thu" onClick={handelthu} /> THU
                    </label>
                  </th>
                  {thursday ? (
                    <>
                      <select className={`${style.select}`}>
                        <option value="T1">9.00</option>
                        <option value="T2">8.00</option>
                        <option value="T3">8.40</option>
                        <option value="T4">12.00</option>
                        <option value="T5">11.00</option>
                      </select>
                      -
                      <select className={`${style.select}`}>
                        <option value="T6">4.00</option>
                        <option value="T7">4.30</option>
                        <option value="T8">6.40</option>
                        <option value="T9">8.00</option>
                        <option value="T10">9.00</option>
                      </select>
                    </>
                  ) : (
                    <td className="text-danger">Unavailable</td>
                  )}
                  <td></td>
                  <td>
                    <button className="btn mx-4">+</button>
                    <button className="btn">x</button>
                  </td>
                </tr>
                {/* // ------------------------------------------------------------------------ */}
                <tr>
                  <th scope="row">
                    <label htmlFor="fri">
                      <input type="checkbox" id="fri" onClick={handelfri} /> FRI
                    </label>
                  </th>
                  {friday ? (
                    <>
                      <select className={`${style.select}`}>
                        <option value="T1">9.00</option>
                        <option value="T2">8.00</option>
                        <option value="T3">8.40</option>
                        <option value="T4">12.00</option>
                        <option value="T5">11.00</option>
                      </select>
                      -
                      <select className={`${style.select}`}>
                        <option value="T6">4.00</option>
                        <option value="T7">4.30</option>
                        <option value="T8">6.40</option>
                        <option value="T9">8.00</option>
                        <option value="T10">9.00</option>
                      </select>
                    </>
                  ) : (
                    <td className="text-danger">Unavailable</td>
                  )}
                  <td></td>
                  <td>
                    <button className="btn mx-4">+</button>
                    <button className="btn">x</button>
                  </td>
                </tr>
                {/* // ------------------------------------------------------------------------ */}
                <tr>
                  <th scope="row">
                    <label htmlFor="sat">
                      <input type="checkbox" id="sat" onClick={handelsat} /> SAT
                    </label>
                  </th>
                  {saturday ? (
                    <>
                      <select className={`${style.select}`}>
                        <option value="T1">9.00</option>
                        <option value="T2">8.00</option>
                        <option value="T3">8.40</option>
                        <option value="T4">12.00</option>
                        <option value="T5">11.00</option>
                      </select>
                      -
                      <select className={`${style.select}`}>
                        <option value="T6">4.00</option>
                        <option value="T7">4.30</option>
                        <option value="T8">6.40</option>
                        <option value="T9">8.00</option>
                        <option value="T10">9.00</option>
                      </select>
                    </>
                  ) : (
                    <td className="text-danger">Unavailable</td>
                  )}
                  <td></td>
                  <td>
                    <button className="btn mx-4">+</button>
                    <button className="btn">x</button>
                  </td>
                </tr>
                {/* // ------------------------------------------------------------------------ */}
              </tbody>
            </table>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Leftcontainer;
