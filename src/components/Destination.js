import React from "react";
import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import Mountain3 from "../assets/3.jpg";
import Mountain4 from "../assets/4.jpg";
import "./DestinationStyles.css";
import DestinationData from "./DestinationData";

const Destination = () => {
  return (
    <>
      <div className="destination">
        <h1>popular destinations</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio.
        </p>
        <DestinationData
          cName={"first-des"}
          img1={Mountain1}
          img2={Mountain2}
          heading="Taal volcano, Batandas"
          text=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
            temporibus error qui at vero consequuntur illum consectetur
            exercitationem saepe, accusamus vitae, recusandae possimus tempore
            veniam? Veritatis beatae nihil earum reprehenderit nisi laboriosam
            sit consectetur ut."
        />
        <DestinationData
          cName={"first-des-reverse"}
          img1={Mountain3}
          img2={Mountain4}
          heading="Mt. Daguldul, Batangas"
          text=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
            temporibus error qui at vero consequuntur illum consectetur
            exercitationem saepe, accusamus vitae, recusandae possimus tempore
            veniam? Veritatis beatae nihil earum reprehenderit nisi laboriosam
            sit consectetur ut."
        />
      </div>
    </>
  );
};

export default Destination;
