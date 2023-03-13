import {useEffect, useState} from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Bar } from 'react-chartjs-2';
import { costxSellBymonth } from '@/Utils/FetchGraph';
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' ,
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
      },
    },
  };

const Horizontalchart =() => {
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    const [data, setData] = useState({
      labels,
      datasets: [
        {
          label: 'Dataset 1',
          data: labels.map(() => 1),
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
          label: 'Dataset 2',
          data: labels.map(() => 1),
          backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
      ],
      });
    useEffect(()=> {
       const fetchData= async()=> {
           const labelSet = []
           const dataSet1 = [];
           const dataSet2 = [];
           const res = await costxSellBymonth();
            for (const val of res) {
                dataSet1.push(val.cost);
                dataSet2.push(val.price)
                labelSet.push(val.month)
                // labelSet.push(val.name)
            }
            setData({
              labels: labelSet,
              datasets: [
                {
                  label: 'Costo',
                  data: dataSet1,
                  backgroundColor: 'rgba(255, 99, 132, 0.5)',
                },
                {
                  label: 'Precio',
                  data: dataSet2,
                  backgroundColor: 'rgba(53, 162, 235, 0.5)',
                },
              ],
              })
            console.log("arrData", dataSet1, dataSet2, labelSet)
        }
        
        fetchData();
    },[])
   
    return(

            <Bar data={data} options={options}/>)
}
export default Horizontalchart;