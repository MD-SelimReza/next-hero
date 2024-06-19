import Link from "next/link";
import React from "react";

const blogs = [
  {
    slug: "the-rise-of-ai-in-everyday-life",
    title: "The Rise of AI in Everyday Life",
    date: "2024-06-15",
    content:
      "Artificial intelligence has rapidly evolved over the past decade, becoming an integral part of our daily lives. From virtual assistants like Siri and Alexa to more complex applications like autonomous vehicles, AI is transforming the way we live and work.",
    tags: ["AI", "Technology", "Innovation"],
    comments: [
      {
        author: "John Smith",
        date: "2024-06-16",
        content:
          "Great article! AI is indeed reshaping many industries. I'm excited to see where this technology will take us in the next few years.",
      },
      {
        author: "Emily Johnson",
        date: "2024-06-17",
        content:
          "I agree with the points made in this post. However, there are also concerns about privacy and job displacement that need to be addressed.",
      },
    ],
  },
  {
    slug: "5g-the-future-of-connectivity",
    title: "5G: The Future of Connectivity",
    date: "2024-05-20",
    content:
      "5G technology is set to revolutionize the way we connect to the internet, offering faster speeds, lower latency, and more reliable connections. This post explores the benefits of 5G and its potential impact on various industries.",
    tags: ["5G", "Connectivity", "Technology"],
    comments: [
      {
        author: "Michael Brown",
        date: "2024-05-21",
        content:
          "5G is going to change the game for mobile connectivity. Can't wait to experience the full potential of this technology.",
      },
      {
        author: "Sarah Lee",
        date: "2024-05-22",
        content:
          "I'm excited about 5G, but I'm also concerned about the health implications of increased electromagnetic radiation.",
      },
    ],
  },
  {
    slug: "blockchain-beyond-cryptocurrency",
    title: "Blockchain Beyond Cryptocurrency",
    date: "2024-04-10",
    content:
      "While blockchain technology is best known for its role in powering cryptocurrencies like Bitcoin, its potential applications extend far beyond digital currency. This post delves into the various uses of blockchain in industries such as supply chain management, healthcare, and finance.",
    tags: ["Blockchain", "Cryptocurrency", "Technology"],
    comments: [
      {
        author: "Alice Green",
        date: "2024-04-11",
        content:
          "Blockchain has so much potential outside of just crypto. Great read!",
      },
      {
        author: "David White",
        date: "2024-04-12",
        content:
          "The transparency and security features of blockchain could indeed revolutionize many sectors.",
      },
    ],
  },
  {
    slug: "the-impact-of-quantum-computing",
    title: "The Impact of Quantum Computing",
    date: "2024-03-05",
    content:
      "Quantum computing promises to solve problems that are currently intractable for classical computers. This post discusses the basics of quantum computing, its potential applications, and the challenges that lie ahead.",
    tags: ["Quantum Computing", "Technology", "Innovation"],
    comments: [
      {
        author: "Eve Black",
        date: "2024-03-06",
        content:
          "Quantum computing is such a fascinating topic. The potential it has is mind-blowing!",
      },
      {
        author: "Frank Harris",
        date: "2024-03-07",
        content:
          "Looking forward to seeing how quantum computing evolves. Great introduction to the topic.",
      },
    ],
  },
  {
    slug: "the-future-of-augmented-reality",
    title: "The Future of Augmented Reality",
    date: "2024-02-15",
    content:
      "Augmented reality (AR) is not just for gaming anymore. This post explores how AR is being used in fields such as education, healthcare, and retail, and what the future holds for this exciting technology.",
    tags: ["Augmented Reality", "AR", "Technology"],
    comments: [
      {
        author: "Grace Kim",
        date: "2024-02-16",
        content:
          "AR in education could be a game-changer. Imagine interactive lessons in history or science!",
      },
      {
        author: "Henry Moore",
        date: "2024-02-17",
        content:
          "AR has so many practical applications. It's exciting to think about the future possibilities.",
      },
    ],
  },
];

const BlogsContents = () => {
  return (
    <div className="px-10">
      <h1 className="text-center">This is Blog page</h1>
      <div className="flex flex-wrap gap-10 justify-center mt-10">
        {blogs?.map((blog, idx) => (
          <div key={idx} className="border p-5 space-y-5 max-w-sm">
            <h1 className="text-2xl">{blog.title}</h1>
            <p>{blog.content}</p>
            <p className="flex flex-wrap gap-5">
              {blog?.tags?.map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-emerald-400 text-black mr-5 rounded-full px-4 py-2"
                >
                  #{tag}
                </span>
              ))}
            </p>
            <div className="flex justify-between items-center">
              <p>Date: {blog.date}</p>
              <button className="btn py-2 px-8 rounded bg-blue-700">
                <Link href={`/blogs/${blog?.slug}`}>View Details</Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogsContents;
