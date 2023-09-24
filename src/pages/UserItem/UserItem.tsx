import { User } from "../../api";

type UserItemType = {
  user: User;
};

export const UserItem = (props: UserItemType) => {
    const {user} = props;
    return (
        <div className="user">
            <div className="user__content">
                <div>
                    {user.name + ", " + user.age}
                </div>
            </div>
        </div>
    );
};