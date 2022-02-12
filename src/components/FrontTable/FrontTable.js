import React from "react";
import "./FrontTable.css";
import Close from "./close1.png";
import Check from "./check1.png";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from "aos";

function FrontTable() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="front_table">
      <table>
        <tr className="main">
          <td className="main_title1"> </td>
          <td className="main_title2">Without FuncBox</td>
          <td className="main_title2">With FuncBox</td>
        </tr>
        <tr>
          <td className="main_data">
            <div className="data_field">Imagination</div>
            <div className="data_field">Innovation</div>
            <div className="data_field">Conceptualisation</div>
            <div className="data_field">Visualization</div>
            <div className="data_field">Curiosity</div>
            <div className="data_field">Complexity Nurturing</div>
            <div className="data_field">Experimental Learning</div>
            <div className="data_field">Logical Reasoning</div>
            <div className="data_field last_data">Life Skills</div>
          </td>
          <td className="box_group">
            <div className="box">
              <div data-aos="fade-up">
                <img src={Close} />
              </div>
            </div>
            <div className="box">
              <div data-aos="fade-up">
                <img src={Close} />
              </div>
            </div>
            <div className="box">
              <div data-aos="fade-up">
                <img src={Close} />
              </div>
            </div>
            <div className="box">
              <div data-aos="fade-up">
                <img src={Close} />
              </div>
            </div>
            <div className="box">
              <div data-aos="fade-up">
                <img src={Close} />
              </div>
            </div>
            <div className="box">
              <div data-aos="fade-up">
                <img src={Close} />
              </div>
            </div>
            <div className="box">
              <div data-aos="fade-up">
                <img src={Close} />
              </div>
            </div>
            <div className="box">
              <div data-aos="fade-up">
                <img src={Close} />
              </div>
            </div>
            <div className="box">
              <div data-aos="fade-up">
                <img src={Close} />
              </div>
            </div>
          </td>
          <td className="box_group">
            <div className="box">
              <div data-aos="fade-up">
                <img src={Check} />
              </div>
            </div>
            <div className="box">
              <div data-aos="fade-up">
                <img src={Check} />
              </div>
            </div>
            <div className="box">
              <div data-aos="fade-up">
                <img src={Check} />
              </div>
            </div>
            <div className="box">
              <div data-aos="fade-up">
                <img src={Check} />
              </div>
            </div>
            <div className="box">
              <div data-aos="fade-up">
                <img src={Check} />
              </div>
            </div>
            <div className="box">
              <div data-aos="fade-up">
                <img src={Check} />
              </div>
            </div>
            <div className="box">
              <div data-aos="fade-up">
                <img src={Check} />
              </div>
            </div>
            <div className="box">
              <div data-aos="fade-up">
                <img src={Check} />
              </div>
            </div>
            <div className="box">
              <div data-aos="fade-up">
                <img src={Check} />
              </div>
            </div>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default FrontTable;
