import React, { useState, memo, useCallback } from 'react'
import { Link } from 'react-router-dom';
import { remove } from '../../function/product';
import CheckedCard from '../CheckedCard/CheckedCard';

const Content = memo(({ data, loadData, search, filterDrop }) => {
    const [showCheck, setShowCheck] = useState(false);
    const [dataCheck, setDataCheck] = useState({
        msg: "แก้ไขข้อมูลไม่สำเร็จ",
        check: false,
        fn: () => {
            setShowCheck(false);
        }
    })

    const handleRemove = async (id) => {
        remove(id)
            .then(res => {
                console.log("Remove response: ", res)
                setDataCheck({
                    msg: "ลบข้อมูลสำเร็จ",
                    check: true,
                    fn: () => {
                        setShowCheck(false);
                    }
                })
                setShowCheck(true);
                loadData();
            })
            .catch((err) => {
                setShowCheck(true)
                console.log(err)
            })
    }

    const filterData = (item) => {
        if (search === '') { return true }

        const searchLower = search.toLowerCase();
        return (
            item.name.toLowerCase().includes(searchLower) ||
            item.detail.toLowerCase().includes(searchLower) ||
            item.price.toString().includes(searchLower)
        );
    };

    const sortData = useCallback(
        (a, b) => {
            switch (filterDrop) {
                case 'moreToless':
                    console.log("moreToless")
                    return b.price - a.price
                case 'lessToMore':
                    console.log("lessToMore");
                    return a.price - b.price
                default:
                    return new Date(a.update_at) - new Date(b.update_at);
            }
        }, [filterDrop])
    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Detail</th>
                        <th scope="col">Price</th>
                        <th scope='col'>Edit</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data?.sort((a, b) => sortData(a, b))
                            .filter(filterData).map((product, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{product.name}</td>
                                        <td>{product.detail}</td>
                                        <td>{product.price}</td>
                                        <td>
                                            <Link to={'/edit/' + product._id}>
                                                <button
                                                    className='btn btn-secondary'>
                                                    edit
                                                </button>
                                            </Link>
                                        </td>
                                        <td>
                                            <button
                                                onClick={() => { handleRemove(product._id) }}
                                                className='btn btn-danger'>
                                                delete
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })
                    }
                </tbody>
            </table>
            {showCheck && <CheckedCard msg={dataCheck.msg} checkError={dataCheck.check} fnOk={dataCheck.fn} />}
        </>
    )
})

export default Content
