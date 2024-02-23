// src/app/about/page.tsx
import Container from "@/app/_components/container";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "../../lib/api";

export function AboutPage  ()  {
    const allPosts = getAllPosts();
    const morePosts = allPosts.slice(1);
  return (
    <main>
      <Container>
        <Intro />
        <section>
        <img
            src="https://images.unsplash.com/photo-1563906267088-b029e7101114?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWJvdXQlMjB1c3xlbnwwfHwwfHx8MA%3D%3D"
            alt="About Us Cover Image"
            width={1300} // Set the width to 800 pixels
            height={200} // Set the height to 600 pixels
          />    
        </section>
        <h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
       Our Team
      </h2>
      <section style={{ display: "flex", justifyContent: "space-between" }}>
  <div style={{ width: "48%", textAlign: "center" }}>
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <img
        src="https://next-blog-starter.vercel.app/assets/blog/authors/tim.jpeg"
        alt="Image 1"
        style={{ borderRadius: "50%", width: "200px", height: "200px" }}
      />
      <p style={{ fontSize: "2.5rem" }}>Tim Neutkens</p>
    </div>
  </div>

  <div style={{ width: "48%", textAlign: "center" }}>
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <img
        src="https://next-blog-starter.vercel.app/assets/blog/authors/joe.jpeg"
        alt="Image 2"
        style={{ borderRadius: "50%", width: "200px", height: "200px" }}
      />
      <p style={{ fontSize: "2.5rem" }}>Joe Haddad</p>
    </div>
  </div>
</section>

        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </main>
  );
};

export default AboutPage;
