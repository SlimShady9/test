import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Line } from "react-chartjs-2";
import { costXWeight } from "@/Utils/FetchGraph";

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: "top",
        },
        title: {
            display: true,
            text: "Chart.js Bar Chart",
        },
    },
};

const WeightGraph = () => {
    const [loading, setLoading] = useState(false);

    const [data, setData] = useState({
        datasets: [
            {
                label: "Costo",
                data: 0,
                backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
            {
                label: "Precio",
                data: 0,
                backgroundColor: "rgba(53, 162, 235, 0.5)",
            },
        ],
    });
    useEffect(() => {
        const fetchData = async () => {
            const labelSet = [];
            const dataSet1 = [];
            const dataSet2 = [];
            const dataSet3 = [];
            const res = await costXWeight();
            for (const val of res) {
                if(val.weigh!=null && val.cost && val.price && val.profits){
                dataSet1.push(val.cost);
                dataSet2.push(val.price);
                dataSet3.push(val.profits);
                labelSet.push(val.weigh);
                }
                // labelSet.push(val.name)
            }
            setData({
                labels: labelSet,
                datasets: [
                    {
                        label: "Costo",
                        data: dataSet1,
                        backgroundColor: "rgba(255, 99, 132, 0.5)",
                        borderColor: "rgba(255, 99, 132, 0.5)",
                        type: "line",
                    },
                    {
                        label: "Precio",
                        data: dataSet2,
                        backgroundColor: "rgba(53, 162, 235, 0.5)",
                        borderColor: "rgba(53, 162, 235, 0.5)",
                        type: "line",
                    },
                ],
            });
        };

        fetchData();
    }, []);
    if (loading) return <p>Loading...</p>;
    return (
    <>
    <div>
    <h1 className="text-blue-primary text-3xl mb-1 font-bold  text-center ease-in duration-200">
        Peso Total por Ventas
    </h1>
    <Bar 
    className="bg-semiwhite rounded-xl shadow-xl"
    data={data} 
    options={options}/>
    </div>
    </>
    )
};
export default WeightGraph;
