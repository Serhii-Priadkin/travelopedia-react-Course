import React from "react";
import { useGetAllDestinationQuery } from "../api/destinationApi";
import { useDeleteDestinationMutation } from "../api/destinationApi";

function DestinationList() {
  const { data, isLoading, isSuccess, isError, error } =
    useGetAllDestinationQuery();
  const [deleteDestination] = useDeleteDestinationMutation();

  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isSuccess) {
    content = data.map((destination) => {
      return (
        <article key={destination.id}>
          <div className="text-center text-info p-2">
            <div className="row col-8 offset-2">
              <div className="col-5 p-1">
                {destination.city},{destination.country}
              </div>
              <div className="col-5 p-1">{destination.daysNeeded} days</div>
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
        </article>
      );
    });
  } else if (isError) {
    content = <p>{error}</p>;
  }

  return <div className="pt-3">{content}</div>;
}

export default DestinationList;
