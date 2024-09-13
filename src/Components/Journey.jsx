import * as React from 'react';
import Timeline from "@mui/lab/Timeline";
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CellTowerIcon from '@mui/icons-material/CellTower';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import RouterIcon from '@mui/icons-material/Router';
import StorageIcon from '@mui/icons-material/Storage';
import { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext'
export default function Journey() {
  const{theme}=useContext(ThemeContext)
  return (
    <div className={theme==='light'?'bg-gray-100':'bg-[#404040]'}>

    <div className={theme==='light'?'py-8 mx-4 md:mx-12 lg:mx-24 bg-gray-50':'py-8 mx-4 md:mx-12 lg:mx-24 '}>
        <div className='flex flex-col justify-center items-center text-center'>
            <h1 className={theme==='light'?'font-semibold text-xl md:font-bold md:text-2xl  text-gray-900 font-play ':'font-semibold text-xl md:font-bold md:text-2xl font-play text-[#ffe699] '}>Company Timeline</h1>
        </div>

    <Timeline position="alternate">
      <TimelineItem data-aos='zoom-in' data-aos-duration='1200'>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <AccessTimeIcon/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" className={theme==='light'?'text-gray-800':'text-[#ffe699]'}>
          2018-19
          </Typography>
          <Typography className={theme==='light'?'text-gray-700':'text-[#e1e1e1]'}> Esablished company & 
          Market Entry</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem data-aos='fade-up' data-aos-duration='1200'>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <CellTowerIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" className={theme==='light'?'text-gray-800':'text-[#ffe699]'}>
          2020
          </Typography>
          <Typography className={theme==='light'?'text-gray-700':'text-[#e1e1e1]'}> Market Penetration & strategic Alliances</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem data-aos='flip-up' data-aos-duration='1200'>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            <TravelExploreIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" className={theme==='light'?'text-gray-800':'text-[#ffe699]'}>
          2021
          </Typography>
          <Typography className={theme==='light'?'text-gray-700':'text-[#e1e1e1]'}>Service expansion led by growth in AAA market share (50%) in Nepal </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem data-aos='zoom-in-up' data-aos-duration='1200'>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          <TimelineDot color="secondary">
            <RepeatIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" className={theme==='light'?'text-gray-800':'text-[#ffe699]'}>
          2022
          </Typography>
          <Typography className={theme==='light'?'text-gray-700':'text-[#e1e1e1]'}>Product Innovation & Recognition followed by industry certifications</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem data-aos="fade-up"
     data-aos-duration="3000">
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            <StorageIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" className={theme==='light'?'text-gray-800':'text-[#ffe699]'}>
          2023
          </Typography>
          <Typography className={theme==='light'?'text-gray-700':'text-[#e1e1e1]'}> Dominance in AAA Solutions in Nepal with 70% market share</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500"> 
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          <TimelineDot color="secondary">
            <RouterIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" className={theme==='light'?'text-gray-800':'text-[#ffe699]'}>
          2024
          </Typography>
          <Typography className={theme==='light'?'text-gray-700':'text-[#e1e1e1]'}> Launched DWDM Service migration support for the Integrated Data Management Center</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
    </div>
    </div>
  );
}
