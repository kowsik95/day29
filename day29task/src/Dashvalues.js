import React from "react";

function DashValues(props) {
  return (
    <div className="col-xl-3 col-md-6 mb-4">
      <div
        className={
          props.value.border == "darkblue"
            ? "card border-left-primary shadow h-100 py-2"
            : props.value.border == "green"
            ? "card border-left-success shadow h-100 py-2"
            : props.value.border == "skyBlue"
            ? "card border-left-info shadow h-100 py-2"
            : props.value.border == "yellow"
            ? "card border-left-warning shadow h-100 py-2"
            : ""
        }
      >
        <div className="card-body">
          <div className="row no-gutters align-items-center">
            <div className="col mr-2">
              <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                {props.value.period}
              </div>
              <div className="h5 mb-0 font-weight-bold text-gray-800">
                {props.value.rate}
              </div>
            </div>
            {props.value.progress ? (
              <div className="col">
                <div className="progress progress-sm mr-2">
                  <div
                    className="progress-bar bg-info"
                    role="progressbar"
                    style={{ width: "50%" }}
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            ) : (
              ""
            )}
            <div className="col-auto">
              <i
                className={
                  props.value.calender
                    ? "fas fa-calendar fa-2x text-gray-300"
                    : props.value.dollar
                    ? "fas fa-dollar-sign fa-2x text-gray-300"
                    : props.value.progress
                    ? "fas fa-clipboard-list fa-2x text-gray-300"
                    : props.value.pending
                    ? "fas fa-comments fa-2x text-gray-300"
                    : ""
                }
              ></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashValues;
