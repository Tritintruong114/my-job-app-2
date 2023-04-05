import React from "react";
import { NavLink } from "react-router-dom";
import HomePageCard from "../common/HomePageCard";
function HomePage() {
  return (
    <div className="grid bg-#F6F1E9 overflow-y-scroll  sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 px-6 w-full gap-10 h-full">
      <div className=" hover:scale-105 transition ease-in-out relative col-span-2 md:row-span-2 md:col-span-2 xl:row-span-2 xl:col-span-2  bg-white bg-opacity-30 rounded-xl shadow-lg">
        <img
          className="absolute h-full w-3/4 md:w-3/4 rounded-xl"
          src="https://itviec.com/rails/active_storage/blobs/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBd1pwTkE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--5057b96e6c16b675c25c8ea064661ed28f21c984/Blog-Thumbnail-scaled.jpg"
        ></img>
        <div className="h-full absolute overflow-hidden overflow-y-scroll w-1/4 right-0 flex flex-col justify-center items-center px-3">
          <h1 className="    font-bold">
            Danh sách Công ty IT tốt nhất Việt Nam 2023 có gì đáng chú ý?
          </h1>
          <p className="  ">
            Danh sách Công ty IT tốt nhất Việt Nam 2023 được mở rộng và phân
            loại theo quy mô công ty, cung c...
          </p>
          <NavLink
            to={`/infoCompany`}
            className=" font-light text-black hover:text-blue-500 cursor-pointer "
          >
            See more
          </NavLink>
        </div>
      </div>

      <HomePageCard
        title=" Top 15+ framework back-end, front-end và mobile phổ biến nhất 2023"
        urlImage="https://itviec.com/blog/wp-content/uploads/2022/05/framework-la-gi-thumbnail.jpg"
      />
      <HomePageCard
        urlImage="https://daveceddia.com/images/useContext-hook.png"
        title="React useContext Hook"
      />
      <HomePageCard
        title="React Router V6.4 Update!"
        urlImage="https://res.cloudinary.com/practicaldev/image/fetch/s--_DK4dCXd--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pxatkng7r8w6qh42yl0z.jpeg"
      />
      <HomePageCard
        urlImage="https://res.cloudinary.com/practicaldev/image/fetch/s--T-cPPAp---/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/2cxdh1tt2g3n55p13615.jpg"
        title="Tailwind CSS vs Bootstrap: which better?"
      />
      <HomePageCard
        urlImage="https://mobisoftinfotech.com/resources/wp-content/uploads/2022/04/next-JS-framework.png"
        title="Next.js by Vercel - The React Framework"
      />
    </div>
  );
}

export default HomePage;
