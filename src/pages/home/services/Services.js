import React from "react";
import fluride from "../../../assets/images/fluoride.png";
import cavity from "../../../assets/images/cavity.png";
import whitening from "../../../assets/images/whitening.png";
import Service from "./Service";

const Services = () => {
    const services = [
        {
            id:1,
            name:'Fluride Treatment',
            details:' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error adipisci eius ea, magnam nesciunt maiores.',
            icon:fluride
        },
        {
            id:1,
            name:'Cavity  Treatment',
            details:' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error adipisci eius ea, magnam nesciunt maiores.',
            icon:cavity
        },
        {
            id:1,
            name:'TeethTreatment',
            details:' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error adipisci eius ea, magnam nesciunt maiores.',
            icon:whitening
        },
    ]
  return (
    <div className="mt-16 ">
      <div className="text-center">
        <h3 className="text-primary text-lg uppercase"> Our Services</h3>
        <h2 className="text-3xl mt-2"> Services We Provides</h2>
       
      </div>
      <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {
            services.map(service => <Service key={service.id} service={service}></Service>)
        }
      </div>
    </div>
  );
};

export default Services;
