import { useEffect, useState } from "react";
import { useFetching } from "../../hooks/useFetching";
import { UserList } from "../UserList/UserList";
import { User, requestUsers } from "../../api";
import style from "./showUserPage.module.scss";
import { Select } from "../select/Select";

export const ShowUsersPage = () => {
  const [users, setUsers] = useState<User[]>([])
  const [page, setPage] = useState<number>(1);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [limit, setLimit] = useState<number>(4);


  const request = useFetching(async () => {
     const response: User[] = await requestUsers({
        name: name,
        age: age,
        limit: limit,
        offset: ((page - 1) * limit),
      });
      setUsers(response);
  })

  const prev = () => {
    if (page - 1 > 1)
      setPage(page - 1);
  }

  const next = () => {
    setPage(page + 1);
  }

  useEffect(() => {
    setUsers([]);
    request.fetching()
  }, [page, name, age, limit])

  return (
    <div className={style.container}>
      <div className={style.form}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={(event) => setName(event.target.value)}
          style={{
              backgroundColor: '#FFF',
              color: "#000",
          }}
        />
        <input
          type="text"
          name="age"
          placeholder="Age"
          onChange={(event) => setAge(event.target.value)}
          style={{
              backgroundColor: '#FFF',
              color: "#000",
          }}
        />
      </div>
      <hr style={{ margin: "15px 0" }} />
      {request.error && <h1>{`Произошла ошибка ${request.error}`}</h1>}
      <UserList users={users} />
      {request.isLoading && (
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: 50 }}
        >
          Loading...
        </div>
      )}
      {(!request.isLoading && users.length == 0) && (<div
          style={{ display: "flex", justifyContent: "center", marginTop: 50 }}
        >
          Users not found
        </div>)}

      <div className={style.dopSettings}>
        <div className={style.pages}>
          <div>
            By page: 
          </div>
          <Select
                value={limit}
                onChange={(value: number) => setLimit(value)}
                options={[
                    {value: 1, name: 1},
                    {value: 2, name: 2},
                    {value: 3, name: 3},
                    {value: 4, name: 4},
                ]}
            />
          <button
            type="button"
            style={{
              color: "#000",
            }}
            onClick={ prev }
          >
            { "prev" }
          </button>
          <div>
            {`Page ${page}`}
          </div>
             <button
            type="button"
            style={{
              color: "#000",
            }}
            onClick={ next }
          >
            { "next" }
          </button>
        </div>
      </div>
    </div>
  );
};