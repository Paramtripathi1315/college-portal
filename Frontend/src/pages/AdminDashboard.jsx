import React from 'react';
import { Link } from 'react-router-dom';
import '..styles/AdminDashboard.css';

function AdminDashboard() {
  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>

      <div className="dashboard-grid">
        <Link to="/admin/admissions" className="dashboard-card">
          <h2>Manage Admissions</h2>
          <p>View, approve or reject admission forms</p>
        </Link>

        <Link to="/admin/notices" className="dashboard-card">
          <h2>Post Notices</h2>
          <p>Create and update student notices</p>
        </Link>

        <Link to="/admin/faculty" className="dashboard-card">
          <h2>Faculty Panel</h2>
          <p>Add or manage faculty details</p>
        </Link>

        <Link to="/admin/students" className="dashboard-card">
          <h2>Student Records</h2>
          <p>Access academic and personal student records</p>
        </Link>

        <Link to="/admin/gallery" className="dashboard-card">
          <h2>Manage Gallery</h2>
          <p>Upload and organize gallery images</p>
        </Link>

        <Link to="/admin/grievances" className="dashboard-card">
          <h2>Grievance Panel</h2>
          <p>Address and respond to student issues</p>
        </Link>
      </div>
    </div>
  );
}

export default AdminDashboard;
