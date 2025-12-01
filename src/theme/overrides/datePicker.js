import CalenderIcon from '@/theme/overrides/icons/calender';

export default function DatePickerOverride(theme) {
    return {
        MuiDatePicker: {
            defaultProps: {
                format: 'DD.MM.YYYY',
                slots: {
                    openPickerIcon: CalenderIcon,
                },
                slotProps: {
                    textField: {
                        size: 'medium',
                        sx: {

                            fontSize: theme.typography.body2.fontSize,
                            '& .MuiInputBase-root': {
                                backgroundColor: theme.palette.background.neutral,
                            },
                            '& .MuiInputBase-input': {
                                fontSize: theme.typography.body2.fontSize,
                                padding: '6px 10px',
                            },
                            '& .MuiPickersSectionList-root': {
                                py: 1,
                            },
                            fieldset: {
                                borderColor: theme.palette.divider,
                            },

                            '& .MuiInputAdornment-root svg': {
                                width: 20,
                                height: 20,
                            },
                        },
                    },
                    openPickerButton: {
                        sx: {
                            color: theme.palette.primary.main,
                            '&:hover': {
                                color: theme.palette.primary.dark,
                            },
                        },
                    },
                },
            },
        },
    };
}
