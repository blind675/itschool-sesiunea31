import UserItem from "./UserItem";

export function UserList(props) {
  // UserList primeste state-ul de la parinte ca props, si il afiseaza pe ecran.
  const {users} = props;

  return (
    <div>
      {users.map((user, index) => {
        return <UserItem key={index} name={user.name} email={user.email} />;
      })}
    </div>
  );
}
