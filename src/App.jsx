import { useState } from 'react'
import './App.css'
import UsersModal from './components/UsersModal/UsersModal'
import UsersTable from './components/UsersTable/UsersTable'


function App() {
    const [openUsersModal, setOpenUsersModal] = useState(false);
    const [newUserData, setNewUserData] = useState(null);
    const handleUsersModalClick = () => {
        setOpenUsersModal(true);
    };

    const handleModalClosed = (data) => {
        setOpenUsersModal(false);
        setNewUserData(data);
    };

  return (
    <>
        <h1>Hello!</h1>
        <UsersTable userData={newUserData} />
        <button style={{marginTop: 25}} onClick={handleUsersModalClick}>Cadastrar</button>
        { openUsersModal && 
            <UsersModal onClose={handleModalClosed} />
        }
         
    </>
  )
}

export default App
