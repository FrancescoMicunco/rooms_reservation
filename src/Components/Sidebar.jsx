import React from 'react'
import '../styles/dashBoard.css'
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import SettingsIcon from '@mui/icons-material/Settings';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <table>
                <tbody>
                    <tr><td><BookOnlineIcon style={{ fontSize: '30px' }} /></td><td className='textSidebar'>Reservation</td></tr>
                    <tr><td><HowToRegIcon style={{ fontSize: '30px' }} /></td><td className='textSidebar'>Registration</td></tr>
                    <tr><td><ManageAccountsIcon style={{ fontSize: '30px' }} /></td><td className='textSidebar'>Management</td></tr>
                    <tr><td><SettingsIcon style={{ fontSize: '30px' }} /></td><td className='textSidebar'>Settings</td></tr>
                </tbody>
            </table>
        </div>
    );
}

export default Sidebar 