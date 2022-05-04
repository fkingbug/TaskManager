import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import AnalyticsIcon from '@mui/icons-material/Analytics'
import BookmarksIcon from '@mui/icons-material/Bookmarks'
import CookieIcon from '@mui/icons-material/Cookie'
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn'
export interface secondSelectProp {
  label: string
  value?: any
}
export const selectIconItems: secondSelectProp[] = [
  {
    label: 'Timer',
    value: <AccessAlarmsIcon />,
  },
  {
    label: 'Profole',
    value: <AccountCircleIcon />,
  },
  {
    label: 'Analytics',
    value: <AnalyticsIcon />,
  },
  {
    label: 'Books',
    value: <BookmarksIcon />,
  },
  {
    label: 'Cookie',
    value: <CookieIcon />,
  },
  {
    label: 'Money',
    value: <MonetizationOnIcon />,
  },
  {
    label: 'Shop',
    value: <LocalGroceryStoreIcon />,
  },
]
