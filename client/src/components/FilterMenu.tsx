import { useState, Dispatch, SetStateAction } from 'react';
import { Box, Button, Slider, Divider, Typography } from "@mui/material";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { filterMenuButtonStyles } from '../styles/filterMenuButtonStyles';

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

    const [ isColorOpen, setIsColorOpen ] = useState<boolean>(false);
    const [ isClothingOpen, setIsClothingOpen ] = useState<boolean>(false);
    const [ isGenderOpen, setIsGenderOpen ] = useState<boolean>(false);

    const handlePriceRangeChange = (event: Event, newPriceChange: number | number[]) => {
        setPriceRange(newPriceChange as number[]);
    }

    return(
        <>
            <Button 
                sx={{ 
                    ...filterMenuButtonStyles, 
                    width: {xs: '100%', lg:'auto'},
                }} 
                onClick={() => setIsColorOpen(current => !current)}
            >
                color
                { isColorOpen ? <ExpandLessIcon/> : <ExpandMoreIcon/> }
            </Button>
            {
                isColorOpen &&
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Button 
                        sx={{
                            textTransform: 'uppercase',
                            bgcolor: options.color === '' ? 'appColors.buttonActiveBackground' : 'white',
                            color: options.color === '' ? 'white' : 'appColors.textColor',
                            "&:hover": {
                                bgcolor: options.color === '' ? 'appColors.buttonActiveBackground' : 'appColors.buttonOnHoverBackground',
                            } 
                        }} 
                        onClick={() => setOptions({...options, color: ''})}
                    >
                        all colors
                    </Button>
                    { 
                        colors.map((color) => (
                            <Button 
                                sx={{
                                    textTransform: 'uppercase',
                                    bgcolor: options.color === color ? 'appColors.buttonActiveBackground' : 'white',
                                    color: options.color === color ? 'white' : 'appColors.textColor',
                                    "&:hover": {
                                        bgcolor: options.color === color ? 'appColors.buttonActiveBackground' : 'appColors.buttonOnHoverBackground',
                                    } 
                                }} 
                                onClick={() => setOptions({...options, color: color})}
                            >
                                {color}
                            </Button>
                        ))
                    }
                </Box>
            }
            <Divider/>
            <Button 
                sx={{ 
                    ...filterMenuButtonStyles, 
                    width: {xs: '100%', lg:'auto'},
                }} 
                onClick={() => setIsClothingOpen(current => !current)}
            >
                clothing
                { isClothingOpen ? <ExpandLessIcon/> : <ExpandMoreIcon/> }
            </Button>
            {
                isClothingOpen &&
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Button 
                        sx={{
                            textTransform: 'uppercase',
                            bgcolor: options.type === '' ? 'appColors.buttonActiveBackground' : 'white',
                            color: options.type === '' ? 'white' : 'appColors.textColor',
                            "&:hover": {
                                bgcolor: options.type === '' ? 'appColors.buttonActiveBackground' : 'appColors.buttonOnHoverBackground',
                            } 
                        }} 
                        onClick={() => setOptions({...options, type: ''})}
                    >
                        all types
                    </Button>
                    { 
                        types.map((type) => (
                            <Button 
                                sx={{
                                    textTransform: 'uppercase',
                                    bgcolor: options.type === type ? 'appColors.buttonActiveBackground' : 'white',
                                    color: options.type === type ? 'white' : 'appColors.textColor',
                                    "&:hover": {
                                        bgcolor: options.type === type ? 'appColors.buttonActiveBackground' : 'appColors.buttonOnHoverBackground',
                                    } 
                                }} 
                                onClick={() => setOptions({...options, type: type})}
                            >
                                {type}
                            </Button>
                        ))
                    }
                </Box>
            }
            <Divider/>
            <Button 
                sx={{ 
                    ...filterMenuButtonStyles, 
                    width: {xs: '100%', lg:'auto'},
                }} 
                onClick={() => setIsGenderOpen(current => !current)}
            >
                gender
                { isGenderOpen ? <ExpandLessIcon/> : <ExpandMoreIcon/> }
            </Button>
            {
                isGenderOpen &&
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Button
                        sx={{
                            margin: '0 5px',
                            textTransform: 'uppercase',
                            bgcolor: options.sex === '' ? 'appColors.buttonActiveBackground' : 'white',
                            color: options.sex === '' ? 'white' : 'appColors.textColor',
                            "&:hover": {
                                bgcolor: options.sex === '' ? 'appColors.buttonActiveBackground' : 'appColors.buttonOnHoverBackground',
                            } 
                        }}  
                        onClick={() => setOptions({...options, sex: ''})}
                    >
                        Both
                    </Button>
                    <Button
                        sx={{
                            margin: '0 5px',
                            textTransform: 'uppercase',
                            bgcolor: options.sex === 'M' ? 'appColors.buttonActiveBackground' : 'white',
                            color: options.sex === 'M' ? 'white' : 'appColors.textColor',
                            "&:hover": {
                                bgcolor: options.sex === 'M' ? 'appColors.buttonActiveBackground' : 'appColors.buttonOnHoverBackground',
                            } 
                        }}  
                        onClick={() => setOptions({...options, sex: 'M'})}
                    >
                        Men
                    </Button>
                    <Button
                        sx={{
                            margin: '0 5px',
                            textTransform: 'uppercase',
                            bgcolor: options.sex === 'F' ? 'appColors.buttonActiveBackground' : 'white',
                            color: options.sex === 'F' ? 'white' : 'appColors.textColor',
                            "&:hover": {
                                bgcolor: options.sex === 'F' ? 'appColors.buttonActiveBackground' : 'appColors.buttonOnHoverBackground',
                            } 
                        }}  
                        onClick={() => setOptions({...options, sex: 'F'})}
                    >
                        Women
                    </Button>
                </Box>
            }
            <Divider/>
            <Box>
                <Typography 
                    sx={{
                        color: 'appColors.textColor',
                        textTransform: 'uppercase',
                        paddingTop: '5px',
                        paddingBottom: '5px',
                        fontWeight: 'bold',
                        fontSize: '16px',
                        textAlign: {xs: 'center', lg: 'left'},
                        paddingLeft: {xs: '0px', lg:'9px'},
                    }}
                >
                    price
                </Typography>
                <Box sx={{ display: 'flex',  justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography sx={{ color: 'appColors.textColor' }} >{ priceRange[0] } - { priceRange[1] }</Typography>
                    </Box>
                    <Box sx={{ width: {xs: '50%', sm: '20%', lg: '70%'} }}>
                        <Slider
                            max={options.max_price}
                            min={options.min_price}
                            value={priceRange}
                            onChange={handlePriceRangeChange}
                            sx={{ color: 'appColors.textColor' }}
                        />
                    </Box>
                </Box>
            </Box>
            <Divider/>
        </>
    )
};

export default FilterMenu;