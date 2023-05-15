import React, {useEffect, useState} from "react";
import Select from "react-select";
import s from './CategoriesInput.module.scss'

export const CategoriesInput = ({
                                    radioId,
                                    categories,
                                    categoryWeight,
                                    category,
                                    onUpdateRadioCategory,
                                    onUpdateRadioCategoryWeight
                                }) => {
    const [currentCategoryWeight, setCurrentCategoryWeight] = useState(0)

    useEffect(() => {
        setCurrentCategoryWeight(categoryWeight)
    }, [])

    const numberInputChangeHandler = (e) => {
        setCurrentCategoryWeight(e.currentTarget.value)
    }

    const numberInputBlurHandler = (e) => {
        if (e.currentTarget.value !== '') {
            onUpdateRadioCategoryWeight(radioId, +currentCategoryWeight)
        } else {
            setCurrentCategoryWeight(0)
            onUpdateRadioCategoryWeight(radioId, 0)
        }
    }

    return (
        <div className={s.categoriesContainer}>
            <input
                className={s.numberInput}
                type="number"
                min={0}
                value={currentCategoryWeight}
                onChange={numberInputChangeHandler}
                onBlur={numberInputBlurHandler}
            />
            <Select
                className="basic-single"
                classNamePrefix="select"
                placeholder="Выберите категорию"
                name="category"
                defaultValue={category}
                options={categories}
                onChange={(choice) => onUpdateRadioCategory(radioId, choice)}
                styles={{
                    control: (baseStyles, state) => ({
                        ...baseStyles,
                        outline: 'none',
                        boxShadow: 'none',
                        borderRadius: '0.5rem',
                        border: state.isFocused
                            ? '2px solid #43cc79'
                            : '2px solid #2e8c56',
                        "&:hover": {
                            border: '2px solid #43cc79'
                        }
                    }),
                }}
            />
        </div>
    )
}