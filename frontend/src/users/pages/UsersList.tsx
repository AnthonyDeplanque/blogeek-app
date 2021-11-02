import { Box, Divider } from "@material-ui/core"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import MainCard from "../../common/components/MainCard"
import { useTypedSelector } from "../../redux/rootReducer"
import RootState from "../../redux/rootState"
import UserLine from "../components/UserLine"
import usersActions from "../redux/usersActions"
import { Users } from "../../models/Users"
import { useTheme } from "@mui/material"
import Loading from "../../common/components/Loading"

interface UsersListProps { };
const UsersList: React.FC<UsersListProps> = (props) => {

  const theme = useTheme()
  const { data } = useTypedSelector((state: RootState) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(usersActions.getUsers());
  }, [])

  return (
    data && data.length ?
      (<MainCard title="Liste des utilisateurs">

        {data.map((user: Users, index) => {
          return (<>
            <UserLine user={user} />
            {index < data.length - 1 ? <Divider style={{ backgroundColor: `${theme.palette.primary.contrastText}66` }} /> : ''}
          </>)
        })
          // <AutoSizer>
          //   {({ height, width }) => (
          //     <FixedSizeList
          //       height={height}
          //       width={width}
          //       itemCount={data.length}
          //       itemSize={70}>
          //       {({ index, style }) => {
          //         const user: Users = data[index]
          //         console.log(user);
          //         return (
          //           <Box height={70} style={style}>
          //             <UserLine user={user} />
          //             {index < data.length - 1 ? <Divider /> : ''}
          //           </Box>
          //         )
          //       }}
          //     </FixedSizeList>
          //   )}
          // </AutoSizer>
        }</MainCard >)
      : <Loading />

  )
}
export default UsersList;