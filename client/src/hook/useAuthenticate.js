import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const useAuthenticate = () => {
    // const [state, setstate] = useState(initialState);

    let navigatge = useNavigate()

    const { user } = useSelector((state) => state.user)

    let handleFunction = (callback) => {
        if (!user) {
            navigatge("/login")
        } else {
            callback();
        }
    }

    return { handleFunction };
}

export default useAuthenticate;
