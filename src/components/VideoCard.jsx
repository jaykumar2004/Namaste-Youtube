import React, {useEffect, useState} from 'react';
import {CHANNEL_LOGO_API} from '../utils/constants';

const VideoCard = ({info}) => {
    const {snippet, statistics} = info;
    const {channelTitle, title, thumbnails, channelId} = snippet;

    const [channelLogo, setChannelLogo] = useState(null);

    useEffect(() => {
        const fetchChannelLogo = async () => {
            try {
                const res = await fetch(CHANNEL_LOGO_API(channelId));
                const data = await res.json();
                const logo = data.items?.[0]?.snippet?.thumbnails?.default?.url;
                setChannelLogo(logo);
            } catch (err) {
                console.error('Error fetching channel logo:', err);
            }
        };

        fetchChannelLogo();
    }, [channelId]);

    return (
        <div className="w-72 m-2">
            <img
                className="rounded-xl w-full h-40 object-cover"
                alt="thumbnail"
                src={thumbnails?.medium?.url}
            />
            <div className="mt-2 flex">
                <img
                    src={channelLogo}
                    alt="channel logo"
                    className="w-10 h-10 rounded-full mr-3 object-cover bg-gray-200"
                />
                <div>
                    <h3 className="text-sm font-semibold line-clamp-2">{title}</h3>
                    <p className="text-gray-500 text-xs">{channelTitle}</p>
                    {statistics?.viewCount && (
                        <p className="text-gray-500 text-xs">
                            {Number(statistics.viewCount).toLocaleString()} views
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export const AdVideoCard = ({info}) => {
    return(
        <div className="p-1 m-1 border border-red-900">
            <VideoCard info={info} />
        </div>
    )
}

export default VideoCard;
