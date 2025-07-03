import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BBL from "../assets/Manipal (1).png";
import MAGE from "../assets/Manipal (2).png";
import Mage from "../assets/Manipal (3).png";

export const transactions = [
  { id: 1, image: BBL, amount: '₹2,50,000', type: 'Private Equity', year: 2023 },
  { id: 2, image: MAGE, amount: '₹1,20,000', type: 'Private Equity', year: 2024 },
  { id: 3, image: Mage, amount: '₹3,00,000', type: 'Merger', year: 2025 },
  { id: 4, image: BBL, amount: '₹2,50,000', type: 'Merger', year: 2023 },
  { id: 5, image: MAGE, amount: '₹1,20,000', type: 'IPO', year: 2024 },
  { id: 6, image: Mage, amount: '₹3,00,000', type: 'Private Equity', year: 2025 },
  { id: 7, image: BBL, amount: '₹2,50,000', type: 'IPO', year: 2023 },
  { id: 8, image: MAGE, amount: '₹1,20,000', type: 'IPO', year: 2024 },
  { id: 9, image: Mage, amount: '₹3,00,000', type: 'Merger', year: 2025 },
];

const Deals = () => {
  const [selectedType, setSelectedType] = useState('All');
  const [sortOrder, setSortOrder] = useState('latest');

  const types = ['All', ...new Set(transactions.map(t => t.type))];
  let filtered = transactions.filter(txn =>
    selectedType === 'All' || txn.type === selectedType
  );
  filtered.sort((a, b) => sortOrder === 'latest' ? b.year - a.year : a.year - b.year);

  return (
    <div className="p-8 bg-gray-100 rounded-xl">
      <h2 className="text-3xl text-slate-800 font-bold mb-6 text-center">All Transaction History</h2>

      {/* Filters */}
      <div className="flex flex-wrap gap-15 text-slate-600 mb-6 justify-center">
        <div>
          <label className="block text-sm font-medium mb-1">Filter by Type</label>
          <select value={selectedType} onChange={e => setSelectedType(e.target.value)} className="border border-gray-300 rounded px-4 py-2 z-1">
            {types.map((type, idx) => <option key={idx} value={type}>{type}</option>)}
          </select>
        </div>

        <div className=''>
          <label className="block text-sm font-medium mb-1">Sort by Year</label>
          <select value={sortOrder} onChange={e => setSortOrder(e.target.value)} className="border border-gray-300 rounded px-3 py-2 z-1">
            <option value="latest" className=''>Latest First</option>
            <option value="oldest">Oldest First</option>
          </select>
        </div>
      </div>

      {/* Cards */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 text-slate-600">
        {filtered.map((txn) => (
         <Link
  to={`/transaction/${txn.id}`}
  key={txn.id}
  className="bg-white rounded-lg shadow p-4 max-w-sm w-full text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
>
  <img
    src={txn.image}
    alt="Transaction"
    className="mx-auto h-64 object-cover rounded mb-4"
  />
  <h3 className="text-lg font-semibold text-slate-700">
    Amount: {txn.amount}
  </h3>
  <hr className="my-2 border-slate-700 w-3/4 mx-auto" />
  <p className="text-sm text-slate-700">Type: {txn.type}</p>
  <p className="text-sm text-slate-700">Year: {txn.year}</p>
</Link>

        ))}
      </div>

      {filtered.length === 0 && <p className="text-center mt-6 text-gray-600">No transactions match the selected filters.</p>}
    </div>
  );
};

export default Deals;
