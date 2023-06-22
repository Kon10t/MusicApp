import TopChartCard from './TopChartCard';
import Sidebar from './Sidebar';
import PlaylistSlider from './PlaylistSlider';

const Hub = () => {

    return (
        <>
        <Sidebar />
        <PlaylistSlider />
        <div className="wrapper">
            
            <div className="inner h-auto flex flex-col flex-wrap sm:justify-start justify-center gap-8">
                Top charts
                {[1,2,3].map((elem, i) => (
                    <TopChartCard
                        key={elem}
                        title={elem}
                    />
                ))}
            </div>
        </div>
        </>
    )
}

export default Hub;
