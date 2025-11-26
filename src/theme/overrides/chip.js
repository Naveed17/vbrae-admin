export default function Chip(theme) {
  return {
    MuiChip: {
      styleOverrides: {
        root: ({ ownerState }) => {
          const { color } = ownerState;
          const paletteColor = theme.palette[color] || theme.palette.primary;
          const isLight = theme.palette.mode === 'light';

          return {
            span: { fontWeight: 600, textTransform: 'capitalize', paddingLeft: 0, paddingRight: 0 },
            svg: { marginRight: 2 },
            backdropFilter: 'blur(6px)',
            height: 'auto',
            paddingLeft: 6,
            paddingRight: 6,
            borderRadius: 6,
            border: `1px solid ${paletteColor.main}50`, // transparent border from color
            backgroundColor: `${paletteColor.main}30`, // translucent tint (20% opacity)
            color: isLight ? paletteColor.main : paletteColor.light,
            transition: 'all 0.3s ease',
            '&:hover': {
              backgroundColor: `${paletteColor.main}40`, // slightly stronger tint on hover
            },
          };
        },
      },
    },
  };
}
