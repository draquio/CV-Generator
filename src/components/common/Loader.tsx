import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Loader = () => {
  return (
    <div className="w-[210mm] flex flex-col gap-y-10 mx-auto">
      <div className="text-center">
        <Skeleton height={60} width="70%" />
        <Skeleton height={20} width="40%" />
        <Skeleton height={15} width="60%" />
      </div>
      <div>
        <Skeleton height={30} width="30%" />
        <Skeleton height={20} count={3} width="100%" />
      </div>
      <div>
        <Skeleton height={30} width="33%" />
        <Skeleton height={20} count={2} width="70%" />
      </div>
      <div>
        <Skeleton height={30} width="35%" />
        <Skeleton height={20} count={4} width="100%" />
        <br />
        <Skeleton height={20} count={4} width="100%" />
      </div>
      <div>
        <Skeleton height={30} width="25%" />
        <Skeleton height={20} count={1} width="95%" />
        <Skeleton height={20} count={1} width="70%" />
        <Skeleton height={20} count={1} width="60%" />
        <Skeleton height={20} count={1} width="65%" />
        <Skeleton height={20} count={1} width="35%" />
        <Skeleton height={20} count={1} width="85%" />
      </div>
      <div>
        <Skeleton height={30} width="22%" />
        <Skeleton height={20} count={2} width="100%" />
        <br />
        <Skeleton height={20} count={2} width="100%" />
        <br />
        <Skeleton height={20} count={2} width="100%" />
        <br />
        <Skeleton height={20} count={2} width="100%" />
        <br />
      </div>
    </div>
  );
};

export { Loader };
