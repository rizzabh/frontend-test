import React, { useEffect } from "react";
import { useState } from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    PieChart,
    Pie,
    Cell
} from "recharts";

const Graphs = () => {
    const data = [
        { name: "A", value: 100 },
        { name: "B", value: 200 },
        { name: "C", value: 150 },
        { name: "D", value: 50 },
        { name: "D", value: 100 },
        // Add more data points as needed
    ];

    const dataw = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
    ];

    const COLORS = ['#FF007A', '#4623E9', '#4623E9', '#FFFFFF'];
 const [change, setChange] = useState(false)
    const windowWidth = window.innerWidth;
   useEffect(() => {
        if (windowWidth < 768) {
            setChange(true);
        } else {
            setChange(false);
        }
   }, [change]);

    const [isOpen, setIsOpen] = useState(false);

    const handleOpenModal = () => {
        setIsOpen(true);
    };

    const handleCloseModal = () => {
        setIsOpen(false);
    };

    return (
        <div className=" max-md:p-0 mt-3 gap-4 2xl:gap-16 grid max-[1250px]:grid-cols-1 grid-cols-[2fr_1fr] rounded-2xl p-8 w-fit mx-12 max-md:mx-2 items-center">
            <div className="bg-white rounded-2xl p-4">
                <div className="flex gap-4 justify-between items-center px-2 m-4 relative">
                    <div>Overview</div>
                    <div className="px-4 py-2 bg-gray-100 rounded-2xl flex gap-1 cursor-pointer" onClick={handleOpenModal}>Quaterly <img src="./chevron-down 2.png" alt="" /></div>
                    {isOpen && (
                <div className="modal absolute right-0 bg-white mt-40 z-30 border shadow-md px-8 py-2 rounded-md">
                    <div className="modal-content">
                        <span className="close cursor-pointer" onClick={handleCloseModal} >&times;</span>
                        <div className="styled-list">
                <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                    <li>Item 4</li>
                </ul>
            </div>
                    </div>
                </div>
            )}</div>
                <div className="bar-graph w-full">
                    <BarChart
                        width={change ? 300 : 500}
                        height={change ? 200 : 300}
                        className="w-fit"
                        data={data}
                        responsive // Make the chart responsive
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="value" fill="#8884d8" />
                    </BarChart>
                </div>
            </div>
            <div className="rounded-2xl p-4 bg-white">
                <p className="font-semibold text-xl">Customers</p>
                <p className="text-sm text-gray-300 mb-8">Customers that buy products</p>
                <div className="pie-chart">
                    <PieChart
                        width={200}
                        height={300}
                        className="w-fit"
                        responsive // Make the chart responsive
                    >
                        <Pie
                            data={dataw}
                            cx={100}
                            cy={80}
                            innerRadius={60}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {dataw.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                    </PieChart>
                </div>
            </div>
            
        </div>
    );
};

export default Graphs;
