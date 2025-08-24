import { Link, useLocation } from "react-router";
import useFetchData from "../../../hooks/useFetchData";
import Spinner from "../../shared/Layout/Spinner";
import PackageCard from "./PackageCard";
import PageIntro from "../../../utils/PageIntro";

const Packages = ({ apiEndpoint }) => {
  const { data: packages = [], loading } = useFetchData(apiEndpoint);

  const location = useLocation();
  const isAllTripPage = location.pathname.toLowerCase().includes("all-trips");

  return (
    <section className="px-4 py-10 max-w-7xl mx-auto">
      <PageIntro h1="Our Featured Packages" />

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 p-4">
        {loading ? (
          <Spinner />
        ) : (
          packages.map((pkg) => <PackageCard key={pkg._id} pkg={pkg} />)
        )}
      </div>

      {isAllTripPage || (
        <div className="flex-container mt-8">
          <Link
            className="btn btn-soft btn-info rounded-full mt-3 "
            to="/all-trips"
          >
            View All Packages
          </Link>
        </div>
      )}
    </section>
  );
};

export default Packages;
