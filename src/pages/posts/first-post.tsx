import { Box } from '@mui/system';
import { NextPage } from 'next';
import { TabContext, TabPanel } from '@material-ui/lab';
import { SyntheticEvent, useState } from 'react';
import { Tab } from '@mui/material';
import { Tabs } from '@material-ui/core';
import { RaceContent } from '@/components/Race/RaceContent';
import { VerticalTab } from '@/components/Tab/VertivalTab';

const FirstPost: NextPage = () => {
  const [value, setValue] = useState<string>('1');
  const [verticalValue, setVerticalValue] = useState(0);

  return (
    <Box sx={{ width: '100%', paddingTop: '10px' }}>
      <TabContext value={value}>
        <Box sx={{ bgcolor: 'background.paper' }}>
          <Tabs
            value={value}
            onChange={(event: SyntheticEvent, newValue: string) =>
              setValue(newValue)
            }
            variant="fullWidth"
            indicatorColor="primary"
          >
            <Tab
              label="東京"
              value="1"
              {...{
                id: `full-width-tab-0`,
                'aria-controls': `full-width-tabpanel-0`
              }}
            />
            <Tab
              label="阪神"
              value="2"
              {...{
                id: `full-width-tab-1`,
                'aria-controls': `full-width-tabpanel-1`
              }}
            />
            <Tab
              label="福島"
              value="3"
              {...{
                id: `full-width-tab-2`,
                'aria-controls': `full-width-tabpanel-2`
              }}
            />
          </Tabs>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            bgcolor: 'background.paper',
            display: 'flex',
            marginTop: '10px'
          }}
        >
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={verticalValue}
            onChange={(event: SyntheticEvent, v: number) => setVerticalValue(v)}
            aria-label="Vertical tabs example"
            sx={{ borderRight: 1, borderColor: 'divider' }}
          >
            {[...Array(12).keys()].map((i, k) => (
              <Tab
                label={(k + 1).toString() + 'R'}
                {...{
                  id: `vertical-tab-${i}`,
                  'aria-controls': `vertical-tabpanel-${i}`
                }}
                key={i}
              />
            ))}
          </Tabs>
          {[...Array(12).keys()].map((i, k) => (
            <VerticalTab
              value={verticalValue}
              index={i}
              style={{ width: '100%' }}
              key={i}
            >
              <Box>
                {[...Array(12).keys()].map((i, k) => (
                  <TabPanel value={(k + 1).toString()} key={i}>
                    <RaceContent />
                  </TabPanel>
                ))}
              </Box>
            </VerticalTab>
          ))}
        </Box>
      </TabContext>
    </Box>
  );
};

export default FirstPost;
