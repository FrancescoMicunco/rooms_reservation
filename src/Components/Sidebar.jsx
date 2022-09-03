import React from 'react'
import '../styles/dashBoard.css'
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import SettingsIcon from '@mui/icons-material/Settings';



const Sidebar = ({ setItem }) => {



    const handleEvent = (e) => {
        e.preventDefault();
        console.log('this is e=>', e.target.innerHTML)
        setItem(e.target.innerHTML)
    }
    return (
        <div className="sidebar">
            <table>
                <tbody>
                    <tr onClick={handleEvent}>
                        <td><BookOnlineIcon style={{ fontSize: '30px' }} /></td>
                        <td className='textSidebar'>Reservation</td>
                    </tr>
                    <tr onClick={handleEvent}>
                        <td><HowToRegIcon style={{ fontSize: '30px' }} /></td>
                        <td className='textSidebar'>Registration</td>
                    </tr>
                    <tr onClick={handleEvent}>
                        <td><ManageAccountsIcon style={{ fontSize: '30px' }} /></td>
                        <td className='textSidebar'>Management</td>
                    </tr>
                    <tr onClick={handleEvent}>
                        <td><SettingsIcon style={{ fontSize: '30px' }} /></td>
                        <td className='textSidebar'>Settings</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Sidebar 