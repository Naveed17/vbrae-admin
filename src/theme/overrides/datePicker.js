import CalenderIcon from '@/theme/overrides/icons/calender';

export default function DatePickerOverride(theme) {
    const commonPickerStyles = {
        size: 'medium',
        sx: {
            // Background
            '& .MuiPickersInputBase-root': {
                backgroundColor: theme.palette.background.neutral,
                borderRadius: theme.shape.borderRadius,
                minHeight: 40,
            },

            // Outlined border
            '& .MuiPickersOutlinedInput-notchedOutline': {
                borderColor: theme.palette.divider,
            },

            '&:hover .MuiPickersOutlinedInput-notchedOutline': {
                borderColor: theme.palette.text.primary,
            },

            '& .Mui-focused .MuiPickersOutlinedInput-notchedOutline': {
                borderColor: theme.palette.primary.main,
                borderWidth: 2,
            },

            // Inside padding + text
            '& .MuiPickersSectionList-root': {
                py: 1,
                px: 1.5,
            },

            '& .MuiPickersSectionList-sectionContent': {
                fontSize: theme.typography.body2.fontSize,
            },

            // Icon
            '& .MuiInputAdornment-root svg': {
                width: 20,
                height: 20,
            },
        },
    };

    return {
        // ---------------------------
        // DATE PICKER
        // ---------------------------
        MuiDatePicker: {
            defaultProps: {
                format: 'DD.MM.YYYY',
                slots: { openPickerIcon: CalenderIcon },
                slotProps: {
                    textField: commonPickerStyles,
                    openPickerButton: {
                        sx: {
                            color: theme.palette.primary.main,
                            '&:hover': { color: theme.palette.primary.dark },
                        },
                    },
                },
            },
        },

        // ---------------------------
        // DATETIME PICKER
        // ---------------------------
        MuiDateTimePicker: {
            defaultProps: {
                format: 'DD.MM.YYYY HH:mm',
                slots: { openPickerIcon: CalenderIcon },
                slotProps: {
                    textField: commonPickerStyles,
                    openPickerButton: {
                        sx: {
                            color: theme.palette.primary.main,
                            '&:hover': { color: theme.palette.primary.dark },
                        },
                    },
                },
            },
        },
    };
}
