import { Dispatch, SetStateAction } from 'react';
import { Box, Button, Slider } from "@mui/material";

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
    priceRange: number[],
    setPriceRange: Dispatch<SetStateAction<number[]>>, 
}

const FilterMenu = ({colors, types, options, setOptions, priceRange, setPriceRange}: FilterMenuPropsType) => {

    const handlePriceRangeChange = (event: Event, newPriceChange: number | number[]) => {
        setPriceRange(newPriceChange as number[]);
    }

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
            <Box sx={{ width: 300 }}>
                <Slider
                    max={options.max_price}
                    min={options.min_price}
                    value={priceRange}
                    onChange={handlePriceRangeChange}
                    valueLabelDisplay="auto"
                />
            </Box>
        </>
    )
};

export default FilterMenu;