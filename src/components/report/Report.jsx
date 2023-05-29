import axios from "axios";
import React, { useEffect, useState } from "react";
import { path } from "../../utils/Variables";

const Report = ({responses, isoid}) => {

  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch questions based on the ISO when the component mounts
    fetchdata();
  }, []);

  const fetchdata = async (iso) => {
    try {
      const response = await axios.get(`${path}iso/${isoid}`);
      // console.log("response");
      console.log(response.data.data);
      setData(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };
  // console.log(responses);
  return (
    <div className="p-4 h-full rounded">
      <h1 className="text-4xl font-bold mb-4 text-center">{data?.iso} Report</h1>

      <table className="w-full border-collapse border-gray-800 rounded">
        <thead>
          <tr>
            <th className="bg-gray-200 py-2 px-4">Question</th>
            <th className="bg-gray-200 py-2 px-4">Response</th>
            <th className="bg-gray-200 py-2 px-4">Conclusion</th>
            <th className="bg-gray-200 py-2 px-4">Recommendation</th>
          </tr>
        </thead>
        <tbody>
          {responses.map((response, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
              <td className="py-2 px-4">{response.questionid.question}</td>
              <td className="py-2 px-4">{response.response}</td>
              <td className="py-2 px-4">{response.response !== 'non' ? '------' : response.conclusion}</td>
              <td className="py-2 px-4">{response.response !== 'non' ? '------' : response.recommendation}</td>
              {/* <td className="py-2 px-4">{response.conclusion}</td>
              <td className="py-2 px-4">{response.recommendation}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Report;
