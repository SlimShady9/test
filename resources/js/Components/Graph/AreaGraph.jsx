import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { costxSellBymonth } from "@/Utils/FetchGraph";

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

const Horizontalchart = () => {
    const [loading, setLoading] = useState(false);
    const labels = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
    ];
    const [data, setData] = useState({
        labels: labels,
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
            const res = await costxSellBymonth();
            for (const val of res) {
                dataSet1.push(val.cost);
                dataSet2.push(val.price);
                labelSet.push(val.month);
                // labelSet.push(val.name)
            }
            setData({
                labels: labelSet,
                datasets: [
                    {
                        label: "Costo",
                        data: dataSet1,
                        backgroundColor: "rgba(255, 99, 132, 0.5)",
                    },
                    {
                        label: "Precio",
                        data: dataSet2,
                        backgroundColor: "rgba(53, 162, 235, 0.5)",
                    },
                ],
            });
            console.log("arrData", dataSet1, dataSet2, labelSet);
        };

        fetchData();
    }, []);
    if (loading) return <p>Loading...</p>;
    return <Bar data={data} options={options} />;
};
export default Horizontalchart;
