import { useSelector } from "react-redux";
import { Box } from "@material-ui/core";

const UserPage = ({ id }) => {
    const dataUser = useSelector(state => state.dataUser)
    
    const { 
        name, 
        avatar_url, 
        bio, 
        techs, 
        works, 
        course_module, 
        email, 
        contact, 
    } = dataUser

    return (
        <Box component="div" m={1}>
            {name}
        </Box>
    )
}

export default UserPage;
