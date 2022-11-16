import React, { ChangeEvent, Fragment, useEffect, useState } from 'react';
import { Box } from '@mui/system';
import { GetStaticProps, NextPage } from 'next';
import { TabContext } from '@material-ui/lab';
import { Tab } from '@mui/material';
import { Tabs } from '@material-ui/core';
import { RaceContent } from '@/components/Race/RaceContent';
import { PlaceType, RaceContentType } from '@/types/Race';
import { GetRaceNumbers } from '@/utils/getRaceNumbers';

type PillarContentType = {
  raceNum: number
  horses: RaceContentType[]
}

type HorsePillarType = {
  place: number,
  pillars: PillarContentType[]
}

type SSGProps = {
  rows: HorsePillarType[]
  places: PlaceType[]
}

const FirstPost: NextPage<SSGProps> = ({ rows, places }) => {
  const [placeId, setPlaceId] = useState<number>(places[0].id);
  const [raceNum, setRaceNum] = useState<number>(1);

  const [pillar, setPillar] = useState<PillarContentType>();

  useEffect(() => {
    const target = rows.find((p: HorsePillarType) => p.place === placeId);
  
    setPillar(target?.pillars.find((content: PillarContentType) => content.raceNum === raceNum))
  }, [placeId, raceNum])

  return (
    <Box sx={{ width: '100%', paddingTop: '10px' }}>
      <TabContext value={placeId.toString()}>
        <Box sx={{ bgcolor: 'background.paper' }}>
          <Tabs
            value={placeId}
            onChange={(_: ChangeEvent<{}>, newValue: string) => setPlaceId(Number(newValue))}
            variant="fullWidth"
            indicatorColor="primary"
          >
            {
              places.map((place: PlaceType) => (
                  <Tab
                    key={place.id}
                    label={place.name}
                    value={place.id}
                    {...{
                      id: `full-width-tab-${place.id}`,
                      'aria-controls': `full-width-tabpanel-${place.id}`
                    }}
                  />
              ))
            }
          </Tabs>
        </Box>
        <Box>
          <Box display="flex" justifyContent="center" width="100%">
            <Tabs
              value={raceNum}
              onChange={(_: ChangeEvent<{}>, newValue: string) => setRaceNum(Number(newValue))}
              variant="scrollable"
              scrollButtons="auto"
              indicatorColor="primary"
            >
              {GetRaceNumbers.map((raceNumber: string, i: number) => (
                <Tab
                  label={raceNumber}
                  value={(i + 1)}
                  key={i}
                />
              ))}
            </Tabs>
          </Box>
          <Box sx={{ marginTop: "10px", paddingX: "20px" }}>
            {
              pillar && <RaceContent props={ pillar.horses} />
            }
          </Box>
        </Box>
      </TabContext>
    </Box>
  );
};

export const getStaticProps: GetStaticProps<SSGProps> = async () => {
  const json = JSON.stringify([
    {
      place: 3,
      pillars: [
        { 
          raceNum: 1,
          horses: [
            { num: '1', name: '馬名1', mark: null, aite: null, ana: null, win: 33 },
            { num: '2', name: '馬名2', mark: '△', aite: null, ana: null, win: 85 },
            { num: '3', name: '馬名3', mark: null, aite: null, ana: null, win: 66 },
            { num: '4', name: '馬名4', mark: null, aite: null, ana: null, win: 45 },
            { num: '5', name: '馬名5', mark: '◎', aite: null, ana: null, win: 70 },
            { num: '6', name: '馬名6', mark: null, aite: null, ana: null, win: 13 },
            { num: '7', name: '馬名7', mark: '◯', aite: null, ana: null, win: 11 },
            { num: '8', name: '馬名8', mark: null, aite: null, ana: null, win: 58 },
            { num: '9', name: '馬名9', mark: '▲', aite: null, ana: null, win: 36 },
            { num: '10',name:  '馬名10', mark: null, aite: null, ana: null, win: 1 },
            { num: '11',name:  '馬名11', mark: null, aite: null, ana: null, win: 1 }
          ]
        }
      ]
    }
  ]);

  const placeJson = JSON.stringify([
    { id: 3, name: '福島' },
    { id: 5, name: '東京' },
    { id: 9, name: '阪神' },
  ])

  return {
    props: {
      rows: JSON.parse(json) as HorsePillarType[],
      places: JSON.parse(placeJson) as PlaceType[]
    }
  }
}

export default FirstPost;
