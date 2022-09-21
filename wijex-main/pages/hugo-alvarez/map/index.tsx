import React from 'react';
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import axios from 'axios';

const MapPage: NextPage = () => {
    const [locations, setLocations] = React.useState<any[]>([]);
    const [loading, setLoading] = React.useState<boolean>(false);

    const MapComponent = dynamic(() => import("../../../components/map/mapcomponent"), {
        ssr: false
    });
    React.useEffect(() => {
        let locAux: any[] = [];
        locAux.push(Number(-56.1359547));
        locAux.push(Number(-34.8528836));
        setLocations(locAux);
    }, [])
    return (
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-whitecolor py-12 px-12">
            <MapComponent locations={locations} />
        </div>
    )
}

export default MapPage