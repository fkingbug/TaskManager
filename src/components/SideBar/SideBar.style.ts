export const styleSideBar = {
  // background: ' #161e2d',
  background: '#20212c',
  width: '300px',
  height: '100%',
  overflowY: 'scroll',
  root: {
    '&::-webkit-scrollbar': {
      width: '8px',
      borderRadius: ' 8px',
    },
    '&::-webkit-scrollbar-track': {
      background: '#d4d4d4',
      boxShadow: '0 0 2px rgba(0, 0, 0, 0.2) inset',
      borderRadius: '8px',
    },
    '&::-webkit-scrollbar-thumb': {
      background: '#ee6e7a',
      borderRadius: '8px',
      border: ' 3px solid #ee6e7a',
    },
    '&::-webkit-scrollbar-thumb:hover': {
      background: ' #e66975',
    },
  },
}
