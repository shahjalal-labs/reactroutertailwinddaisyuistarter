You are a **senior full-stack developer**.

## 📌 Task

You are given a real-world code module located at:

```
/run/media/sj/developer/web/L1B11/12mi/ass/DeshGuide/DeshGuide-client/src/contexts
```

Refactor the entire codebase **without modifying any UI or changing behavior**. Instead, improve it using:

- ✅ Clear separation of concerns
- ✅ Consistent, semantic naming conventions
- ✅ Modular architecture (hooks, services, utils, components)
- ✅ Scalable file/folder structure
- ✅ Industry-standard project layout and architecture
- ✅ Readable, testable, production-grade code
- ✅ 100% behavior and API compatibility

👉 Output the refactored code to a new folder: `contexts_refactored`

Also return a `.sh` script that will:
- Create that folder
- Write all refactored files
- Run `git add` and `git commit` with message: `refactor: added improved contexts version`

---

## 🌲 Full Project Structure (cwd)

```bash
/run/media/sj/developer/web/L1B11/12mi/ass/DeshGuide/DeshGuide-client
├── 03_37_অপরাহ্ণ_28_07_25.mp4
├── bun.lock
├── eslint.config.js
├── generate_aboutus_refactor.sh
├── index.html
├── package.json
├── public
│   └── CNAME
├── README.md
├── refactor_project_info.sh
├── src
│   ├── animation
│   │   ├── auth-lottie.json
│   │   ├── index.js
│   │   ├── LottieAnimation.jsx
│   │   └── motion.js
│   ├── App.jsx
│   ├── console
│   │   ├── error.json
│   │   └── log.json
│   ├── contexts
│   │   └── AuthContext
│   │       ├── AuthContext.jsx
│   │       └── AuthProvider.jsx
│   ├── docs
│   │   ├── cli.md
│   │   ├── DATA_MODEL.md
│   │   ├── deployment.md
│   │   ├── note.md
│   │   ├── prompt.md
│   │   └── Requirement.md
│   ├── firebase
│   │   └── firebase.init.js
│   ├── hooks
│   │   ├── useAuth.jsx
│   │   ├── useAxiosSecure.jsx
│   │   ├── useFetchData.js
│   │   ├── useHelmet.jsx
│   │   ├── usePostData.jsx
│   │   ├── useScrollToTop.js
│   │   ├── useSecureQuery.jsx
│   │   ├── useSecureUpdate.js
│   │   └── useUserRole.jsx
│   ├── index.css
│   ├── loggerClient.js
│   ├── main.jsx
│   ├── modules
│   │   ├── Auth
│   │   │   ├── AuthLayout.jsx
│   │   │   ├── AuthRoute.jsx
│   │   │   ├── components
│   │   │   │   ├── AuthSidebar.jsx
│   │   │   │   ├── constant.js
│   │   │   │   ├── SideBarCard.jsx
│   │   │   │   ├── SigninForm.jsx
│   │   │   │   ├── Signout.jsx
│   │   │   │   ├── SignUpForm.jsx
│   │   │   │   └── SocialLogin.jsx
│   │   │   ├── index.js
│   │   │   └── pages
│   │   │       ├── ForgotPass.jsx
│   │   │       ├── Signin.jsx
│   │   │       └── SignUp.jsx
│   │   ├── Dashbaord
│   │   │   ├── AddStories
│   │   │   │   └── AddStories.jsx
│   │   │   ├── Admin
│   │   │   │   ├── AddPackage
│   │   │   │   │   └── AddPackage.jsx
│   │   │   │   ├── Bookings
│   │   │   │   │   ├── AllBookings.jsx
│   │   │   │   │   └── BookingDetails.jsx
│   │   │   │   ├── ManageCandidate
│   │   │   │   │   ├── CandidateCard.jsx
│   │   │   │   │   └── ManageCandidate.jsx
│   │   │   │   ├── ManageUsers
│   │   │   │   │   ├── ManageUsers.jsx
│   │   │   │   │   └── UsersRow.jsx
│   │   │   │   └── Payments
│   │   │   │       ├── AllPayments.jsx
│   │   │   │       └── PaymentCard.jsx
│   │   │   ├── DashboardLayout.jsx
│   │   │   ├── dashbourdRoutes.jsx
│   │   │   ├── ManageProfile
│   │   │   │   └── ManageProfile.jsx
│   │   │   ├── ManageStories
│   │   │   │   ├── components
│   │   │   │   │   ├── EditStoryModal.jsx
│   │   │   │   │   └── StoryCard.jsx
│   │   │   │   ├── ManageStories.jsx
│   │   │   │   └── StoryDetails
│   │   │   │       └── StoryDetails.jsx
│   │   │   ├── TourGuides
│   │   │   │   ├── AssignedTour
│   │   │   │   │   ├── AssignedTourCard.jsx
│   │   │   │   │   ├── AssignedTour.jsx
│   │   │   │   │   └── refractorAssignedTourPrompt.md
│   │   │   │   ├── GuideProfile
│   │   │   │   │   └── GuideProfile.jsx
│   │   │   │   └── TourGuides.jsx
│   │   │   └── Tourist
│   │   │       ├── Bookings
│   │   │       │   ├── BookingCard.jsx
│   │   │       │   └── MyBookings.jsx
│   │   │       ├── JoinTourGuide
│   │   │       │   └── JoinTourGuide.jsx
│   │   │       └── PaymentBooking
│   │   │           ├── PaymentBooking.jsx
│   │   │           ├── PaymentForm.jsx
│   │   │           └── refractorPaymentBookingPrompt.md
│   │   ├── landing
│   │   │   ├── home
│   │   │   │   ├── Bannnerr
│   │   │   │   │   └── Banner.jsx
│   │   │   │   ├── CallToActionFull
│   │   │   │   │   └── CallToActionFull.jsx
│   │   │   │   ├── Home.jsx
│   │   │   │   ├── HowItWorks
│   │   │   │   │   └── HowItWorks.jsx
│   │   │   │   ├── LiveStats
│   │   │   │   │   └── LiveStats.jsx
│   │   │   │   ├── NewsletterSignup
│   │   │   │   │   └── NewsletterSignup.jsx
│   │   │   │   ├── Overview
│   │   │   │   │   ├── Overview.jsx
│   │   │   │   │   └── Stories
│   │   │   │   │       ├── refractorStoriesPrompt.md
│   │   │   │   │       ├── Stories.jsx
│   │   │   │   │       └── StoryCard.jsx
│   │   │   │   ├── PartnerWithUs
│   │   │   │   │   └── PartnerWithUs.jsx
│   │   │   │   ├── RandomGuides
│   │   │   │   │   └── RandomGuides.jsx
│   │   │   │   ├── Testimonials
│   │   │   │   │   ├── TestimonialCard.jsx
│   │   │   │   │   └── Testimonials.jsx
│   │   │   │   ├── TourismAndGuides.jsx
│   │   │   │   ├── TrendingDestinations
│   │   │   │   │   └── TrendingDestinations.jsx
│   │   │   │   └── WhyChooseUs
│   │   │   │       └── WhyChooseUs.jsx
│   │   │   └── index.js
│   │   ├── Packages
│   │   │   ├── PackageDetails
│   │   │   │   └── PackageDetails.jsx
│   │   │   └── Packages
│   │   │       ├── PackageCard.jsx
│   │   │       └── Packages.jsx
│   │   └── shared
│   │       ├── Layout
│   │       │   ├── Footer
│   │       │   │   ├── components
│   │       │   │   │   ├── FooterColumns.jsx
│   │       │   │   │   ├── FooterCopyright.jsx
│   │       │   │   │   └── SocialIcons.jsx
│   │       │   │   ├── constants
│   │       │   │   │   ├── footerLinks.js
│   │       │   │   │   └── socialIcons.js
│   │       │   │   ├── Footer.jsx
│   │       │   │   └── hooks
│   │       │   │       └── useFooterAnimation.js
│   │       │   ├── index.js
│   │       │   ├── NavbarDrawer.jsx
│   │       │   ├── Navbar.jsx
│   │       │   ├── navbarLinksConstant.jsx
│   │       │   ├── refactor_footer.sh
│   │       │   ├── RootLayout.jsx
│   │       │   ├── SidebarLink.jsx
│   │       │   ├── sidebarLinks.js
│   │       │   └── Spinner.jsx
│   │       └── ui
│   │           ├── Avatar.jsx
│   │           ├── Brand.jsx
│   │           ├── Button.jsx
│   │           ├── DropDown.jsx
│   │           ├── index.js
│   │           ├── Input.jsx
│   │           └── swalToast.js
│   ├── pages
│   │   ├── AboutUs
│   │   │   ├── AboutUs.jsx
│   │   │   ├── components
│   │   │   │   ├── AboutDeveloper.jsx
│   │   │   │   ├── AboutIntro.jsx
│   │   │   │   ├── ContactCards.jsx
│   │   │   │   ├── DesignPhilosophy.jsx
│   │   │   │   ├── FooterNote.jsx
│   │   │   │   └── LiveProjects.jsx
│   │   │   ├── constants
│   │   │   │   └── about.constants.js
│   │   │   └── index.js
│   │   ├── Community
│   │   │   ├── CommunityPage.jsx
│   │   │   └── components
│   │   ├── ContactUs
│   │   │   └── ContactUs.jsx
│   │   ├── CookiePolicy
│   │   │   └── CookiePolicy.jsx
│   │   ├── faq
│   │   │   ├── faq.constant.js
│   │   │   └── FAQ.jsx
│   │   ├── Forbidden
│   │   │   └── Forbidden.jsx
│   │   ├── PartnerSignup
│   │   │   └── PartnerSignup.jsx
│   │   ├── PrivacyPolicy
│   │   │   └── PrivacyPolicy.jsx
│   │   ├── ProjectInfoPage
│   │   │   ├── components
│   │   │   │   ├── ClientInfoSection.jsx
│   │   │   │   ├── DeveloperInfoSection.jsx
│   │   │   │   └── ServerInfoSection.jsx
│   │   │   ├── constants
│   │   │   │   └── projectInfo.js
│   │   │   ├── hooks
│   │   │   ├── index.js
│   │   │   └── ProjectInfoPage.jsx
│   │   ├── ProjectInfoPagePrev
│   │   │   ├── ProjectInfoPage.jsx
│   │   │   └── refractorProjectInfoPagePrompt.md
│   │   └── TermsOfUse
│   │       └── TermsOfUse.jsx
│   ├── router
│   │   ├── ErrorPage.jsx
│   │   ├── ProtectedRoute.jsx
│   │   └── router.jsx
│   ├── routes
│   │   ├── AdminRoute.jsx
│   │   ├── routeCheck.md
│   │   └── TourGuideRoute.jsx
│   └── utils
│       ├── axiosInstance.js
│       ├── customAlert.js
│       ├── deleteData.js
│       ├── ErrorMessage.jsx
│       ├── fetchData.js
│       ├── PageIntro.jsx
│       ├── postData.js
│       ├── TypeWriterEffect.jsx
│       └── updateData.js
├── structure.md
├── tmuxShow03_25_অপরাহ্ণ_19_07_25.mp4
├── vite.config.js
└── vite.logger.plugin.js

78 directories, 167 files
```

