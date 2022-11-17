import React, { useState } from 'react';
import AppointBanner from '../appointmentBanner/AppointBanner';
import AvailableAppoint from '../availableappoint/AvailableAppoint';

const Appointment = () => {
  const [selected, setSelected] = useState(new Date());

    return (
        <div>
            <h2 className='text-center text-3xl text-secondary font-medium mb-3 '> Appointment </h2>
            <AppointBanner 
            selected={selected}
            setSelected={setSelected}
            ></AppointBanner>
            <AvailableAppoint
              selected={selected}
              setSelected={setSelected}
            ></AvailableAppoint>
        </div>
    );
};

export default Appointment;