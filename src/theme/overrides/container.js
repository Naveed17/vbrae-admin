
const Container = (theme) => ({
    MuiContainer: {
        styleOverrides: {
            root: ({ theme }) => ({
                [theme.breakpoints.up('sm')]: {
                    paddingLeft: '20px',
                    paddingRight: '20px',
                },
            }),
        },
    },

});
export default Container;


