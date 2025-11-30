import { GetPlaceDetails, PHOTO_REF_URL } from "@/service/GlobalApi";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function UserTripCardItem({ trip }) {
  const [photoUrl, setPhotoUrl] = useState();

  useEffect(() => {
    trip && GetPlacePhoto();
  }, [trip]);

  const GetPlacePhoto = async () => {
    const data = {
      textQuery: trip?.userSelection?.location?.label,
    };
    const result = await GetPlaceDetails(data).then((resp) => {
      const PhotoUrl = PHOTO_REF_URL.replace(
        "{NAME}",
        resp.data.places[0].photos[3].name
      );
      setPhotoUrl(PhotoUrl);
    });
  };

  return (
    <Link to={"/view-trip/" + trip?.id}>
      <div className="bg-white/5 backdrop-blur-md rounded-xl p-3 border border-white/10 
                      hover:scale-[1.03] hover:shadow-xl hover:shadow-black/20 
                      transition-all duration-300 cursor-pointer">

        {/* Image */}
        <div className="overflow-hidden rounded-lg">
          <img
            src={photoUrl || "/placeholder.jpg"}
            className="object-cover w-full h-[220px] rounded-lg 
                       hover:scale-110 transition-transform duration-500"
          />
        </div>

        {/* Text */}
        <div className="mt-3 space-y-1">
          <h2 className="font-bold text-xl text-white tracking-tight">
            {trip?.userSelection?.location?.label}
          </h2>

          <p className="text-sm text-gray-300">
            {trip?.userSelection.noOfDays} Days trip •{" "}
            <span className="text-emerald-400 font-semibold">
              {trip?.userSelection?.budget}
            </span>{" "}
            Budget
          </p>
        </div>
      </div>
    </Link>
  );
}

export default UserTripCardItem;
