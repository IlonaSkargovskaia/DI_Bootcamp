import {useState, useEffect} from 'react';

const TestF = (props) => {
    const [title, setTitle] = useState('Test Function');

    //for componentDidMount
    useEffect(() => {
        console.log('Use effect');
    }, []);

    //for updating - listening changes in title
    useEffect(() => {
        console.log('Use effect');

        //wilunmount
        return () => {
            console.log('unmount');
        }
    }, [title]);

    return (
        <>
            <h1>{title}</h1>
            <input onChange={e => setTitle(e.target.value)} />
        </>
    )
}

export default TestF;