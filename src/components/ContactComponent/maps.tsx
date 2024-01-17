import React from "react";

const Maps = () => {
  return (
    <div>
      <div className="m-10">
        <h2 className="text-2xl text-center my-10 ">
          FIND YOUR LOCATION
        </h2>
      </div>
      <div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d912.2547127835277!2d90.26039053074368!3d23.853464341831017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1702288063654!5m2!1sen!2sbd"    width="100%"  height="450" loading="lazy" ></iframe>
      </div>
    </div>
  );
};

export default Maps;
