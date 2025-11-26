import { RadioCheck, RadioUnCheck } from "./icons/radio";

export default function RadioOverride(theme) {
    return {
        MuiRadio: {
            defaultProps: {
                icon: <RadioUnCheck />,
                checkedIcon: <RadioCheck />,
            },
            styleOverrides: {
                root: {
                    "& + .MuiFormControlLabel-label": {
                        color: theme.palette.text.secondary,
                    },
                    '&.Mui-checked': {
                        "& + .MuiFormControlLabel-label": {
                            color: theme.palette.text.primary,
                        }
                    },
                },
            },
        },
    };
}
