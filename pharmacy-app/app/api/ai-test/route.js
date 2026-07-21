export async function POST(req){
 const {problem}=await req.json();
 let result="Healthy";
 if(problem?.includes("hair")) result="Hair treatment needed";
 return Response.json({result});
}