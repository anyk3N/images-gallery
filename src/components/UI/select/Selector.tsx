import { useState } from "react";
import type { SelectorProps } from "../../../types/types";
import styles from "./Select.module.css"

const Selector = ({options, defaultValue, onSortChange}: SelectorProps) => {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState<string>("");
    const handleSelect = (value: string) => {
        setSelected(value);
        onSortChange(value);
        setOpen(false);
    };
    const selectedLabel = options.find(opt => opt.value === selected)?.name || defaultValue;

    return (
        <div className={styles.sortContainer}>
            <span className={styles.sortLabel}>Sort by</span>
            <div className={styles.sortDropdown}>
                <button
                    type="button"
                    className={styles.sortButton}
                    onClick={() => setOpen((prev: any) => !prev)}
                >
                    {selectedLabel}
                </button>
                <div className={`${styles.sortOptions} ${open ? styles.sortOptionsShow : ""}`}>
                    {options.map(option => (
                    <div
                        key={option.value}
                        className={styles.sortOption}
                        onClick={() => handleSelect(option.value)}
                        data-value={option.value}
                    >
                        {option.name}
                    </div>
                ))}
                </div>
            </div>
        </div>

      );
}
 
export default Selector;