import React from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import styled from 'styled-components';
// import HomeDetail from '../pages/main/HomeDetail';

const TabBox = styled.div`
    width: 100%;
    box-sizing: border-box;
`
const TabButtons = styled.div`
    height: 44px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
`
const TabPanelContents = styled.div`
  height: 100%;
  width: 100%;
  background-color: #f9f9f9;
  margin: 20px 0;
  display: flex;
  align-items: baseline;
`

function TabPanel({ children, value, index }) {
  return value === index && (
    <TabPanelContents>
      {children}
    </TabPanelContents>
  );
}

export default function SmallNavigationBar({ creditCardComponent, checkCardComponent }) {
  const [value, setValue] = React.useState(0);
  const handleChange = (_, newValue) => setValue(newValue);

  return (
    <TabBox>
        <TabButtons>
        <Tabs
          value={value}
          onChange={handleChange}
              TabIndicatorProps={{
                style: {
                  backgroundColor: '#222',
                  height: '1px',
                },
              }}
              sx={{
                minHeight: '44px',
              }}
            >
        <Tab
          label="신용카드"
          sx={{
            width: '171px',
            marginRight: '8px', // 왼쪽에 위치하므로 오른쪽 여백만
            color: '#888',
            fontWeight: '600',
            fontSize: '16px',
            padding: '10px 0',
            minHeight: '44px',
            '&.Mui-selected': {
              color: 'black',
            },
            '&:focus': {
              outline: 'none',
              border: 'none',
            },
          }}
        />
        <Tab
          label="체크카드"
          sx={{
            width: '171px',
            marginLeft: '8px', // 오른쪽에 위치하므로 왼쪽 여백만
            color: '#888',
            fontWeight: '600',
            fontSize: '16px',
            padding: '10px 0',
            minHeight: '44px',
            '&.Mui-selected': {
              color: 'black',
            },
            '&:focus': {
              outline: 'none',
              border: 'none',
            },
          }}
        />
      </Tabs>
    </TabButtons>

      <TabPanel value={value} index={0}>{creditCardComponent}</TabPanel>
      <TabPanel value={value} index={1}>{checkCardComponent}</TabPanel>
    </TabBox>
  );
}
