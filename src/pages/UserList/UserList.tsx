import { User } from '../../api';
import { UserItem } from '../UserItem/UserItem';
import {TransitionGroup, CSSTransition} from "react-transition-group";

type UserListType = {
    users: User[];
};

export const UserList = (props: UserListType) => {
    const {users} = props;

  return (
        <TransitionGroup>
            {users.map((user: any) =>
                <CSSTransition
                    key={user.id}
                    timeout={500}
                    classNames="users"
                >
                    <UserItem user={user} />
                </CSSTransition>
            )}
        </TransitionGroup>
    );
};