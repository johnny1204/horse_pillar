export type RaceContentType = {
    num: string,
    name: string,
    mark: null | string,
    aite: null | string,
    ana: null | string,
    win: number
}

export type RacePageLinkTypes = {
    linkPath: string;
    label: string;
    underline?: 'none' | 'hover' | 'always';
};

export type PlaceType = {
    id: number;
    name: string;
}