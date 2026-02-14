export async function GET(request, { params }) {
  const profiles = [
    {
      id: 1,
      name: "Saksham Arora",
      bio: "Frontend Developer",
      age: 25,
      gender: "Male",
      pronoun: "He/Him",
      image: "/profile.jpg"
    },
    {
      id: 2,
      name: "Ananya Sharma",
      bio: "Data Analyst",
      age: 23,
      gender: "Female",
      pronoun: "She/Her",
      image: "/profile.jpg"
    },
    {
      id: 3,
      name: "Rahul Verma",
      bio: "Backend Developer",
      age: 26,
      gender: "Male",
      pronoun: "He/Him",
      image: "/profile.jpg"
    }
  ];

  const profile = profiles.find(
    (p) => p.id === parseInt(params.id)
  );

  return Response.json(profile);
}
