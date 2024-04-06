import React, { useEffect, useState } from 'react';
import Header from './Header';
import Todo from './Todo';

const List = () => {
    const [arr, setArr] = useState([
        {
            id: 1,
            name: "hit the gym"
        },
        {
            id: 2,
            name: "take a bus"
        },
        {
            id: 3,
            name: "read the book"
        },
        {
            id: 4,
            name: "play game"
        }
    ])
    useEffect(() => {
        setArr(JSON.parse(localStorage.getItem("arr")))
    }, [])

    const remove = (id) => {
        setArr(arr.filter(item => item.id != id))
        localStorage.setItem("arr", JSON.stringify(arr.filter(item => item.id != id)))
    }
    const add = (text) => {
        if (arr.length > 0) {
            setArr([...arr, { id: arr[arr.length - 1].id + 1, name: text }])
            localStorage.setItem("arr", JSON.stringify([...arr, { id: arr[arr.length - 1].id + 1, name: text }]))
        } else {
            setArr([...arr, { id: 1, name: text }])
            localStorage.setItem("arr", JSON.stringify([...arr, { id: 1, name: text }]))
        }
    }

    return (
        <div className='contain'>
            <Header add={add} />
            <div className='list'>
                {
                    arr.map((item, index) => (
                        <Todo todo={item} key={index} remove={remove} />
                    ))
                }
            </div>
        </div>
    );
}

export default List;
