import { Box, Select, MenuItem, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@/theme/overrides/icons/search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function SelectSearch({
    selectValue = 'serial',
    size = "normal",
    onSelectChange,
    searchValue = '',
    onSearchChange,
    selectOptions = [{ value: 'serial', label: 'SERIAL' }],
    searchPlaceholder = 'Search',
    startIcon = null,
    enableStartIcon = false,
    ...props
}) {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'stretch',
                border: 1,
                borderColor: 'divider',
                borderRadius: 1,
                bgcolor: 'background.neutral',

                '.MuiInputBase-root': {
                    height: 1
                },
                ...props.sx
            }}
        >
            {enableStartIcon && startIcon && (
                <Box className='start-icon' sx={{ display: 'flex', alignItems: 'center', pl: 1.5, borderRadius: 1, color: 'text.secondary', bgcolor: 'background.neutral', }}>
                    {startIcon}
                </Box>
            )}
            <Select
                size={size}
                value={selectValue}
                onChange={onSelectChange}
                IconComponent={ExpandMoreIcon}
                sx={{
                    minWidth: 100,
                    '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
                    '& .MuiSelect-select': { py: 1, fontSize: '0.75rem' },
                    borderTopRightRadius: enableStartIcon ? 0 : 0,
                    borderBottomRightRadius: enableStartIcon ? 0 : 0,
                    borderTopLeftRadius: enableStartIcon ? 0 : 1,
                    borderBottomLeftRadius: enableStartIcon ? 0 : 1,
                    position: 'relative',
                    '&::after': {
                        content: '""',
                        position: 'absolute',
                        right: 0,
                        top: 8,
                        bottom: 8,
                        width: '1px',
                        bgcolor: 'divider'
                    }
                }}
            >
                {selectOptions.map((option) => (
                    <MenuItem sx={{
                        '&.MuiButtonBase-root': { fontSize: '0.75rem !important' },
                        // smaller font
                        fontWeight: 500,     // adjust if you want it lighter too
                    }} key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </Select>
            <TextField
                size={size}
                placeholder={searchPlaceholder}
                value={searchValue}
                onChange={onSearchChange}
                InputProps={{
                    endAdornment: (
                        <InputAdornment sx={{ fontSize: 16 }} position="start">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }}

                sx={{
                    flex: 1,

                    '& .MuiOutlinedInput-root': {
                        '& fieldset': { border: 'none' },
                        '& input': { py: 1, fontSize: '0.875rem' },
                        borderTopLeftRadius: 0,
                        borderBottomLeftRadius: 0
                    }
                }}
            />
        </Box>
    );
}

