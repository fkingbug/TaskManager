export const style = {
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  background: '#17181f',
  '*::-webkit-scrollbar': {
    width: '6px',
    // borderRadius: '8px',
    background: '#2b2f4a',
  },
  '*::-webkit-scrollbar-track': {
    background: 'gray',
    boxShadow: ' 0 0 2px rgba(0, 0, 0, 0.2) inset',
    // borderRadius: '8px',
    width: '6px',
  },
  '*::-webkit-scrollbar-thumb': {
    background: '#232536',
    // borderRadius: '8px',
    border: '3px solid #232536',
  },
}

export const contentStyle = {
  flex: 1,
  display: 'flex',
  boxShadow: '1px -1px 0px 0px rgb(15 14 52 / 60%)',
  maxHeight: 'calc(100vh - 64px)',
}
