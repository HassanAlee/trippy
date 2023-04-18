import "./TripStyles.css";
import React from "react";
import TripData from "./TripData";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/8.jpg";
import Trip3 from "../assets/6.jpg";

const Trip = () => {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using google map</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Trip in Indonesia"
          text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus suscipit architecto officia sequi. A quia sed ipsum, rem eveniet sequi dignissimos. Ab aliquid non perferendis, vel nulla accusamus minus rerum?"
        />
        <TripData
          image={Trip2}
          heading="Trip in Malaysia"
          text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus suscipit architecto officia sequi. A quia sed ipsum, rem eveniet sequi dignissimos. Ab aliquid non perferendis, vel nulla accusamus minus rerum?"
        />
        <TripData
          image={Trip3}
          heading="Trip in France"
          text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus suscipit architecto officia sequi. A quia sed ipsum, rem eveniet sequi dignissimos. Ab aliquid non perferendis, vel nulla accusamus minus rerum?"
        />
      </div>
    </div>
  );
};

export default Trip;
