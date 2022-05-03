import * as React from 'react';
import { useEffect, useState } from 'react';
import { loadDictKpi } from 'services/dictionaryService';


type ColumnsName = {
    id: number, Name: string
}


export const getDataToGrid = async () => {
    loadDictKpi().then((z) => {
        const rows: ColumnsName[] = z.map((row: any) => ({
            id: row.idKpi,
            Name: row.kpiName

        }));

        // setRowsLoaded(rows?.sort((x1: number, x2: number) => x1.idKpi > x2.idKpi));
    });
}
