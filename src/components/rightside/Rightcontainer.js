import React, { useState } from "react";
import Popup from "../Popup";
import "./rightcontainer.css";
function Rightcontainer() {
  const [isOpen, setIsOpen] = useState(false);
  const [stack, setstack] = useState([]);
  // -----------------------------------------------
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  // -----------------------------------------------
  const handelsubmit = (e) => {
    e.preventDefault();
    let date = document.getElementById("date").value;
    let start = document.getElementById("start").value;
    let end = document.getElementById("end").value;
    let obj = {
      date,
      start,
      end,
    };
    setstack([...stack, obj]);
    alert("changes Saved !!");
  };
  // -----------------------------------------------
  // delete items using filter method
  const handeldelete = (id) => {
    setstack((stack) => {
      // stack  , that store your all data / information ,
      return stack.filter((arr, index) => {
        return index !== id;
      });
    });
  };
  // -----------------------------------------------
  return (
    <header className="col-sm-4">
      <div className="card shadow-lg p-1 mb-3 bg-body rounded">
        <div>
          <div className="card-header d-flex align-items-center">
            <div>Add date overrides</div>
            <div style={{ marginLeft: "auto" }}>
              <button
                className="btn btn-info"
                value="Click to Open Popup"
                onClick={togglePopup}
              >
                <strong style={{ fontSize: "18px" }}>+</strong>
              </button>
            </div>
          </div>
          <div></div>
        </div>
        {/* // ----------------------------------------------- */}
        <div className="card-body">
          {/* if two conditions are true then it render the Popup component */}
          {isOpen && (
            <Popup
              content={
                <>
                  <b>Select the date(s) you want to assign specific hours</b>{" "}
                  <br />
                  <form onSubmit={handelsubmit} id="myform">
                    <div class="mb-3">
                      <label for="date" class="form-label">
                        Date :
                      </label>
                      <input
                        type="date"
                        class="form-control"
                        id="date"
                        required
                      />
                    </div>
                    <p>What hours are you available?</p>
                    <div class="row">
                      <div class="col">
                        <select
                          class="form-select"
                          id="start"
                          required
                          aria-label="Default select example"
                        >
                          <option selected value="9.50 am">
                            9.50 am
                          </option>
                          <option value="10.30 am">10.30 am</option>
                          <option value="11.50 am">11.50 am</option>
                          <option value="2.00 pm">2.00 pm</option>
                          <option value="2.30 pm">2.30 pm</option>
                        </select>
                      </div>
                      {/* // ----------------------------------------------- */}
                      <div class="col">
                        <select
                          id="end"
                          required
                          class="form-select"
                          aria-label="Default select example"
                        >
                          <option selected value="5.50 pm">
                            5.50 pm
                          </option>
                          <option value="6.00 pm">6.00 am</option>
                          <option value="6.45 pm">6.45 pm</option>
                          <option value="8.00 pm">8.00 pm</option>
                          <option value="9.00 pm">9.00 pm</option>
                        </select>
                      </div>
                    </div>

                    <button type="submit" class="btn btn-primary mt-5">
                      Submit
                    </button>
                  </form>
                </>
              }
              handleClose={togglePopup}
            />
          )}
          {/* // ----------------------------------------------- */}
          <section className="section">
            <div className="left">Dates</div>
            <div className="right">availability</div>
          </section>
          {/* // ----------------------------------------------- */}

          {/* here i used ternary operator 👇 */}
          {stack.length === 0 ? (
            <p className="p-4">
              Add dates when your availability changes from your weekly hours
            </p>
          ) : (
            stack.map((items, idx) => {
              return (
                <div key={idx} className="items_section">
                  <div className="left">
                    <p>{items.date}</p>
                  </div>
                  <div className="right d-flex">
                    <p>{items.start}</p> -<p>{items.end}</p>
                  </div>
                  <p className="pl-3">
                    <i
                      className="far fa-trash-alt delete"
                      onClick={() => handeldelete(idx)}
                    ></i>
                  </p>
                </div>
              );
            })
          )}
        </div>
      </div>
    </header>
  );
}

export default Rightcontainer;
