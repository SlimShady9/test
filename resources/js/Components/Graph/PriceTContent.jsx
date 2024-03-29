import { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { priceXTContent } from "@/Utils/FetchGraph";
import { toStringTipoDeCargaEnum } from "@/Constants/TipoDeCargaEnum";

const PriceTServicePie = () => {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "bottom",
            },
        },
    };
    
    const [loading, setLoading] = useState(false);

    const [data, setData] = useState({
        datasets: [
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
            const res = await priceXTContent();
            for (const val of res) {
                if(val.price!=null && val.t_carga){
                dataSet1.push(val.price);
                labelSet.push(toStringTipoDeCargaEnum(val.t_carga));
                }
                // labelSet.push(val.name)
            }
            setData({
                labels: labelSet,
                datasets: [
                    {
                        label: "Precio",
                        data: dataSet1,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.5)',
                            'rgba(54, 162, 235, 0.5)',
                            'rgba(255, 206, 86, 0.5)',
                            'rgba(75, 192, 192, 0.5)',
                            'rgba(153, 102, 255, 0.5)',
                            'rgba(255, 159, 64, 0.5)',
                          ],
                        type: "pie",
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
    <h1 className="text-blue-primary text-2xl mb-1 font-bold  text-center ease-in duration-200">
        Cobro por Tipo de Servicio
    </h1>
    <Pie 
    className="bg-semiwhite rounded-xl shadow-xl m-5"
    data={data} 
    options={options}
    />
    </div>
    </>
    )
};
export default PriceTServicePie;
