/** Hooks & Methods */
import { useCallback, useState } from "react";
import useGetUsers from "./features/users/hooks/useGetUsers";

/** Layouts */
import Row from "./layouts/Row";
import Main from "./layouts/Main";
import NavBar from "./layouts/NavBar";
import SideBar from "./layouts/SideBar";

/** Components */
import H2 from "./components/texts/H2";
import UserInfo from "./features/users/components/UserInfo";
import UsersList from "./features/users/components/UsersList";
import Paragraph from "./components/texts/Paragraph";
import UserUpdateForm from "./features/users/components/UserUpdateForm";

/** Styles */
import './index.css'
import IconButton from "./components/buttons/IconButton";

/** Assets */
import edit from './assets/icons/buttons/edit.png';

const App = () => {

  const {
    users,
    loading,
    error,
    refresh,
    updateUserData
  } = useGetUsers();

  const [selectedUser, setSelectedUser] = useState(null);
  const [editing, setEditing] = useState(false);

  return (
    <div className="container">
      <NavBar />
      <SideBar>
        <H2>Users</H2>
        <UsersList
          users={users}
          loading={loading}
          selectedUserId={selectedUser ? selectedUser.id : null}
          onUserClick={setSelectedUser}
        />
      </SideBar>
      <Main>
        <Row className="justify-between w100">
          <Row className="justify-start align-center gap-1">
            <H2 className="m0">Profile</H2>
            {
              selectedUser &&
              <Paragraph size="p-lg">
                - {selectedUser.id}
              </Paragraph>
            }
          </Row>
          {
            selectedUser &&
            <IconButton
              icon={edit}
              onClick={() => setEditing(prev => !prev)}
              size="ibtn-md"
              iconSize="ic-md"
            />
          }
        </Row>
        {selectedUser && !editing &&
          <UserInfo user={selectedUser} />
        }
        {
          selectedUser && editing &&
          <UserUpdateForm
            user={selectedUser}
            onUpdate={(userUpdated) => {
              updateUserData(selectedUser.id, userUpdated);
              setSelectedUser(userUpdated);
              setEditing(false);
            }}
          />
        }
      </Main>
    </div>
  );
}

export default App;
