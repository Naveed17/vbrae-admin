import CalenderIcon from '@/theme/overrides/icons/calender';

export default function DatePickerOverride(theme) {
    return {
        MuiDatePicker: {
            defaultProps: {
                format: 'dddd.mm.yyyy',
                slots: {
                    openPickerIcon: CalenderIcon,
                },
                slotProps: {
                    textField: {
                        size: 'medium',
                        sx: {

                            '.MuiPickersInputBase-root': {
                                backgroundColor: theme.palette.background.neutral,
                                fontSize: theme.typography.body2.fontSize,

                            },
                            '.MuiPickersSectionList-root': {
                                py: 1.243,
                            },
                            fieldset: {
                                borderColor: theme.palette.divider,
                            },

                        },
                    },
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
