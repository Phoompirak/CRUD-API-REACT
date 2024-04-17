import React, { useState } from 'react';
import styles from './DropdownMenu.module.css'; // Import CSS file for styling

const Dropdown = ({ onSelect }) => {
    const [selectedValue, setSelectedValue] = useState('');

    const handleDropdownChange = (e) => {
        const value = e.target.value;
        setSelectedValue(value);
        onSelect(value); // เรียกใช้ callback function ที่ถูกส่งเข้ามา
    };

    return (
        <div className={styles.dropdown}>
            <select
            value={selectedValue}
            onChange={handleDropdownChange}
            className={styles.dropdown_toggle}>
                <option value="">เรียงตามเวลา</option>
                <option value="moreToless">มาก-น้อย</option>
                <option value="lessToMore">น้อย-มาก</option>
            </select>
        </div>
    )
}

export default Dropdown;