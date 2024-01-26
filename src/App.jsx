import { useEffect, useState } from 'react'
import './App.css'
import UsersModal from './components/UsersModal/UsersModal'
import UsersTable from './components/UsersTable/UsersTable'
import { fetchCustomerData, saveNewUserData } from './services/CustomerService';
import { fetchNearestCustomerList } from './services/SearchNearestCustomers';
import NearestCustomers from './components/NearestCustomers/NearestCustomers';

function App() {
    const [openUsersModal, setOpenUsersModal] = useState(false);
    const [openNearestCustomersModal, setOpenNearestCustomersModal] = useState(false);
    const [newUserData, setNewUserData] = useState(null);
    const [customerList, setCustomerList] = useState(null);

    const handleUsersModalClick = () => {
        setOpenUsersModal(true);
    };

    const handleUserModalClose = (data) => {
        setOpenUsersModal(false);
        saveNewUser(data);
    };

    const handleCustomersRouteClose = () => {
        setOpenNearestCustomersModal(false);
    };

    const saveNewUser = async (userData) => {
        try {
            const response = await saveNewUserData(userData);

            if (response) {
                userData = [userData];
                setNewUserData(userData);
            }
        } catch (error) {
            console.log('error', error);
            throw new Error(error);
        }
    };

    const getNearestCustomerList = async () => {
        const response = await fetchNearestCustomerList();
        
        setCustomerList(response);
        setOpenNearestCustomersModal(true);
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetchCustomerData();
                setNewUserData(response);
            } catch (error) {
                console.log('error', error);
                throw new Error(error);
            }
        }

        fetchData();
    }, []);

  return (
    <>
        <div className='header-wrapper'>
            <h1>House Cleaning</h1>
            <div>
                <button style={{marginTop: 25, marginRight: 12}} onClick={handleUsersModalClick}>Cadastrar</button>
                <button style={{marginTop: 25}} onClick={getNearestCustomerList}>Verificar Rota</button>
            </div>
        </div>
        <UsersTable userData={newUserData} />
        { openUsersModal && 
            <UsersModal onClose={handleUserModalClose} />
        }
        { openNearestCustomersModal && 
            <NearestCustomers onClose={handleCustomersRouteClose} customerList={customerList} />
        }
    </>
  )
}

export default App
