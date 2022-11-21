import React, { ChangeEvent, Fragment, useEffect, useState } from 'react';
import { Box } from '@mui/system';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { TabContext } from '@material-ui/lab';
import { Tab } from '@mui/material';
import { Tabs } from '@material-ui/core';
import { RaceContent } from '@/components/Race/RaceContent';
import { PlaceType, RaceContentType } from '@/types/Race';
import { GetRaceNumbers } from '@/utils/getRaceNumbers';
import path from 'path';
import fsPromises from 'fs/promises'

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

type PathParams = {
  id: string
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

export const getStaticPaths: GetStaticPaths<PathParams> = async () => {
  return {
    paths: [
      { params: { id: '20111120' } },
      { params: { id: '20211120' } },
      { params: { id: '20221120' } }
    ],
    fallback: false
  }
}

export const getStaticProps: GetStaticProps<SSGProps> = async () => {
  const filePath = path.join(process.cwd(), 'data.json');
  const buffer = await fsPromises.readFile(filePath);

  const placeJson = JSON.stringify([
    { id: 3, name: '福島' },
    { id: 5, name: '東京' },
    { id: 9, name: '阪神' },
  ])

  return {
    props: {
      rows: JSON.parse(buffer.toString()) as HorsePillarType[],
      places: JSON.parse(placeJson) as PlaceType[]
    }
  }
}

export default FirstPost;
