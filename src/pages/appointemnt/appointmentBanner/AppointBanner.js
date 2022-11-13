import React, { useState } from "react";
import chair from "../../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import banners from '../../../assets/images/bg.png'

const AppointBanner = ({selected,setSelected}) => {

  return (
    <header style={{'backgroundImage':`url(${banners})`}}>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={chair}
            className="max-w-sm rounded-lg shadow-2xl"
            alt="dentist Chair"
          />
          <div className="mr-6">
            <DayPicker
              mode="single"
              selected={selected}
              onSelect={setSelected}
            ></DayPicker>
             <p className=' text-center '>You Selected  {format(selected, "PPpp")}</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppointBanner;