## 📁 Target Module Tree (contexts)

```bash
/run/media/sj/developer/web/L1B11/12mi/ass/DeshGuide/DeshGuide-client/src/contexts
└── AuthContext
    ├── AuthContext.jsx
    └── AuthProvider.jsx

2 directories, 2 files
```

## 📄 Module Files & Contents

### `AuthContext/AuthContext.jsx`
```javascript
import { createContext } from "react";

export const AuthContext = createContext(null);
```

### `AuthContext/AuthProvider.jsx`
```javascript
import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { auth } from "../../firebase/firebase.init";
import axios from "axios";

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const googleProvder = new GoogleAuthProvider();

  const githubProvider = new GithubAuthProvider();

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvder);
  };
  const githubSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };
  // 🔹 Email-password sign-up
  const signupUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signoutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  // ✅ Login with Email & Password
  const signinUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // 🔹 Update Firebase User Profile (displayName & photoURL)
  const updateUser = async (name, photoURL) => {
    if (!auth.currentUser) return;
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL,
    });
  };
  const authInfo = {
    googleSignIn,
    githubSignIn,
    loading,
    user,
    signoutUser,
    signinUser,
    signupUser,
    updateUser,
  };

  useEffect(() => {
    const cleanUp = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      setLoading(false);

      if (currentUser?.email) {
        axios
          .post(
            "http://localhost:5000/api/v1/auth/create-jwt",
            { email: currentUser.email },
            { withCredentials: true },
          )
          .then((res) => console.log(res.data))
          .catch((error) => console.log(error));
      }
    });

    return () => cleanUp();
  }, []);
  return (
    <>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </>
  );
};

export default AuthProvider;
```
