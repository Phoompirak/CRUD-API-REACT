import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { read, update } from '../../function/product'
import CheckedCard from '../CheckedCard/CheckedCard'
import styles from './EditForm.module.css'

const EditForm = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [showCheck, setShowCheck] = useState(false);
    const [showMsg, setShowMsg] = useState({ msg: "แก้ไขข้อมูลไม่สำเร็จ", check: false })
    const [data, setData] = useState({
        name: '',
        detail: '',
        price: '',
    })

    const handleChangeForm = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(data);
        const { name, detail, price } = data;
        if (detail === '') { data.detail = '-' }

        if (name === '' && price === '') {
            setShowMsg({ msg: "ไม่มีชื่อหรือราคา!", check: false })
            setShowCheck(true)
            return
        } else if (name === null || detail === null || price === null) {
            setShowMsg({ msg: "มีข้อมูลบางอย่างผิดหลาด", check: false })
            setShowCheck(true)
            return
        }

        update(params.id, data)
            .then(res => {
                console.log(res.data)
                setShowMsg({ msg: "แก้ไขข้อมูลสำเร็จ", check: true })
                setShowCheck(true)
                navigate('/')
            })
            .catch(err => {
                console.log("Error update:", err)
                setShowMsg({ msg: "Server อัพเดทข้อมูลผิดพลาด", check: false })
                setShowCheck(true)
            })
    }

    const loadData = async (id) => {
        read(id)
            .then((res) => {
                setData(res.data)
            })
    }
    useEffect(() => {
        loadData(params.id)
    }, [params])

    return (
        <div>
            <div className="container d-flex justify-content-center align-items-center">
                <div className={styles.wrapper}>
                    <h1>Edit Router</h1>
                        <form
                            onSubmit={handleSubmit}
                            className={styles.form_edit}
                            id='form-add-product'>
                            <div className="mb-3">
                                <label htmlFor="name" className='form-label'>Name: </label>
                                <input
                                    type="text"
                                    name="name"
                                    id='name'
                                    onChange={e => handleChangeForm(e)}
                                    placeholder='name'
                                    value={data.name}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="detail" className='form-label'>Detail: </label>
                                <input
                                    type="text"
                                    name="detail"
                                    id='detail'
                                    onChange={e => handleChangeForm(e)}
                                    placeholder='detail'
                                    value={data.detail}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="price" className='form-label'>Price: </label>
                                <input
                                    type="number"
                                    name="price"
                                    id='price'
                                    onChange={e => handleChangeForm(e)}
                                    placeholder='price'
                                    value={data.price}
                                />
                            </div>
                            <button className="btn btn-primary">Submit</button>
                            {showCheck && <CheckedCard msg={showMsg.msg} checkError={showMsg.check} fnOk={() => navigate('/')} />}
                        </form>
                </div>
            </div>
        </div>
    )
}

export default EditForm
