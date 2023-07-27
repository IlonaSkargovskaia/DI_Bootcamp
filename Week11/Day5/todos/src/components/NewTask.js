import {useState, useEffect} from 'react';

const NewTask = (props) => {

    const [task, setTask] = useState('');
    const [list, setList] = useState([]);


    const handleForm = (e) => {
        e.preventDefault();

        if (task !== '') {
            setList((prevList) => [...prevList, task]);
            setTask('');   
        }
        
    }

    const handleInput = (e) => {
        setTask(e.target.value);
    }

    const handleDelete = (itemToDelete) => {
        setList((prevList) => prevList.filter((item) => item !== itemToDelete))
    }

    return(
        <>
            <div className='todosBlock'>
                
                {
                    (list.length === 0) ? 
                        <div className='noTodos'>:) You have no todo's left</div>
                    :
                    list.map((item, index) => (
                        <div key={index} className='newTask' onClick={() => handleDelete(item)}>
                            {item}
                        </div>
                    ))
                    
                }
            </div>

            
            <form onSubmit={handleForm}>
                <label>Add a new todo:</label>
                <input type='text' onChange={handleInput} className='addTask'/>
            </form>
            
        </>
    )

}

export default NewTask;