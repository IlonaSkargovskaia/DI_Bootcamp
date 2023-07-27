import { useContext } from 'react';
import { AppContext } from '../App';

const SubChild = (props) => {

    const {text, setText, a} = useContext(AppContext)

    return (
        <>
            <h2>Sub Child {a}</h2>
            Props: {text} {a}
            <div>
                <button onClick = {() => {setText('Bla bla bla')}}>Change text</button>
            </div>
        </>
    )
}

export default SubChild;