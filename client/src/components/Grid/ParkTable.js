import React from "react";

function ParkTable() {
    return (
        <div className="card">
        <div className="card-body">
        <table className="card-table table table-bordered table-hover table-sm" style={{textAlign: "left", float: "right", overflow: "scroll"}}>
        <thead>
          <tr style={{fontWeight: "bold"}}> 
            <td> Park Name </td>
          </tr>
        </thead>
        <tbody style={{textAlign: "left"}}>
          <tr>
            <td> Park One </td>
          </tr>
          <tr>
            <td> Park Two </td>
          </tr>
          <tr>
            <td> Park Three </td>
          </tr>
          <tr>
            <td> Park Four </td>
          </tr>
          <tr>
            <td> Park Five </td>
          </tr>
        </tbody>
      </table>
      </div>
      </div>
    );
};

export default ParkTable;