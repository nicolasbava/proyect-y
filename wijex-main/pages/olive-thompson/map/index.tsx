import React from 'react';
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';

const MapPage: NextPage = () => {
    const [locations, setLocations] = React.useState<any[]>([]);
    const [loading, setLoading] = React.useState<boolean>(false);

    const MapComponent = dynamic(() => import("../../../components/map/mapcomponent"), {
        ssr: false
    });
    React.useEffect(() => {
        let locAux: any[] = [];
        locAux.push(Number(-56.187504));
        locAux.push(Number(-34.9103244));
        setLocations(locAux);
    }, [])
    return (
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-whitecolor py-12 px-12">

            <MapComponent locations={locations} />

        </div>
    )
}

export default MapPage