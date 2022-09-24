import Dynamic from 'next/dynamic';

const MapWithNoSSR = Dynamic(() => import('../../components/map'), {
    ssr: false
});

export default function MapPage() {
    return (
        <MapWithNoSSR />
    );
}