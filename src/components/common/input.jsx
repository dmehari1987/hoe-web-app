import React from 'react'

const Input = ({ name, lable, value, onChange  }) => {
    return ( 
        <div>
            <h1 className= "text-center">Login</h1> 
                <FormGroup>
                    <Label htmlFor={ name }>{ lable }</Label> 
                    <Input 
                        onChange={ onChange } 
                        value= { value } 
                        name= { name }
                        id={ name } 
                        type="text" 
                        placeholder="example" />
                </FormGroup>
        </div>
     );
}
 
export default Input;