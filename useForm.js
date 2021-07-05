import { useState } from 'react'

export const useForm = ( initialState = {} ) => {

    const [values, setValues] = useState( initialState );

    const [edit, setEdit] = useState({ id:'', status: false });

    const handleInputChange = ({ target }) => {
        setValues({ 
            ...values, 
            [target.name]: target.value 
        });

    }


    
    const resetForm = ()=>{
        setValues( initialState )
        setEdit( { id:'', status: false } )
    }

    const handleEditButton  = ( {id, desc} ) =>{
        console.log(desc)
    
        setValues( {desc} );

        setEdit({ id, status: true})

    }

    return[ 
        values,
        handleInputChange,
        resetForm,
        handleEditButton,
        edit
    ];
}
