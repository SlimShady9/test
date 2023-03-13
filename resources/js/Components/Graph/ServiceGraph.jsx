import React from "react";
import { useEffect, useState, useRef } from "react";
import { Line } from "react-chartjs-2";
import { getServicesMonth } from "@/Utils/FetchGraph";

export default function ServiceGraph(props) {
    const options = useState({
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: "Servicios x Tiempo",
            },
        },
    });
    const labels = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    const [data, setData] = useState({
        labels,
        datasets: [
            {
                fill: true,
                label: "Servicios",
                data: labels.map((res) => {
                    0;
                }),
                borderColor: "rgb(53, 162, 235)",
                backgroundColor: "rgba(53, 162, 235, 0.5)",
            },
        ],
    });

    useEffect(() => {
        getServicesMonth().then((data) => {
            var nLabels = [];
            var nData = [];
            data.map(({ month, servicios }) => {
                nLabels.push(month);
                nData.push(servicios);
            });
            setData({
                labels: nLabels,
                datasets: [
                    {
                        fill: true,
                        label: "Servicios",
                        data: nData,
                        borderColor: "rgb(53, 162, 235)",
                        backgroundColor: "rgba(53, 162, 235, 0.5)",
                    },
                ],
            });
        });
    }, []);

    return (
        <>
            <h1 className="text-blue-primary text-3xl mb-1 font-bold  text-center ease-in duration-200">
                Service
            </h1>
            <Line
                className="bg-semitransparent"
                options={options}
                data={data}
            />
        </>
    );
}
