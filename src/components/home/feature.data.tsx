import React, { ReactNode } from 'react'
import ArtTrackIcon from '@mui/icons-material/ArtTrack'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary'
import ContactSupportIcon from '@mui/icons-material/ContactSupport'

interface Data {
  title: string
  description: string
  icon?: ReactNode
}

export const data: Data[] = [
  {
    title: 'Easy Accessable',
    description: 'AI tutor stays with you wherever you are',
    icon: <ArtTrackIcon />,
  },
  {
    title: 'For free',
    description: 'No payment to the teacher, online school or courses',
    icon: <AttachMoneyIcon />,
  },
  {
    title: 'Unlimited topics to explore',
    description: 'No more books - an endless number of discussion topics to speak like a native',
    icon: <ContactSupportIcon />,
  },
  {
    title: 'Flexible Learning Style',
    description: 'Choose approach that suits you best',
    icon: <LocalLibraryIcon />,
  },

]
