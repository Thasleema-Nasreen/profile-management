export async function GET() {
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

  return Response.json(profiles);
}
