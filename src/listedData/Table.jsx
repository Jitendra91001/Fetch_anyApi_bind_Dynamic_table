import React, { useReducer } from "react";
import { Edit } from "../Edit/Edit";
import { Delete } from "../Delete/Delete";

const Table = ({ alldata }) => {
  let generateField = (value) => {
    if (typeof value == "string" && value.match(/(jpg|png|gif|bmp|jpeg)/gi)) {
      return (
        <td>
          {" "}
          <img src={value} height="100px" width="200" />
        </td>
      );
    } else if (
      typeof value == "number" ||
      (typeof value == "string" && !value.match(/(jpg|png|gif|bmp|jpeg)/gi))
    ) {
      return <td>{value}</td>;
    } else if (typeof value == "object") {
      return (
        <td>
          <table className="table table-striped" style={{ textAlign: "center" }}>
            <tr>
              <th>
                {Object.keys(value).map((item, index) => {
                  return generateField(item);
                })}
              </th>
            </tr>
            <tr>
              <td>
                {Object.values(value).map((item, index) => {
                  return generateField(item);
                })}
              </td>
            </tr>
          </table>
        </td>
      );
    } else if (Array.isArray(value)) {
      return value.map((item) => {
        return <td>{generateField(item)}</td>;
      });
    }else if(typeof value == 'boolean'){
      return <td>{value+""}</td>
    } else {
      return Object.keys(value).map((item) => {
        if (typeof value[item] === "object") {
          return Object.keys(value).map((elem) => {
            return generateField(elem);
          });
        }
      });
    }
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <table className="table table-striped">
              <thead>
                <tr>
                  {alldata.length != 0 &&
                    Object.keys(alldata[0]).map((item, index) => (
                      <>
                        <th key={index}>{item}</th>
                      </>
                    ))}
                </tr>
              </thead>
              <tbody>
                {alldata.length != 0 &&
                  alldata.map((item) => (
                    <tr>
                      {Object.values(item).map((item) => {
                        return generateField(item);
                      })}
                      <td>
                        <Delete deleteID={item.id}/>                
                      </td>

                      <td>
                        <Edit editId={item.id}/>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
export default Table;
