import { Flag } from "@material-ui/icons";
import { Margin, Padding } from "@mui/icons-material";
import { React } from "react";
import Slider from "react-slick";

const images = [
  {
    photo:
      "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",
    label: "image1"
  },
  {
    photo:
      "https://imagens.nxplay.com.br/video_thumb/9e196b28-98ce-47d1-8e80-1f163ac8f5fb.jpg",
    label: "image1"
  },
  {
    photo:
      "https://imagens.nxplay.com.br/video_thumb/8a356d44-aaec-4ab9-b654-208e5ceeb6ff.jpg",
    label: "image2"
  }
];
// const image1 =
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWgZh9NCXFAHjx_uAQeKf6rRQjtNi08KLGTycKn_V1wyBFF2kS";
// const image2 =
//   "https://swiperxapp.com/wp-content/uploads/2016/10/SwipeRx-Winners2-2.jpg";
export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    slickNext: true,
    slickPrevious: true,
    swipe: true
  };
  return (
    <Slider {...settings}>
      {images.map((step) => (
        <div key={step.label}>
          <img
            src={step.photo}
            alt={step.label}
            style={{
              borderRadius: "15px",
              height: "400px",
              display: "block",
              overflow: "hidden",
              width: "100%",

            }}
          />
        </div>
      ))}
    </Slider>
  );
}
