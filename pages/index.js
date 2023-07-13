import { useDispatch, useSelector } from "react-redux"
import { testActions } from "@/store/test-slice"

const Home = () => {
    const dispatch = useDispatch()
    const { isHome } = useSelector(state => state.test)
    const changeHandler = () => {
        if (isHome) dispatch(testActions.goThere())
        else dispatch(testActions.goHome())
    }

    return (<div>
        {isHome ? <div>Home</div> : <div>There</div>}
        <button onClick={changeHandler}>Change</button>
    </div>)
}

export default Home