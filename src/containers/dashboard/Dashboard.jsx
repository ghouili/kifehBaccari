import "./dashboard.css";
import React, { useEffect, useState } from "react";
import { BarStatsChart } from "../../components";
import axios from "axios";
import { path } from "../../utils/Variables";

const Dashboard = () => {
  
  const [reports, setReports] = useState([]);

  useEffect(() => {
    
    fetchdata();
  }, []);

  const fetchdata = async () => {
    try {
      const response = await axios.get(`${path}report`);
      // console.log("response");
      // console.log(response.data.data);
      setReports(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-full p-4">
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white rounded border p-6">Clients</div>

        <div className="bg-white rounded border p-6">Clients</div>

        <div className="bg-white rounded border p-6">Clients</div>

        <div className="bg-white rounded border p-6">Clients</div>
      </div>

      <div>
        <h1>Stats Chart</h1>
        <BarStatsChart reports={reports} />
      </div>
    </div>
  );
};

export default Dashboard;
