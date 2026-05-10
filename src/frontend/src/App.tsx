import { AboutPage } from "@/pages/AboutPage";
import { AssessmentPage } from "@/pages/AssessmentPage";
import { HomePage } from "@/pages/HomePage";
import { NewsPage } from "@/pages/NewsPage";
import { ResourcesPage } from "@/pages/ResourcesPage";
import { SlVsHlPage } from "@/pages/SlVsHlPage";
import { SyllabusPage } from "@/pages/SyllabusPage";
import {
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";

const rootRoute = createRootRoute();

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const syllabusRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/syllabus",
  component: SyllabusPage,
});

const slVsHlRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/sl-vs-hl",
  component: SlVsHlPage,
});

const assessmentRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/assessment",
  component: AssessmentPage,
});

const resourcesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/resources",
  component: ResourcesPage,
});

const newsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/news",
  component: NewsPage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: AboutPage,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  syllabusRoute,
  slVsHlRoute,
  assessmentRoute,
  resourcesRoute,
  newsRoute,
  aboutRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
