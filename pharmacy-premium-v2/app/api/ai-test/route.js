export async function POST(req) {
  const { age, problem } = await req.json();

  let result = "General health is good.";

  if (problem.toLowerCase().includes("hair")) {
    result = "You may need Hair Growth Treatment.";
  } else if (problem.toLowerCase().includes("energy")) {
    result = "Low energy detected. Consider supplements.";
  }

  return Response.json({ result });
}
