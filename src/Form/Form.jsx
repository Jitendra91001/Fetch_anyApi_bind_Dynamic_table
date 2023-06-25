import React, { useEffect, useState } from "react";
import { EditData } from "../manageData/Edit";

export const Form = ({ id }) => {
  const [data, setData] = useState({});
  const[update,setUpdate]=useState()
  console.log(update)
  useEffect(() => {
    EditData(id).then((res) => setData(res));
  }, []);
  return (
    <>
      <form style={{ position: "absolute", top: "0", left: "0" }}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-10 mx-auto">
              <div className="card">
                <div className="card-header">
                  <h1>Form</h1>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="list-input-group">
                        {data.length != 0 &&
                          Object.keys(data).map((item) => {
                            return (
                              <>
                                <label>{item}</label><br/>
                                <input  type="text" className="form-control" value={data[item]} onChange={(e)=>setUpdate(e.target.value)}/>
                              </>
                            );
                          })}
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <button className="btn btn-warning">Update</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
