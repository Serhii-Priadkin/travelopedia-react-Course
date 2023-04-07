import React from "react";
import { useDeleteDestinationMutation } from "../api/destinationApi";

function Destination({destination}) {
  const [deleteDestination] = useDeleteDestinationMutation();

  return (
    <div
      className="row py-1"
      style={{
        borderBottom: "1px solid #333",
        borderTop: "1px solid #333",
      }}
    >
      <div className="text-center text-info p-2">
        <div className="row col-8 offset-2">
          <div className="col-5 p-1">
            {destination.city},{destination.country}
          </div>
          <div className="col-5 text-warning">
            {destination.daysNeeded} days
          </div>
          <div className="col-2 p-1">
            <button
              className="btn btn-danger form-control"
              onClick={() => deleteDestination({ id: destination.id })}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Destination;
