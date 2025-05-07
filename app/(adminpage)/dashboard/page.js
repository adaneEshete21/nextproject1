import React from 'react'

const Dashboard = () => {
  return (
    <div>
        <h1 className="text-4xl font-bold text-center mb-6">Dashboard</h1>
        <p className="text-lg text-center mb-10">
            Welcome to the admin dashboard! Here you can manage your application.
        </p>
    
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-4">Admin Actions</h2>
            <ul className="list-disc list-inside">
            <li>View User Statistics</li>
            <li>Manage Content</li>
            <li>Settings</li>
            </ul>
        </div>
    </div>
  )
}

export default Dashboard
