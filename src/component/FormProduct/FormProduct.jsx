import { useState, useEffect, memo } from 'react'

import { create, getdata } from '../../function/product'
import styles from './FormProduct.module.css'
import { FaSearch } from "react-icons/fa";

import Content from './Content';
import CheckedCard from '../CheckedCard/CheckedCard';
import Dropdown from '../Dropdown/Dropdown';

const FormProduct = memo(() => {
    const [data, setData] = useState([]);

    const [showForm, setShowform] = useState(false);
    const [showCheck, setShowCheck] = useState(false);
    const [showMsg, setShowMsg] = useState({ msg: "แก้ไขข้อมูลไม่สำเร็จ", check: false })

    const [search, setSearch] = useState('');
    const [dbValue, setDbValue] = useState('');
    const [selectDrop, setSelectDrop] = useState('');

    const loadData = async () => {
        getdata()
            .then(res => setData(res.data))
            .catch((err) => console.log(err))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const inputs  = document.querySelectorAll('form input');
        const formData = {};
        inputs.forEach(input => {
            formData[input.name] = input.value;
        })

        console.log("formData :", formData);
        const { name, detail, price } = formData;

        if (!detail || detail === '') { formData.detail = '-' }
        if (name === '' && price === '') {
            setShowMsg({ msg: "ไม่มีชื่อหรือราคา!", check: false })
            setShowCheck(true)
            return
        } else if (typeof price !== 'number') {
            setShowMsg({ msg: "ราคาต้องเป็นตัวเลขเท่านั้น!", check: false })
            setShowCheck(true)
        } else if (name === null || detail === null || price === null) {
            setShowMsg({ msg: "มีข้อมูลบางอย่างผิดหลาด", check: false })
            setShowCheck(true)
            return
        }
        
        create(formData)
        .then(res => {
            setShowMsg({ msg: "เพิ่มข้อมูลสำเร็จ", check: true })
            setShowCheck(true)
            loadData()
        })
        .catch((err) => {
            console.log(err)
            setShowMsg({ msg: "Server อัพเดทข้อมูลผิดพลาด", check: false })
            setShowCheck(true)
        })
        
        document.querySelector('#form-add-product').reset();
    }
    
    const handleDropdownSelect = (selectValue) => {
        // console.log("value select:", selectValue)
        setSelectDrop(selectValue);
    }

    const searchChange = (e) => {
        setSearch(e.target.value)
    }

    useEffect(() => {
        const timerId = setTimeout(() => {
            console.log("Send search: ", search);
            setDbValue(search)
        }, 600)
        return () => clearTimeout(timerId)
    }, [search])

    useEffect(() => {
        loadData()
    }, [])

    return (
        <>
            <div className='container my-3'>
                <div className='d-flex justify-content-between align-items-center'>
                    <div className="mb-3 d-flex">
                        <label htmlFor="search-data" className='form-label px-2'><FaSearch /></label>
                        <input
                            type="text"
                            className='form-control border border-secondary-subtle'
                            id='search-data'
                            onChange={(e) => searchChange(e)}
                            placeholder='Enter details product...' />
                    </div>
                    <div className='mb-3 d-flex gap-3'>
                        <div>
                            <input
                                onClick={() => setShowform(!showForm)}
                                type="checkbox"
                                className="btn-check"
                                id="btn-check-outlined"
                                autoComplete="off" />
                            <label className="btn btn-outline-primary" htmlFor="btn-check-outlined">Add</label>
                        </div>
                        <div>
                            <Dropdown onSelect={handleDropdownSelect} />
                        </div>
                    </div>
                </div>
                {
                    showForm ?
                        <div className={styles.con_center}>
                            <form onSubmit={handleSubmit}
                                id='form-add-product'
                                className={styles.fade_in}>
                                <div className="mb-3">
                                    <label htmlFor="name" className='form-label'>Name: </label>
                                    <input
                                        type="text"
                                        name="name"
                                        id='name'
                                        placeholder='name' />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="detail" className='form-label'>Detail: </label>
                                    <input
                                        type="text"
                                        name="detail"
                                        id='detail'
                                        placeholder='detail' />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="price" className='form-label'>Price: </label>
                                    <input
                                        type="number"
                                        name="price"
                                        id='price'
                                        placeholder='price' />
                                </div>
                                <button
                                onSubmit={handleSubmit}
                                type='submit'
                                className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                        : null
                }
                <Content data={data} loadData={loadData} search={dbValue.toLowerCase().trim()} filterDrop={selectDrop} />
            </div>
            {showCheck && <CheckedCard msg={showMsg.msg} checkError={showMsg.check} fnOk={() => setShowCheck(!showCheck)} />}
        </>
    )
})

export default FormProduct