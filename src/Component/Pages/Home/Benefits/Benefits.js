import React from "react";
import "./Benefits.css";

const Benefits = () => {
  return (
    <div className="my-5">
      <div class="container mx-auto grid grid-cols-3 gap-4">
        <div className="flex">
          <div>
            <h6>Point 1</h6>
            <img
              src="https://d38quxh3lusp65.cloudfront.net/_nuxt/prod/img/coconala_merit1.a6f98fd.jpg"
              alt=""
            />
          </div>
          <div>
            <h4>Compare and save</h4>
            <p>
              You can easily weigh a wide range of services from over 200
              categories. You can use it profitably based on all the information
              from detailed provision method to evaluation.
            </p>
          </div>
        </div>
        <div className="flex">
          <div>
            <h6>point 2</h6>
            <img
              src="https://d38quxh3lusp65.cloudfront.net/_nuxt/prod/img/coconala_merit2.5928ad9.jpg"
              alt=""
            />
          </div>
          <div>
            <h4>Completed online</h4>
            <p>
              All services are provided online. You can trade a wide range of
              texts, video chats, phone calls, and content regardless of time or
              place.
            </p>
          </div>
        </div>
        <div className="flex">
          <div>
            <h6>point 3</h6>
            <img
              src="https://d38quxh3lusp65.cloudfront.net/_nuxt/prod/img/coconala_merit2.5928ad9.jpg"
              alt=""
            />
          </div>
          <div>
            <h4>Safe and secure</h4>
            <p>
              It is safe because Coconala mediates the exchange of money when
              purchasing and selling. We also provide support on 365 days of
              operation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
