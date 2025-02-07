import "./Analyses.css";

interface BannerImageProps {
  backimg: string;
  title: string;
}

export default function BannerImage({ backimg, title }: BannerImageProps) {
  return (
    <div className="image-container">
      <img src={backimg} alt="Lab Worker" className="banner-image" />
      <div className="text-container">
        <p className="title-text">MULTILAB s.a</p>
        <p className="subtitle-text">{title}</p>
      </div>
    </div>
  );
}
