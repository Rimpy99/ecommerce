import { Dispatch, SetStateAction } from 'react';
import { Box, Button } from "@mui/material";

type OptionsType = {
    color: string,
    type: string,
    sex: string,
    min_price: number,
    max_price: number, 
}

type FilterMenuPropsType = {
    colors: string[],
    types: string[],
    options: OptionsType,
    setOptions: Dispatch<SetStateAction<OptionsType>>,
}

const FilterMenu = ({colors, types, options, setOptions}: FilterMenuPropsType) => {
    return(
        <>
            <Box>
                <Button onClick={() => setOptions({...options, color: ''})}>all</Button>
                { 
                    colors.map((color) => (
                        <Button onClick={() => setOptions({...options, color: color})}>{color}</Button>
                    ))
                }
            </Box>
            <Box>
                <Button onClick={() => setOptions({...options, type: ''})}>all</Button>
                { 
                    types.map((type) => (
                        <Button onClick={() => setOptions({...options, type: type})}>{type}</Button>
                    ))
                }
            </Box>
            <Box>
                <Button onClick={() => setOptions({...options, sex: ''})}>All</Button>
                <Button onClick={() => setOptions({...options, sex: 'M'})}>Men</Button>
                <Button onClick={() => setOptions({...options, sex: 'F'})}>Women</Button>
            </Box>
        </>
    )
};

export default FilterMenu;