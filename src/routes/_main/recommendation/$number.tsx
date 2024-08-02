import { createFileRoute } from "@tanstack/react-router";
import { RecommendationPage } from "../../../pages/Recommendation/Recommendation";

export const Route = createFileRoute("/_main/recommendation/$number")({
  component: () => <Recommendation />,
});

function Recommendation() {
  const { number } = Route.useParams();
  return <RecommendationPage number={number} />;
}
