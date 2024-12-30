import VideoLink from '../video/video2.mp4'
const Video = () => {
  return (
    <div className="head__video" dangerouslySetInnerHTML={{ __html: `
      <video
        loop
        muted
        autoplay
        playsInline
        src="${VideoLink}"
      ></video>
    ` }}></div>
  );
};

export default Video;
