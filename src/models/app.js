import {useSelector} from "react-redux";

export const checkUserExists = () => {
    const uiState = useSelector(({uiState}) => uiState);
    return uiState.sidebar;
}
