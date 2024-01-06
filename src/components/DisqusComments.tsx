import { DiscussionEmbed } from "disqus-react"

const DisqusComments = ({ title }: any) => {
    const disqusShortname = "download-video-online";
    const disqusConfig = {
        url: typeof window !== 'undefined' ? window.location.href : '',
        identifier: typeof window !== 'undefined' ? window.location.pathname : '',
        title
    }

    return (
        <div>
            <DiscussionEmbed
                shortname={disqusShortname}
                config={disqusConfig}
            />
        </div>
    )
}

export default DisqusComments;