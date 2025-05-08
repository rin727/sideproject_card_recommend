import React from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import styled from 'styled-components';
import HomeDetail from '../../pages/main/HomeDetail';
import { CardList } from '../../lists/card/CardList';

const TabBox = styled.div`
    width: 390px;
    padding: 0 16px;
    box-sizing: border-box;
`
const TabButtons = styled.div`
    height: 52px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
`
const MyPage = styled.div`
  width: 48px;
  height: 48px;
`
const TabPanelContents = styled.div`
  height: 100%;
  width: 100%;
  background-color: #f9f9f9;
  margin: 32px 0 28px 0;
`

function TabPanel({ children, value, index }) {
  return value === index && (
    <TabPanelContents>
      {children}
    </TabPanelContents>
  );
}

export default function TopNavigationBar() {
  const [value, setValue] = React.useState(0);
  const handleChange = (_, newValue) => setValue(newValue);

  return (
    <TabBox>
        <TabButtons>
            <Tabs value={value} onChange={handleChange}TabIndicatorProps={{
                    style: {
                    backgroundColor: '#222', // 원하는 색상으로 설정
                    height: '1px', // 두께 조절 (선택)
                    },
                }}>
                <Tab label="홈" 
                sx={{
                    color:'#888',
                    fontWeight: '600',
                    fontSize:'20px',
                    height:'52px',
                    padding:'0 24px',
                    width: '18px',
                    outline: 'none',
                    '&.Mui-selected': {
                    color: 'black',
                    },
                    '&:focus': {
                    outline: 'none',
                    border: 'none',
                    color:'#222',
                    },
                }}/>
                <Tab label="카드리스트" 
                sx={{
                    color:'#888',
                    fontWeight: '600',
                    fontSize:'20px',
                    height:'52px',
                    padding:'0 24px',
                    outline: 'none',
                    '&.Mui-selected': {
                    color: 'black',
                    },
                    '&:focus': {
                    outline: 'none',
                    border: 'none',
                    color:'#222',
                    },
                }}/>
            </Tabs>
            
        </TabButtons>
      <TabPanel value={value} index={0}><HomeDetail/></TabPanel>
      <TabPanel value={value} index={1}><CardList/></TabPanel>
    </TabBox>
  );
}
