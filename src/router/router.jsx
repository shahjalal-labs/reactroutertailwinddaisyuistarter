import { createBrowserRouter } from "react-router";
import { RootLayout } from "../modules/shared/Layout";
// import ProtectedRoute from "./ProtectedRoute";
import AuthRoute from "../modules/Auth/AuthRoute";
import Errorpage from "./ErrorPage";
import PackageDetails from "../modules/Packages/PackageDetails/PackageDetails";
import Home from "../modules/landing/home/Home";
import GuideProfile from "../modules/Dashbaord/TourGuides/GuideProfile/GuideProfile";
import TourGuides from "../modules/Dashbaord/TourGuides/TourGuides";
import dashbourdRoutes from "../modules/Dashbaord/dashbourdRoutes";
import ProtectedRoute from "./ProtectedRoute";
import Packages from "../modules/Packages/Packages/Packages";
import Stories from "../modules/landing/home/Overview/Stories/Stories";
import AboutUs from "../pages/AboutUs";
import StoryDetails from "../modules/Dashbaord/ManageStories/StoryDetails/StoryDetails";
import TermsOfUse from "../pages/TermsOfUse/TermsOfUse";
import PrivacyPolicy from "../pages/PrivacyPolicy/PrivacyPolicy";
import CookiePolicy from "../pages/CookiePolicy/CookiePolicy";
import ProjectInfoPage from "../pages/ProjectInfoPage";
import PartnerSignup from "../pages/PartnerSignup/PartnerSignup";
import ContactUs from "../pages/ContactUs/ContactUs";
import Forbidden from "../pages/Forbidden/Forbidden";
import TourGuideRoute from "../routes/TourGuideRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Errorpage />,
    children: [
      {
        path: "/",
        Component: Home,
      },

      {
        path: "/all-trips",
        element: <Packages apiEndpoint="packages" />,
      },
      // guide profile page
      {
        path: "/guides/:id",
        element: (
          <ProtectedRoute>
            <GuideProfile />
          </ProtectedRoute>
        ),
      },

      {
        path: "tour-guides",
        element: <TourGuides />,
      },
      // package  details page
      {
        path: "packages/:id",
        element: (
          <ProtectedRoute>
            <PackageDetails />
          </ProtectedRoute>
        ),
      },

      {
        path: "community",
        element: <Stories apiEndpoint="stories?limit=0" />,
      },

      {
        path: "community/:id",
        element: (
          <ProtectedRoute>
            <StoryDetails />
          </ProtectedRoute>
        ),
      },

      {
        path: "partner-signup",
        element: <PartnerSignup />,
      },

      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "terms-of-use",
        element: <TermsOfUse />,
      },
      {
        path: "privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "cookie-policy",
        element: <CookiePolicy />,
      },

      {
        path: "project-info",
        element: <ProjectInfoPage />,
      },
      {
        path: "contact-us",
        element: <ContactUs />,
      },
      {
        path: "forbidden",
        element: <Forbidden />,
      },
    ],
  },

  dashbourdRoutes,
  AuthRoute,
]);

export default router;
