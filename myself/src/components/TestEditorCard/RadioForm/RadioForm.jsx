import s from "./RadioForm.module.scss";
import {useState} from "react";
import {CategoriesInput} from "./CategoriesInput/CategoriesInput";

export const RadioForm = ({
                              radios,
                              categories,
                              onDeleteRadio,
                              onUpdateRadioText,
                              onUpdateRadioCategory,
                              onUpdateRadioCategoryWeight
                          }) => {
    const [radioValue, setRadioValue] = useState(null)

    const handleRadioValueChange = (e) => {
        setRadioValue(e.target.value)
    }

    return (
        <form className={s.form}>
            {radios.map(r => {
                return (
                    <div key={r.id} className={s.formContainer}>
                        <div style={{flex: 1}}>
                            <button type='button' className={`${s.button} ${s.delete_button}`} onClick={(e) => {
                                onDeleteRadio(e, r.id)
                            }}>
                                X
                            </button>

                            <input type="radio"
                                   value={r.id}
                                   name={r.id}
                                   checked={radioValue === r.id}
                                   onChange={handleRadioValueChange}
                                   style={{marginLeft: '0.5rem'}}
                            />

                            <label htmlFor={r.id} onClick={() => onUpdateRadioText(r.id, r.text)}>{r.text}</label>
                        </div>

                        <CategoriesInput onUpdateRadioCategory={onUpdateRadioCategory}
                                         onUpdateRadioCategoryWeight={onUpdateRadioCategoryWeight}
                                         radioId={r.id}
                                         categories={categories}
                                         categoryWeight={r.categoryWeight}
                                         category={r.category}/>
                    </div>
                )
            })}
        </form>
    )
}
