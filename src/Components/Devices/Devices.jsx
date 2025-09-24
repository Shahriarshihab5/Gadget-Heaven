import React, { useEffect, useState } from 'react';
import Device from '../Device/Device';
const Devices = ({category}) => {
const [device,setDevice] = useState([]);

useEffect (()=>{

fetch('./Device.json')
.then(res=>res.json())
.then(data =>setDevice(data))

},[]);
const filteredDevices =
    category === "All Products"
      ? device
      : device.filter((d) => d.category === category); 

    return (
        
        <div className="mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDevices.map((device) => (
            <Device device={device} key={device.product_id} />
          ))}
        </div>
      </div>
    );
};

export default Devices;